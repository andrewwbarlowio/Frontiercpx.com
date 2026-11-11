import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root=path.resolve(import.meta.dirname,'..');
const routes=JSON.parse(fs.readFileSync(path.join(root,'dist/route-inventory.json')));
let forms=0,frames=0;
for(const {route,file} of routes){
 const html=fs.readFileSync(path.join(root,'dist',file),'utf8');
 assert(html.includes('class="frontier-editorial'),route+': shared body class');
 assert(html.includes('/assets/editorial-system.css'),route+': shared style');
 assert(html.includes('/assets/fonts/manrope-variable.ttf'),route+': shared font');
 assert(!html.includes('/assets/images/solutions/'),route+': no retired numerical artwork');
 assert(!html.includes('AI-generated illustration.'),route+': no image caption added');
 for(const form of html.matchAll(/<form class="enquiry-form"[^>]*>([\s\S]*?)<\/form>/g)){
  forms++;
  for(const type of ['email','phone'])assert(new RegExp('<input[^>]*name="'+type+'"[^>]*required').test(form[1]),route+': required '+type);
  assert(!/name="(?:topic|contact-method)"/.test(form[1]),route+': no topic/method friction');
  assert(/>Send /.test(form[1]),route+': Send label');
  assert(form[1].includes('does not send or save'),route+': preview limit remains clear');
 }
 frames+=(html.match(/class="focus-frame"/g)||[]).length;
 for(const m of html.matchAll(/srcset="([^"]+)"/g))for(const candidate of m[1].split(',')){
  const asset=candidate.trim().split(/\s+/)[0];
  assert(fs.existsSync(path.join(root,'dist',asset)),route+': responsive asset '+asset);
 }
}
assert(forms>20,'shared simplified contact reaches service and funding templates');
assert(frames>=20,'framed lead photography is present');
console.log(JSON.stringify({routes:routes.length,simplifiedForms:forms,focusFrames:frames,sharedDesign:'pass',responsiveAssets:'pass'}));

// Temporary, uncommitted browser QA fixture. Build removes it.
const samples=['/','/services','/services/financial-modelling','/solutions','/solutions/technology-funding','/about-us','/contact','/funding-guide','/funding-options','/client-login','/global-presence','/briefs/credit','/privacy-policy'];
const qa=path.join(root,'dist/_editorial-qa');fs.mkdirSync(qa,{recursive:true});
for(const [i,route] of samples.entries())fs.writeFileSync(path.join(qa,i+'.html'),'<!doctype html><html><body style="margin:0;background:#ddd">'+[320,390,768].map(w=>`<iframe id="w${w}" title="${w}px" src="${route}" style="width:${w}px;height:1100px;border:0;vertical-align:top"></iframe>`).join('')+'</body></html>');
