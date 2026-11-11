(()=>{'use strict';
const header=document.querySelector('.site-header'),toggle=document.querySelector('.menu-toggle'),menu=document.querySelector('#mobile-menu'),main=document.querySelector('main'),footer=document.querySelector('footer');
function closeMenu(restore=true){if(!toggle||!menu)return;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');menu.hidden=true;document.body.classList.remove('menu-open');main.inert=false;footer.inert=false;if(restore)toggle.focus()}
if(toggle&&menu){toggle.hidden=false;toggle.addEventListener('click',()=>{if(toggle.getAttribute('aria-expanded')==='true'){closeMenu();return;}toggle.setAttribute('aria-expanded','true');toggle.setAttribute('aria-label','Close navigation');menu.hidden=false;document.body.classList.add('menu-open');main.inert=true;footer.inert=true;menu.querySelector('a').focus();});menu.addEventListener('click',ev=>{if(ev.target.closest('a'))closeMenu(false)});document.addEventListener('keydown',ev=>{if(toggle.getAttribute('aria-expanded')!=='true')return;if(ev.key==='Escape'){ev.preventDefault();closeMenu();}if(ev.key==='Tab'){const links=[...header.querySelectorAll('a,button,summary')].filter(x=>x.getClientRects().length);const first=links[0],last=links.at(-1);if(ev.shiftKey&&document.activeElement===first){ev.preventDefault();last.focus()}else if(!ev.shiftKey&&document.activeElement===last){ev.preventDefault();first.focus()}}});matchMedia('(min-width:1201px)').addEventListener('change',ev=>{if(ev.matches)closeMenu(false)});}
// Keep native details semantics while animating the mobile accordion height.
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)'),accordionMotion=new Map();
for(const details of document.querySelectorAll('#mobile-menu details')){
 const summary=details.querySelector(':scope > summary'),panel=details.querySelector(':scope > .subnav');
 if(!summary||!panel||typeof details.animate!=='function')continue;
 summary.addEventListener('click',ev=>{
  ev.preventDefault();
  // Settle any containing accordion before measuring a nested panel.
  for(const [ancestor,state] of accordionMotion)if(ancestor!==details&&ancestor.contains(details))state.animation.finish();
  const previous=accordionMotion.get(details),opening=previous?!previous.opening:!details.open;
  const from=details.getBoundingClientRect().height;
  previous?.animation.cancel();accordionMotion.delete(details);
  details.style.height='';details.style.overflow='';
  if(reducedMotion.matches){details.open=opening;panel.inert=false;return;}
  details.open=true;
  if(!opening&&panel.contains(document.activeElement))summary.focus();
  panel.inert=!opening;
  const to=opening?details.getBoundingClientRect().height:summary.getBoundingClientRect().height;
  details.style.overflow='hidden';
  const animation=details.animate([{height:from+'px'},{height:to+'px'}],{duration:280,easing:'cubic-bezier(.22,1,.36,1)',fill:'both'});
  const state={animation,opening};accordionMotion.set(details,state);
  animation.onfinish=()=>{if(accordionMotion.get(details)!==state)return;details.open=opening;panel.inert=false;animation.cancel();details.style.height='';details.style.overflow='';accordionMotion.delete(details);};
 });
}
reducedMotion.addEventListener('change',()=>{for(const state of accordionMotion.values())state.animation.finish();});
const dropdowns=[...document.querySelectorAll('.desktop-nav details')];
for(const dropdown of dropdowns){dropdown.addEventListener('toggle',()=>{if(dropdown.open)for(const other of dropdowns)if(other!==dropdown)other.open=false;});}
document.addEventListener('click',ev=>{for(const dropdown of dropdowns)if(!dropdown.contains(ev.target))dropdown.open=false;});
document.addEventListener('keydown',ev=>{if(ev.key==='Escape'){const open=dropdowns.find(x=>x.open);if(open){open.open=false;open.querySelector('summary').focus();}}});
const legacy=document.querySelector('#legacy-destination');if(legacy){const title=new URLSearchParams(location.search).get('title')||'',clean=title.replace(/^Global /,'').replace(/\s*>\s*$/,'').trim(),match=JSON.parse(legacy.dataset.mapping).find(x=>x.title===clean);location.replace((match?match.to:'/funding-guide')+location.hash);}
const moved=document.querySelector('[data-redirect]');if(moved)location.replace(moved.dataset.redirect+location.search+location.hash);
let printDetails=[];window.addEventListener('beforeprint',()=>{printDetails=[...document.querySelectorAll('.faq details')].map(el=>[el,el.open]);for(const [el] of printDetails)el.open=true;});window.addEventListener('afterprint',()=>{for(const [el,open] of printDetails)el.open=open;});
document.querySelectorAll('[data-print]').forEach(button=>{button.hidden=false;button.addEventListener('click',()=>window.print())});
})();
// Local account interaction preview: no requests, storage, sessions or successful sign-in.
(()=>{
 for(const form of document.querySelectorAll('.auth-form')){
  const username=form.elements.username,password=form.elements.password,toggle=form.querySelector('[data-password-toggle]'),button=form.querySelector('.auth-submit'),status=form.querySelector('.auth-status'),progress=form.querySelector('.auth-progress'),caps=form.querySelector('.auth-caps');
  const recovery=form.dataset.authMode==='recovery',idleLabel=button.textContent;let pending=null;
  function hidePassword(){if(!password)return;password.type='password';toggle.setAttribute('aria-pressed','false');toggle.setAttribute('aria-label','Show password');toggle.title='Show password';}
  function clearError(input){input.removeAttribute('aria-invalid');input.removeAttribute('aria-describedby');const error=document.getElementById(input.id+'-error');if(error){error.hidden=true;error.textContent='';}}
  function fieldError(input,message){const error=document.getElementById(input.id+'-error');error.textContent=message;error.hidden=false;input.setAttribute('aria-invalid','true');input.setAttribute('aria-describedby',error.id);}
  function reset(){clearTimeout(pending);pending=null;form.removeAttribute('aria-busy');button.disabled=false;button.textContent=idleLabel;progress.textContent='';status.hidden=true;status.textContent='';for(const input of form.querySelectorAll('input')){input.value='';clearError(input);}hidePassword();if(caps)caps.hidden=true;}
  if(toggle){toggle.hidden=false;toggle.addEventListener('click',()=>{const show=password.type==='password';password.type=show?'text':'password';toggle.setAttribute('aria-pressed',String(show));toggle.setAttribute('aria-label',show?'Hide password':'Show password');toggle.title=show?'Hide password':'Show password';});}
  if(password){for(const event of ['keydown','keyup'])password.addEventListener(event,e=>{caps.hidden=!e.getModifierState('CapsLock');});password.addEventListener('blur',()=>{caps.hidden=true;});}
  button.disabled=false;
  form.addEventListener('input',e=>{if(e.target.matches('input'))clearError(e.target);status.hidden=true;});
  form.addEventListener('submit',e=>{
   e.preventDefault();if(pending)return;status.hidden=true;let first=null;
   for(const input of form.querySelectorAll('input')){clearError(input);if(input===username?!input.value.trim():!input.value){fieldError(input,input===username?'Enter your email or username.':'Enter your password.');first=first||input;}}
   if(first){first.focus();return;}
   hidePassword();form.setAttribute('aria-busy','true');button.disabled=true;button.textContent=recovery?'Continuing…':'Signing in…';progress.textContent=recovery?'Preparing account assistance.':'Signing in.';
   pending=setTimeout(()=>{pending=null;form.removeAttribute('aria-busy');button.disabled=false;button.textContent=idleLabel;progress.textContent='';if(password)password.value='';hidePassword();status.textContent=recovery?'Password recovery is not connected in this preview. Please contact Frontier for account assistance.':'We couldn’t sign you in. Check your details and try again.';status.hidden=false;status.focus();},650);
  });
  window.addEventListener('pagehide',reset);window.addEventListener('pageshow',reset);
 }
})();
