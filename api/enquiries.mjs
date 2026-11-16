import { ipAddress } from '@vercel/functions';
import { database } from '../lib/contact-db.mjs';
import { validateEnquiry, clientBucket, notificationConfig, ContactError } from '../lib/contact-validation.mjs';
import { saveEnquiry } from '../lib/contact-store.mjs';
import { deliverDue } from '../lib/contact-notifications.mjs';
import { json, readJson, checkOrigin, environmentName, handleError } from '../lib/contact-http.mjs';
import routes from '../lib/generated-form-routes.json' with { type:'json' };
export const config={api:{bodyParser:false}};
export function createEnquiryHandler({getDatabase=database,store=saveEnquiry,send=deliverDue,env=process.env}={}) {
 return async function handler(req,res) {
 if (req.method!=='POST') {res.setHeader('Allow','POST');return json(res,405,{ok:false,error:'method_not_allowed'});}
 try {
  if (env.ENQUIRY_CAPTURE_ENABLED!=='true' || !env.CONTACT_RATE_LIMIT_SECRET) throw new ContactError(503,'capture_not_configured');
  checkOrigin(req,env);
  const value=validateEnquiry(await readJson(req),routes);
  const environment=environmentName(env);
  const result=await store(getDatabase(),value,{environment,ipHash:clientBucket(ipAddress(new Headers(req.headers))||'unknown',env.CONTACT_RATE_LIMIT_SECRET),...notificationConfig(env)});
  // This bounded attempt is awaited. The committed outbox independently survives request termination.
  try {await send(getDatabase(),{environment,enquiryId:result.id,limit:1,env});} catch {console.error('contact_notification_deferred');}
  return json(res,result.duplicate?200:201,{ok:true,reference:result.id});
 } catch(error) {return handleError(res,error);}
}

}
export default createEnquiryHandler();
