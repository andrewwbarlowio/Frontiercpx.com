import test from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { PGlite } from '@electric-sql/pglite';
import { JSDOM } from 'jsdom';
import { validateEnquiry, FORM_VERSION, clientBucket, constantEqual } from '../lib/contact-validation.mjs';
import { saveEnquiry, claimDelivery, recordProviderEvent, acceptDelivery } from '../lib/contact-store.mjs';
import { deliverDue, notificationMessage } from '../lib/contact-notifications.mjs';
import { checkOrigin, readJson } from '../lib/contact-http.mjs';
import { Readable } from 'node:stream';
import webhook from '../api/resend-webhook.mjs';
import { Webhook } from 'svix';
const routes=JSON.parse(readFileSync(new URL('../lib/generated-form-routes.json',import.meta.url)));
const schema=readFileSync(new URL('../migrations/001-enquiries.sql',import.meta.url),'utf8');
const source=readFileSync(new URL('../assets/decision-support.js',import.meta.url),'utf8');
const good=(sourcePath=routes[0])=>({name:'Synthetic Test',email:'synthetic@example.com',phone:'+44 7700 900123',requirement:'Synthetic enquiry <script>alert(1)</script> & "quoted"',website:'',sourcePath,formVersion:FORM_VERSION,submissionKey:randomUUID()});
const options={environment:'preview',ipHash:'test-ip',recipients:['synthetic@example.com'],sender:'Frontier <website@notifications.frontiercpx.com>'};
const env={CONTACT_NOTIFICATIONS_ENABLED:'true',CONTACT_PREVIEW_NOTIFICATIONS_ENABLED:'true',VERCEL_ENV:'preview',RESEND_API_KEY:'synthetic-test-key'};
async function fixture(){
 const pg=new PGlite();await pg.exec(schema);
 const query=(sql,params=[])=>sql.startsWith('SELECT pg_advisory_xact_lock')?Promise.resolve({rows:[]}):pg.query(sql,params);
 const client={query,release(){}};const pool={query,connect:async()=>client};
 return {pg,pool,async close(){await pg.close();}};
}
function response(code,body={},headers={}){return {ok:code>=200&&code<300,status:code,headers:new Headers(headers),json:async()=>body};}
test('server validates required fields, types, bounds, routes, versions and bot field',()=>{
 assert.equal(validateEnquiry(good(),routes).name,'Synthetic Test');
 for(const mutation of [{name:''},{name:7},{email:'a@b\r\nBcc: x@y.com'},{phone:'abc'},{requirement:'x'.repeat(1601)},{sourcePath:'/contact?email=private'},{sourcePath:'https://evil.test'},{formVersion:'old'},{submissionKey:'bad'},{website:'bot'}])assert.throws(()=>validateEnquiry({...good(),...mutation},routes));
 assert.notEqual(clientBucket('one','secret'),clientBucket('two','secret'));assert(constantEqual('a','a'));assert(!constantEqual('a','b'));assert(!constantEqual('',''));
});
test('origin allowlist and bounded JSON reader reject malformed/oversized input',async()=>{
 assert.doesNotThrow(()=>checkOrigin({headers:{origin:'https://frontiercpx.com'}},{}));
 assert.throws(()=>checkOrigin({headers:{origin:'https://frontiercpx.com.evil.test'}},{}));
 const req=Readable.from([Buffer.from('{broken')]);req.headers={'content-type':'application/json'};await assert.rejects(()=>readJson(req),/invalid_json/);
 const big=Readable.from([Buffer.alloc(12001)]);big.headers={'content-type':'application/json'};await assert.rejects(()=>readJson(big),/body_too_large/);
});
test('transaction saves values and outbox, deduplicates retries and rejects changed payload',async()=>{
 const f=await fixture();try{
  const v=validateEnquiry(good(),routes),a=await saveEnquiry(f.pool,v,options),b=await saveEnquiry(f.pool,v,options);
  assert.equal(a.id,b.id);assert.equal(b.duplicate,true);
  await assert.rejects(()=>saveEnquiry(f.pool,{...v,name:'Changed'},options),/submission_changed/);
  const {rows:[row]}=await f.pool.query('SELECT * FROM frontier_contact.enquiries');
  for(const k of ['name','email','phone','requirement'])assert.equal(row[k],v[k]);
  assert.equal(row.source_path,v.sourcePath);
  assert.equal((await f.pool.query('SELECT count(*)::int AS n FROM frontier_contact.notification_deliveries')).rows[0].n,1);
 }finally{await f.close();}
});
test('outbox failure rolls back enquiry and rate-limit increment',async()=>{
 const f=await fixture();try{
  await assert.rejects(()=>saveEnquiry(f.pool,validateEnquiry(good(),routes),{...options,recipients:[null]}));
  assert.equal((await f.pool.query('SELECT count(*)::int AS n FROM frontier_contact.enquiries')).rows[0].n,0);
  assert.equal((await f.pool.query('SELECT count(*)::int AS n FROM frontier_contact.rate_limits')).rows[0].n,0);
 }finally{await f.close();}
});
test('durable limiter rejects sixth new enquiry but permits an identical retry',async()=>{
 const f=await fixture();try{
  const first=validateEnquiry(good(),routes);await saveEnquiry(f.pool,first,options);
  for(let i=0;i<4;i++)await saveEnquiry(f.pool,validateEnquiry(good(),routes),options);
  await assert.rejects(()=>saveEnquiry(f.pool,validateEnquiry(good(),routes),options),/too_many_requests/);
  assert.equal((await saveEnquiry(f.pool,first,options)).duplicate,true);
 }finally{await f.close();}
});
test('disabled sending retains queue without claiming a send attempt',async()=>{
 const f=await fixture();try{
  await saveEnquiry(f.pool,validateEnquiry(good(),routes),options);
  assert.deepEqual(await deliverDue(f.pool,{environment:'preview',env:{},fetcher:()=>{throw Error('must not send');}}),{enabled:false,processed:0});
  const {rows:[d]}=await f.pool.query('SELECT status,attempt_count FROM frontier_contact.notification_deliveries');assert.equal(d.status,'pending');assert.equal(d.attempt_count,0);
 }finally{await f.close();}
});
test('one recipient fails, the other succeeds; retry keeps same key and stored email fields',async()=>{
 const f=await fixture();try{
  const saved=await saveEnquiry(f.pool,validateEnquiry(good(),routes),{...options,recipients:['one@example.com','two@example.com']});const calls=[];
  const fetcher=async(url,init)=>{const message=JSON.parse(init.body);calls.push({message,key:init.headers['Idempotency-Key']});return message.to[0]==='one@example.com'&&calls.length<3?response(503):response(200,{id:randomUUID()});};
  await deliverDue(f.pool,{environment:'preview',limit:2,env,fetcher});
  let ds=(await f.pool.query('SELECT * FROM frontier_contact.notification_deliveries ORDER BY recipient')).rows;
  assert.equal(ds[0].status,'retry');assert.equal(ds[1].status,'accepted');
  await f.pool.query("UPDATE frontier_contact.notification_deliveries SET next_attempt_at=now()-interval '1 second' WHERE status='retry'");
  await deliverDue(f.pool,{environment:'preview',limit:2,env,fetcher});
  assert.equal(calls.length,3);assert.equal(calls[0].key,calls[2].key);assert.equal(calls[0].message.text,calls[2].message.text);
  assert(calls[0].message.text.includes(saved.id));assert(!calls[0].message.html.includes('<script>'));assert(calls[0].message.html.includes('&lt;script&gt;'));
  assert.equal(calls[0].message.reply_to,'synthetic@example.com');
 }finally{await f.close();}
});
test('leases prevent a second claim; expired lease is reclaimable; old ambiguous sends require review',async()=>{
 const f=await fixture();try{
  await saveEnquiry(f.pool,validateEnquiry(good(),routes),options);
  const first=await claimDelivery(f.pool,'preview');assert(first);assert.equal(await claimDelivery(f.pool,'preview'),null);
  await f.pool.query("UPDATE frontier_contact.notification_deliveries SET lease_until=now()-interval '1 second',first_attempt_at=now()-interval '24 hours'");
  await deliverDue(f.pool,{environment:'preview',env,fetcher:()=>{throw Error('must not send');}});
  const {rows:[d]}=await f.pool.query('SELECT * FROM frontier_contact.notification_deliveries');assert.equal(d.status,'failed');assert.equal(d.last_error_code,'manual_review_idempotency_window');
 }finally{await f.close();}
});
test('permanent provider errors stay visible, and a network timeout remains retryable',async()=>{
 const f=await fixture();try{
  await saveEnquiry(f.pool,validateEnquiry(good(),routes),options);
  await deliverDue(f.pool,{environment:'preview',env,fetcher:async()=>response(403)});
  assert.equal((await f.pool.query('SELECT status FROM frontier_contact.notification_deliveries')).rows[0].status,'failed');
  await saveEnquiry(f.pool,validateEnquiry(good(),routes),options);
  await deliverDue(f.pool,{environment:'preview',env,fetcher:async()=>{throw Error('timeout');}});
  assert.equal((await f.pool.query("SELECT count(*)::int AS n FROM frontier_contact.notification_deliveries WHERE status='retry'")).rows[0].n,1);
 }finally{await f.close();}
});
test('signed events deduplicate, survive arriving before provider acceptance, and do not reverse bounce',async()=>{
 const f=await fixture();try{
  await saveEnquiry(f.pool,validateEnquiry(good(),routes),options);const d=await claimDelivery(f.pool,'preview');
  const event={id:'event-a',messageId:'message-a',type:'email.delivered',occurredAt:new Date().toISOString()};
  await recordProviderEvent(f.pool,event);await recordProviderEvent(f.pool,event);await acceptDelivery(f.pool,d,'message-a');
  assert.equal((await f.pool.query('SELECT delivery_status FROM frontier_contact.notification_deliveries')).rows[0].delivery_status,'delivered');
  await recordProviderEvent(f.pool,{...event,id:'event-b',type:'email.bounced'});await recordProviderEvent(f.pool,{...event,id:'event-c'});
  assert.equal((await f.pool.query('SELECT delivery_status FROM frontier_contact.notification_deliveries')).rows[0].delivery_status,'bounced');
  assert.equal((await f.pool.query('SELECT count(*)::int AS n FROM frontier_contact.provider_events')).rows[0].n,3);
 }finally{await f.close();}
});
test('webhook rejects forged signatures before database access',async()=>{
 const old=process.env.RESEND_WEBHOOK_SECRET;process.env.RESEND_WEBHOOK_SECRET='whsec_'+Buffer.from('synthetic-signing-secret').toString('base64');
 try{
  const req=Readable.from([Buffer.from('{}')]);req.method='POST';req.headers={'svix-id':'synthetic','svix-timestamp':String(Math.floor(Date.now()/1000)),'svix-signature':'v1,forged'};
  const res={setHeader(){},status(n){this.code=n;return this;},json(value){this.value=value;}};await webhook(req,res);assert.equal(res.code,401);
  const verifier=new Webhook(process.env.RESEND_WEBHOOK_SECRET),date=new Date(),body='{"type":"test"}',signature=verifier.sign('message',date,body);assert.equal(verifier.verify(body,{'svix-id':'message','svix-timestamp':String(Math.floor(date.getTime()/1000)),'svix-signature':signature}).type,'test');
 }finally{if(old===undefined)delete process.env.RESEND_WEBHOOK_SECRET;else process.env.RESEND_WEBHOOK_SECRET=old;}
});
test('EVERY generated form runs browser submit -> validation -> Postgres -> rendered notification',async()=>{
 const f=await fixture();const evidence=[];
 try{
  for(const route of routes){
   const html=readFileSync(new URL('../dist'+(route==='/'?'/index.html':route+'/index.html'),import.meta.url),'utf8');
   const dom=new JSDOM(html,{url:'https://frontiercpx.com'+route,runScripts:'outside-only'}),w=dom.window;
   w.AbortSignal=AbortSignal;let completed;const done=new Promise(resolve=>completed=resolve);let key;
   w.fetch=async(url,init)=>{
    assert.equal(url,'/api/enquiries');const body=JSON.parse(init.body);key=body.submissionKey;
    const value=validateEnquiry(body,routes),saved=await saveEnquiry(f.pool,value,{...options,ipHash:route});
    const d=await claimDelivery(f.pool,'preview',saved.id);const message=notificationMessage(d);
    const {rows:[stored]}=await f.pool.query('SELECT * FROM frontier_contact.enquiries WHERE id=$1',[saved.id]);
    for(const k of ['name','email','phone','requirement']){assert.equal(stored[k],value[k]);assert(message.text.includes(value[k]));}
    assert.equal(stored.source_path,route);assert(message.text.includes(route));
    evidence.push({route,reference:saved.id,storedFields:'pass',notificationFields:'pass'});completed();return response(201,{ok:true,reference:saved.id});
   };
   w.eval(source);const form=w.document.querySelector('.enquiry-form'),value=good(route);
   for(const k of ['name','email','phone','requirement'])form.elements[k].value=value[k];
   form.dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await done;await new Promise(resolve=>setImmediate(resolve));
   assert.match(form.querySelector('.form-status').textContent,/enquiry has been saved/);assert.equal(form.elements.email.value,'');assert(key);dom.window.close();
  }
  assert.equal(evidence.length,routes.length);console.log(JSON.stringify({formRoutesTested:routes.length,storedAndRenderedFields:'pass',browser:'JSDOM',provider:'mocked; no real email sent'}));
 }finally{await f.close();}
});
test('browser keeps fields and submission key after lost response, then confirms identical retry',async()=>{
 const html=readFileSync(new URL('../dist/contact/index.html',import.meta.url),'utf8');const dom=new JSDOM(html,{url:'https://frontiercpx.com/contact',runScripts:'outside-only'});const w=dom.window;w.AbortSignal=AbortSignal;const keys=[];
 w.fetch=async(url,init)=>{keys.push(JSON.parse(init.body).submissionKey);if(keys.length===1)throw Error('Failed to fetch');return response(200,{ok:true,reference:randomUUID()});};
 w.eval(source);const form=w.document.querySelector('.enquiry-form'),v=good('/contact');for(const k of ['name','email','phone','requirement'])form.elements[k].value=v[k];
 form.dispatchEvent(new w.Event('submit',{cancelable:true}));await new Promise(resolve=>setImmediate(resolve));assert.equal(form.elements.email.value,v.email);assert.match(form.querySelector('.form-status').textContent,/could not connect/);
 form.dispatchEvent(new w.Event('submit',{cancelable:true}));await new Promise(resolve=>setImmediate(resolve));assert.equal(keys[0],keys[1]);assert.match(form.querySelector('.form-status').textContent,/has been saved/);dom.window.close();
});

test('HTTP capture returns success only after storage, retains capture when notifications fail, and handles duplicates',async()=>{
 const {createEnquiryHandler}=await import('../api/enquiries.mjs');
 const f=await fixture();
 const request=body=>{const req=Readable.from([Buffer.from(JSON.stringify(body))]);req.method='POST';req.headers={'content-type':'application/json',origin:'https://frontiercpx.com','x-forwarded-for':'192.0.2.1'};return req;};
 const responseObject=()=>({headers:{},setHeader(k,v){this.headers[k]=v;},status(code){this.code=code;return this;},json(body){this.body=body;}});
 const config={...env,ENQUIRY_CAPTURE_ENABLED:'true',CONTACT_RATE_LIMIT_SECRET:'synthetic-secret'};
 try{
  const handler=createEnquiryHandler({getDatabase:()=>f.pool,env:config,send:async()=>{throw Error('synthetic delivery outage');}});
  const value=good('/contact'),res=responseObject();await handler(request(value),res);assert.equal(res.code,201);assert(res.body.reference);
  const retry=responseObject();await handler(request(value),retry);assert.equal(retry.code,200);assert.equal(retry.body.reference,res.body.reference);
  const fail=createEnquiryHandler({getDatabase:()=>{throw Error('synthetic database outage');},env:config});const failed=responseObject();await fail(request(good('/contact')),failed);assert.equal(failed.code,503);assert.equal(failed.body.ok,false);assert(!failed.body.reference);
  const closed=createEnquiryHandler({env:{}}),closedRes=responseObject();await closed(request(good('/contact')),closedRes);assert.equal(closedRes.code,503);
 }finally{await f.close();}
});
