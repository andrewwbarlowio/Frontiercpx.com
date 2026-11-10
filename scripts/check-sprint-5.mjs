import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { definitions, permittedRoutes, measure, validateEvent } from './measurement.mjs';
assert.equal(permittedRoutes.length, 17);
let accepted = 0, rejected = 0;
for (const event of Object.keys(definitions)) for (const route of permittedRoutes) {
  assert.deepEqual(measure({event, route}), {enabled:false, sent:false}); accepted++;
}
const valid = {event:'route_selected',route:permittedRoutes[0]};
for (const field of ['email','name','password','message','company','amount','query','url','subject','body']) {
  assert.throws(()=>validateEvent({...valid,[field]:'synthetic test'})); rejected++;
}
for(const route of ['/contact','https://example.com',valid.route+'?email=synthetic',valid.route+'#personal','/unknown']) {
  assert.throws(()=>validateEvent({...valid,route})); rejected++;
}
for(const event of ['email_received','funding_secured','form_delivered','constructor','__proto__']) {
  assert.throws(()=>validateEvent({...valid,event})); rejected++;
}
assert.throws(()=>validateEvent(null)); rejected++;
const html=readFileSync('dist/index.html','utf8');
assert(!html.includes('measurement.mjs'));
const source=readFileSync('scripts/measurement.mjs','utf8');
assert(!/\b(fetch|XMLHttpRequest|localStorage|sessionStorage|sendBeacon)\b/.test(source));
console.log(`Sprint 5 measurement: ${accepted} accepted disabled events; ${rejected} rejected payloads; no runtime import or transport.`);
