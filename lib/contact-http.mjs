import { ContactError, constantEqual } from './contact-validation.mjs';
export function json(res,status,body) {
 res.setHeader('Cache-Control','no-store');res.setHeader('Content-Type','application/json');
 return res.status(status).json(body);
}
export async function readJson(req) {
 if (!(req.headers['content-type']||'').toLowerCase().startsWith('application/json')) throw new ContactError(415,'unsupported_content_type');
 const bytes=await readRaw(req,12000);
 try { return JSON.parse(bytes.toString('utf8')); } catch {throw new ContactError(400,'invalid_json');}
}
export async function readRaw(req,max=65536) {
 if (Number(req.headers['content-length'])>max) throw new ContactError(413,'body_too_large');
 // Vercel request body parsing is disabled; enforce the limit while consuming the stream.
 let size=0;const chunks=[];
 for await (const chunk of req) {const bytes=Buffer.from(chunk);size+=bytes.length;if(size>max)throw new ContactError(413,'body_too_large');chunks.push(bytes);}
 return Buffer.concat(chunks);
}
export function checkOrigin(req,env=process.env) {
 const allowed=['https://frontiercpx.com','https://www.frontiercpx.com',...String(env.CONTACT_ALLOWED_ORIGINS||'').split(',').map(x=>x.trim()).filter(Boolean)];
 if (env.VERCEL_URL) allowed.push('https://'+env.VERCEL_URL);
 if (!allowed.includes(req.headers.origin)) throw new ContactError(403,'invalid_origin');
}
export function authorised(req,secret) { return constantEqual(req.headers.authorization,secret?`Bearer ${secret}`:''); }
export const environmentName = (env=process.env) => env.VERCEL_ENV==='production'?'production':'preview';
export function handleError(res,error) {
 if (error instanceof ContactError) {
  if(error.status===429)res.setHeader('Retry-After','3600');
  return json(res,error.status,{ok:false,error:error.code,fields:error.fields});
 }
 console.error('contact_request_failed');
 return json(res,503,{ok:false,error:'temporarily_unavailable'});
}
