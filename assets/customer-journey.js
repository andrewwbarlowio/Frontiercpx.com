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
// Local account controls only: no transmission, storage or credential validation.
(()=>{for(const form of document.querySelectorAll('.auth-form')){const status=form.querySelector('.auth-status'),password=form.querySelector('input[type="password"]'),toggle=form.querySelector('[data-password-toggle]');
 const clear=()=>{for(const input of form.querySelectorAll('input'))input.value='';if(password)password.type='password';if(toggle){toggle.setAttribute('aria-pressed','false');toggle.textContent='Show password';}};
 if(toggle){toggle.hidden=false;toggle.addEventListener('click',()=>{const show=password.type==='password';password.type=show?'text':'password';toggle.setAttribute('aria-pressed',String(show));toggle.textContent=show?'Hide password':'Show password';});}
 function assist(ev){ev.preventDefault();clear();status.hidden=false;status.textContent='Please contact enquiries@frontiercpx.com for assistance with this request.';status.focus();}
 form.addEventListener('submit',assist);form.querySelector('[data-auth-action]').addEventListener('click',assist);window.addEventListener('pagehide',clear);window.addEventListener('pageshow',clear);
}})();
