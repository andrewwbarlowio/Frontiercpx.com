import { Webhook } from 'svix';
import { database } from '../lib/contact-db.mjs';
import { recordProviderEvent } from '../lib/contact-store.mjs';
import { json, readRaw, handleError } from '../lib/contact-http.mjs';
import { ContactError } from '../lib/contact-validation.mjs';
export const config={api:{bodyParser:false}};
export default async function handler(req,res) {
 if(req.method!=='POST')return json(res,405,{ok:false,error:'method_not_allowed'});
 try {
  if(!process.env.RESEND_WEBHOOK_SECRET)throw new ContactError(503,'webhook_not_configured');
  const raw=await readRaw(req);
  let event;
  try {event=new Webhook(process.env.RESEND_WEBHOOK_SECRET).verify(raw.toString('utf8'),{'svix-id':req.headers['svix-id'],'svix-timestamp':req.headers['svix-timestamp'],'svix-signature':req.headers['svix-signature']});}
  catch {throw new ContactError(401,'invalid_signature');}
  if(!['email.delivered','email.bounced','email.complained','email.failed','email.sent','email.delivery_delayed'].includes(event.type))return json(res,200,{ok:true,ignored:true});
  if(typeof event.data?.email_id!=='string' || !Number.isFinite(Date.parse(event.created_at)))throw new ContactError(400,'invalid_event');
  await recordProviderEvent(database(),{id:req.headers['svix-id'],messageId:event.data.email_id,type:event.type,occurredAt:event.created_at});
  return json(res,200,{ok:true});
 }catch(error){return handleError(res,error);}
}
