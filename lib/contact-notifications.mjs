import { claimDelivery, acceptDelivery, failDelivery } from './contact-store.mjs';
const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function notificationMessage(delivery) {
 const e=delivery.enquiry;
 if(!e.customer_id || !e.id)throw new Error('missing_persisted_identity');
 const entries=[['Name',e.name],['Email',e.email],['Phone',e.phone],['Message',e.requirement||'No message provided'],['Page','https://frontiercpx.com'+e.source_path],['Received (UTC)',new Date(e.received_at).toISOString()],['Customer ID',e.customer_id],['Enquiry ID',e.id],['Environment',e.environment]];
 const text=entries.map(([k,v])=>`${k}: ${v}`).join('\n\n');
 const html='<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>New Frontier enquiry</title></head><body style="font-family:Arial,Helvetica,sans-serif;color:#172d43;font-size:16px;line-height:1.6"><h1>New Frontier enquiry</h1><table cellpadding="0" cellspacing="0" border="0" width="100%">'+entries.map(([k,v])=>`<tr><th scope="row" align="left" valign="top" style="padding-bottom:16px;font-size:16px;line-height:1.6;color:#172d43">${escape(k)}</th><td style="padding-bottom:16px;padding-left:16px;font-size:16px;line-height:1.6;color:#172d43;white-space:pre-wrap">${escape(v)}</td></tr>`).join('')+'</table></body></html>';
 return {from:delivery.sender,to:[delivery.recipient],reply_to:e.email,subject:`${e.environment==='production'?'':'[TEST] '}New Frontier enquiry — ${e.source_path} — ${e.id}`,text,html};
}
export function sendingEnabled(env=process.env) {
 return env.CONTACT_NOTIFICATIONS_ENABLED==='true' && !!env.RESEND_API_KEY && (env.VERCEL_ENV==='production' || env.CONTACT_PREVIEW_NOTIFICATIONS_ENABLED==='true');
}
export async function deliverDue(pool,{environment,enquiryId=null,limit=5,env=process.env,fetcher=fetch}={}) {
 if (!sendingEnabled(env)) return {enabled:false,processed:0};
 let processed=0;const started=Date.now();
 for (;processed<limit && Date.now()-started<40000;processed++) {
  const d=await claimDelivery(pool,environment,enquiryId); if (!d) break;
  // Resend caches keys for 24h. Do not blindly repeat an ambiguous send after that window.
  if (Date.now()-new Date(d.first_attempt_at).getTime()>23*3600000) {
   await failDelivery(pool,d,{code:'manual_review_idempotency_window',retry:false}); continue;
  }
  try {
   const response=await fetcher('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${env.RESEND_API_KEY}`,'Content-Type':'application/json','Idempotency-Key':`frontier-enquiry/${d.id}`},body:JSON.stringify(notificationMessage(d)),signal:AbortSignal.timeout(8000)});
   if (!response.ok) {
    const retry=response.status===429 || response.status>=500;
    const retryAfter=Number(response.headers.get('retry-after'));
    await failDelivery(pool,d,{code:`resend_http_${response.status}`,retry,delaySeconds:Math.max(Math.min(Number.isFinite(retryAfter)?retryAfter:0,3600),Math.min(3600,60*2**Math.min(d.attempt_count-1,6)))});
    continue;
   }
   const body=await response.json();
   if (typeof body.id!=='string' || !body.id) throw new Error('invalid_provider_response');
   await acceptDelivery(pool,d,body.id);
  } catch {
   // Includes a lost provider response or DB acknowledgement. Retry with the same provider key.
   await failDelivery(pool,d,{code:'delivery_attempt_incomplete',retry:true,delaySeconds:Math.min(3600,60*2**Math.min(d.attempt_count-1,6))}).catch(()=>{});
  }
 }
 return {enabled:true,processed};
}
