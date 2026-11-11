import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

// Unit-test the shipped interaction with inert DOM doubles, not live credentials.
const source=fs.readFileSync(new URL('../assets/customer-journey.js',import.meta.url),'utf8').split('// Local account interaction preview:')[1].split('\n').slice(1).join('\n');
class Element{
 constructor(value=''){this.value=value;this.textContent='';this.hidden=true;this.attrs={};this.events={};this.type='text';}
 setAttribute(k,v){this.attrs[k]=v;}
 getAttribute(k){return this.attrs[k];}
 removeAttribute(k){delete this.attrs[k];}
 addEventListener(k,fn){this.events[k]=fn;}
 focus(){this.focused=true;}
 matches(){return true;}
}
function fixture(recovery=false){
 const username=new Element(),password=recovery?null:new Element(),toggle=password?new Element():null;
 username.id='username';if(password){password.id='password';password.type='password';}
 const button=new Element(),status=new Element(),progress=new Element(),caps=new Element();button.textContent=recovery?'Continue':'Sign in';
 const inputs=password?[username,password]:[username],errors=Object.fromEntries(inputs.map(x=>[x.id+'-error',new Element()]));
 const form=new Element();form.elements={username,password};form.dataset={authMode:recovery?'recovery':'login'};
 const selectors={'.auth-submit':button,'.auth-status':status,'.auth-progress':progress,'.auth-caps':caps,'[data-password-toggle]':toggle};
 form.querySelector=s=>selectors[s];form.querySelectorAll=()=>inputs;
 const timers=new Map(),lifecycle={};let id=0;
 const sandbox={document:{querySelectorAll:()=>[form],getElementById:k=>errors[k]},window:{addEventListener:(k,fn)=>lifecycle[k]=fn},setTimeout:fn=>{timers.set(++id,fn);return id;},clearTimeout:key=>timers.delete(key)};
 vm.runInNewContext(source,sandbox);
 return {username,password,toggle,button,status,progress,caps,form,errors,timers,lifecycle,submit:()=>form.events.submit({preventDefault(){}}),finish:()=>{for(const [key,fn]of timers){timers.delete(key);fn();}}};
}
const f=fixture();assert.equal(f.button.disabled,false);
f.submit();assert.equal(f.username.attrs['aria-invalid'],'true');assert.equal(f.password.attrs['aria-invalid'],'true');assert(f.username.focused);assert.equal(f.timers.size,0);
f.toggle.events.click();assert.equal(f.password.type,'text');assert.equal(f.toggle.attrs['aria-label'],'Hide password');f.toggle.events.click();assert.equal(f.password.type,'password');
f.password.events.keydown({getModifierState:()=>true});assert.equal(f.caps.hidden,false);f.password.events.blur();assert.equal(f.caps.hidden,true);
f.username.value='preview-user';f.password.value='sample-only';f.submit();assert.equal(f.form.attrs['aria-busy'],'true');assert.equal(f.button.disabled,true);assert.equal(f.button.textContent,'Signing in…');f.submit();assert.equal(f.timers.size,1);
f.finish();assert.equal(f.password.value,'');assert.equal(f.password.type,'password');assert.equal(f.username.value,'preview-user');assert.equal(f.status.hidden,false);assert.match(f.status.textContent,/couldn’t sign you in/);assert.equal(f.button.disabled,false);assert.equal(f.form.attrs['aria-busy'],undefined);
f.lifecycle.pagehide();assert.equal(f.username.value,'');assert.equal(f.status.hidden,true);
const r=fixture(true);r.submit();assert.equal(r.timers.size,0);r.username.value='preview-user';r.submit();r.finish();assert.match(r.status.textContent,/not connected/);assert(!/email (?:was|has been) sent/i.test(r.status.textContent));
assert(!/\b(?:fetch|XMLHttpRequest|localStorage|sessionStorage)\b/.test(source));
console.log(JSON.stringify({requiredFields:'pass',visibilityToggle:'pass',capsLock:'pass',busyAndDuplicateSubmit:'pass',genericRejection:'pass',passwordCleared:'pass',lifecycleCleanup:'pass',recoveryHonesty:'pass',networkAndStorage:'none'}));
