import { randomUUID } from 'node:crypto';
import { ContactError, payloadHash } from './contact-validation.mjs';
import { transaction } from './contact-db.mjs';
const s='frontier_contact';
export async function saveEnquiry(pool, value, {environment,ipHash,recipients,sender}) {
 const hash=payloadHash(value,environment);
 return transaction(pool,async db=>{
  // Serialise identical submission keys so concurrent retries see the committed result.
  await db.query('SELECT pg_advisory_xact_lock(hashtextextended($1,0))',[value.submissionKey]);
  const existing=await db.query(`SELECT id,payload_hash FROM ${s}.enquiries WHERE submission_key=$1`,[value.submissionKey]);
  if (existing.rows.length) {
   if (existing.rows[0].payload_hash!==hash) throw new ContactError(409,'submission_changed');
   return {id:existing.rows[0].id,duplicate:true};
  }
  // Atomic durable, fixed-window limits. Only opaque HMACs are stored, never raw IPs.
  const hour=Math.floor(Date.now()/3600000);
  for (const [key,max] of [[`${environment}:ip:${ipHash}:${hour}`,5],[`${environment}:global:${hour}`,300]]) {
   const allowed=await db.query(`INSERT INTO ${s}.rate_limits(bucket,count,expires_at) VALUES($1,1,now()+interval '2 hours') ON CONFLICT(bucket) DO UPDATE SET count=${s}.rate_limits.count+1 WHERE ${s}.rate_limits.count<$2 RETURNING count`,[key,max]);
   if (!allowed.rows.length) throw new ContactError(429,'too_many_requests');
  }
  const id=randomUUID();
  await db.query(`INSERT INTO ${s}.enquiries(id,submission_key,payload_hash,name,email,phone,requirement,source_path,form_version,environment,privacy_notice_version) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,[id,value.submissionKey,hash,value.name,value.email,value.phone,value.requirement,value.sourcePath,value.formVersion,environment,'2026-11-16']);
  for (const recipient of recipients) await db.query(`INSERT INTO ${s}.notification_deliveries(id,enquiry_id,recipient,sender) VALUES($1,$2,$3,$4)`,[randomUUID(),id,recipient,sender]);
  return {id,duplicate:false};
 });
}
export async function claimDelivery(pool,environment,enquiryId=null) {
 const token=randomUUID();
 const result=await pool.query(`WITH due AS (
 SELECT d.id FROM ${s}.notification_deliveries d JOIN ${s}.enquiries e ON e.id=d.enquiry_id
 WHERE e.environment=$1 AND ($2::uuid IS NULL OR e.id=$2)
 AND ((d.status IN ('pending','retry') AND d.next_attempt_at<=now()) OR (d.status='processing' AND d.lease_until<now()))
 ORDER BY d.next_attempt_at LIMIT 1 FOR UPDATE OF d SKIP LOCKED)
 UPDATE ${s}.notification_deliveries d SET status='processing',lease_until=now()+interval '2 minutes',lease_token=$3,attempt_count=d.attempt_count+1,first_attempt_at=COALESCE(d.first_attempt_at,now()),updated_at=now() FROM due WHERE d.id=due.id RETURNING d.*`,[environment,enquiryId,token]);
 if (!result.rows.length) return null;
 const delivery=result.rows[0];
 const enquiry=await pool.query(`SELECT id,name,email,phone,requirement,source_path,received_at,environment FROM ${s}.enquiries WHERE id=$1`,[delivery.enquiry_id]);
 return {...delivery,enquiry:enquiry.rows[0]};
}
export async function reconcileEvents(db,messageId) {
 await db.query(`UPDATE ${s}.notification_deliveries d SET
 delivery_status=CASE
 WHEN EXISTS(SELECT 1 FROM ${s}.provider_events WHERE message_id=$1 AND event_type='email.complained') THEN 'complained'
 WHEN EXISTS(SELECT 1 FROM ${s}.provider_events WHERE message_id=$1 AND event_type='email.bounced') THEN 'bounced'
 WHEN EXISTS(SELECT 1 FROM ${s}.provider_events WHERE message_id=$1 AND event_type='email.delivered') THEN 'delivered'
 WHEN EXISTS(SELECT 1 FROM ${s}.provider_events WHERE message_id=$1 AND event_type='email.failed') THEN 'failed'
 ELSE d.delivery_status END,
 delivered_at=COALESCE(d.delivered_at,(SELECT min(occurred_at) FROM ${s}.provider_events WHERE message_id=$1 AND event_type='email.delivered')),updated_at=now()
 WHERE d.provider_message_id=$1`,[messageId]);
}
export async function acceptDelivery(pool,d,messageId) {
 await transaction(pool,async db=>{
  await db.query('SELECT pg_advisory_xact_lock(hashtextextended($1,0))',[messageId]);
  await db.query(`UPDATE ${s}.notification_deliveries SET status='accepted',provider_message_id=$3,accepted_at=now(),lease_until=NULL,lease_token=NULL,last_error_code=NULL,updated_at=now() WHERE id=$1 AND lease_token=$2`,[d.id,d.lease_token,messageId]);
  await reconcileEvents(db,messageId);
 });
}
export async function failDelivery(pool,d,{code,retry,delaySeconds=60}) {
 const exhausted=d.attempt_count>=10;
 await pool.query(`UPDATE ${s}.notification_deliveries SET status=$3,last_error_code=$4,next_attempt_at=now()+($5*interval '1 second'),lease_until=NULL,lease_token=NULL,updated_at=now() WHERE id=$1 AND lease_token=$2`,[d.id,d.lease_token,retry&&!exhausted?'retry':'failed',code,delaySeconds]);
}
export async function recordProviderEvent(pool,{id,messageId,type,occurredAt}) {
 await transaction(pool,async db=>{
  await db.query('SELECT pg_advisory_xact_lock(hashtextextended($1,0))',[messageId]);
  await db.query(`INSERT INTO ${s}.provider_events(event_id,message_id,event_type,occurred_at) VALUES($1,$2,$3,$4) ON CONFLICT DO NOTHING`,[id,messageId,type,occurredAt]);
  await reconcileEvents(db,messageId);
 });
}
