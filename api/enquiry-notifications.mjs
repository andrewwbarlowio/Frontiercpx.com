import { database } from '../lib/contact-db.mjs';
import { deliverDue } from '../lib/contact-notifications.mjs';
import { authorised, json, environmentName, handleError } from '../lib/contact-http.mjs';
export default async function handler(req,res) {
 if (!authorised(req,process.env.CRON_SECRET)) return json(res,401,{ok:false,error:'unauthorised'});
 if (!['GET','POST'].includes(req.method)) return json(res,405,{ok:false,error:'method_not_allowed'});
 try {
  const result=await deliverDue(database(),{environment:environmentName(),limit:5});
  // Remove expired anonymous limiter buckets without touching enquiry data.
  await database().query('DELETE FROM frontier_contact.rate_limits WHERE expires_at<now()');
  const {rows}=await database().query(`SELECT count(*) FILTER (WHERE status IN ('pending','retry','processing'))::int AS pending,count(*) FILTER (WHERE status='failed' OR delivery_status IN ('bounced','complained','failed'))::int AS failed,min(created_at) FILTER (WHERE status IN ('pending','retry','processing')) AS oldest_pending FROM frontier_contact.notification_deliveries d JOIN frontier_contact.enquiries e ON e.id=d.enquiry_id WHERE e.environment=$1`,[environmentName()]);
  return json(res,200,{ok:true,...result,...rows[0]});
 } catch(error) {return handleError(res,error);}
}
