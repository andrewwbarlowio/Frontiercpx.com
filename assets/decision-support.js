(()=>{
 'use strict';
 const text=(tag,value,cls)=>{const node=document.createElement(tag);node.textContent=value;if(cls)node.className=cls;return node;};
 const arrow=()=>{const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('class','icon-arrow');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('fill','none');svg.setAttribute('aria-hidden','true');const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d','M5 19 19 5M5 5h14v14');path.setAttribute('stroke','currentColor');path.setAttribute('stroke-width','1.5');svg.append(path);return svg;};
 const makeLink=(url,label,cls)=>{const a=text('a',label,cls);a.href=url;a.append(arrow());return a;};
 for(const guide of document.querySelectorAll('.funding-guide')){
  const goals=JSON.parse(guide.dataset.guideGoals),form=guide.querySelector('form'),goal=form.elements.goal,help=form.elements.help,result=guide.querySelector('.guide-result');
  const helpValues=['understand','prepare','talk'];form.querySelector('button').disabled=false;
  function render(){const choice=goals.find(x=>x.id===goal.value);if(!choice)return;result.replaceChildren(text('p','Information to explore','kicker'),text('h2','Your starting points'),text('p',choice.explain));
   if(!choice.routes.length){result.append(text('h3','Begin without a product choice.'),text('p','You can compare commitments, prepare the business objective or discuss what support would help.'),makeLink('/funding-options','Compare funding questions','text-link'),makeLink('/services/funding-readiness','Explore preparation support','text-link'),makeLink('/contact?purpose=not-sure&goal=not-sure&source=%2Ffunding-guide#enquiry','Discuss the objective','text-link'));}
   for(const route of choice.routes){const card=document.createElement('article');card.className='goal-card';const h=document.createElement('h3');h.append(makeLink(route.url,route.title,''));card.append(h,text('p',route.description));if(help.value==='prepare'){const ul=document.createElement('ul');ul.className='checklist';for(const item of route.prepare)ul.append(text('li',item));card.append(ul);}const actions=text('div','','actions');actions.append(makeLink('/briefs/'+route.slug,'Prepare with the decision brief','text-link'),makeLink('/contact?purpose='+encodeURIComponent(route.slug)+'&goal='+encodeURIComponent(choice.id)+'&source=%2Ffunding-guide#enquiry','Discuss this requirement','text-link'));card.append(actions);result.append(card);}
   result.append(makeLink('/funding-options','Compare the commitments','text-link'),text('p','Information only, not an eligibility assessment, personalised recommendation or funding offer.','form-note'));result.hidden=false;
  }
  function fromUrl(){const q=new URLSearchParams(location.search),g=goals.find(x=>x.id===q.get('goal')),h=q.get('help');if(g&&helpValues.includes(h)){goal.value=g.id;help.value=h;render();}else{goal.value=goals[0].id;help.value='understand';result.hidden=true;}}
  form.addEventListener('submit',ev=>{ev.preventDefault();const url=new URL(location.href);url.searchParams.set('goal',goal.value);url.searchParams.set('help',help.value);history.pushState(null,'',url);render();result.focus();});
  form.addEventListener('change',()=>{result.hidden=true;});
  form.addEventListener('reset',ev=>{ev.preventDefault();goal.value=goals[0].id;help.value='understand';const url=new URL(location.href);url.searchParams.delete('goal');url.searchParams.delete('help');history.pushState(null,'',url);result.hidden=true;goal.focus();});
  window.addEventListener('popstate',fromUrl);fromUrl();
 }
 for(const form of document.querySelectorAll('.enquiry-form')){
  const method=form.elements['contact-method'],phone=form.elements.phone,phoneField=form.querySelector('[data-phone-field]'),topic=form.elements.topic,status=form.querySelector('.form-status'),errors=form.querySelector('.form-errors'),errorList=errors.querySelector('ul');
  const purpose=new URLSearchParams(location.search).get('purpose');if(topic&&purpose&&[...topic.options].some(x=>x.value===purpose))topic.value=purpose;
  const note=text('p','','enquiry-context-note');note.hidden=true;if(topic)topic.closest('.form-field').after(note);
  const companyLabel=form.querySelector('label[for="company"]'),hint=form.querySelector('#requirement-hint');
  function context(){if(!topic)return;for(const field of form.querySelectorAll('[data-specialist-topic]')){const show=field.dataset.specialistTopic===topic.value;field.hidden=!show;for(const input of field.querySelectorAll('input')){input.disabled=!show;if(!show){input.value='';input.setCustomValidity('');clearField(input);}}}const adviser=topic.value==='adviser';companyLabel.textContent=(adviser?'Your firm or business':'Business name')+(form.elements.company.required?'':' (optional)');const topicOptions=topic.closest('details');if(topicOptions&&topic.value!=='not-sure')topicOptions.open=true;hint.textContent=adviser?'A non-confidential client requirement. Do not enter the client’s personal details or financial documents.':'A brief, non-confidential summary. Amount and timing can be approximate.';note.hidden=!adviser;note.textContent=adviser?'Use your own contact details as the referrer. Client authority, contact ownership and any introducer arrangements need to be agreed before an approach.':'';}
  function clearField(input){input.removeAttribute('aria-invalid');input.removeAttribute('aria-errormessage');const errorId=input.id+'-error';document.getElementById(errorId)?.remove();const described=(input.getAttribute('aria-describedby')||'').split(/\s+/).filter(x=>x&&x!==errorId);if(described.length)input.setAttribute('aria-describedby',described.join(' '));else input.removeAttribute('aria-describedby');errorList.querySelector('a[href="#'+input.id+'"]')?.closest('li').remove();if(!errorList.children.length)errors.hidden=true;}
  function resetErrors(){for(const input of form.querySelectorAll('input,textarea')){input.setCustomValidity('');clearField(input);}errorList.replaceChildren();errors.hidden=true;}
  function phoneState(){if(!method)return;const needed=method.value==='callback';phoneField.hidden=!needed;phone.disabled=!needed;phone.required=needed;if(!needed){phone.setCustomValidity('');clearField(phone);}}
  topic?.addEventListener('change',context);form.addEventListener('frontier-context-restored',context);method?.addEventListener('change',phoneState);context();phoneState();form.querySelector('button[type="submit"]').disabled=false;
  form.addEventListener('submit',ev=>{
   ev.preventDefault();resetErrors();const invalid=[];
   for(const input of form.querySelectorAll('input,textarea')){
    if(input.disabled)continue;
    if(input.required&&!input.value.trim())input.setCustomValidity('Enter a value for this field.');
    else if(input.type==='email'&&input.validity.typeMismatch)input.setCustomValidity('Enter an email address in the format name@example.com.');
    if(!input.checkValidity())invalid.push(input);
   }
   if(invalid.length){status.hidden=true;for(const input of invalid){const id=input.id+'-error',label=form.querySelector('label[for="'+input.id+'"]')?.textContent||'Field',message=input.validationMessage;input.setAttribute('aria-invalid','true');input.setAttribute('aria-errormessage',id);input.setAttribute('aria-describedby',[(input.getAttribute('aria-describedby')||''),id].filter(Boolean).join(' '));const inline=text('p',message,'field-error');inline.id=id;input.after(inline);const li=document.createElement('li'),a=text('a',label+': '+message);a.href='#'+input.id;a.addEventListener('click',ev=>{ev.preventDefault();const options=input.closest('details');if(options)options.open=true;input.focus();});li.append(a);errorList.append(li);}errors.hidden=false;errors.focus();return;}
   status.hidden=false;status.textContent='Preview checked. Nothing has been sent or stored. You can contact Frontier directly using the email link.';status.focus();
  });
  form.addEventListener('input',ev=>{const input=ev.target;if(typeof input.setCustomValidity==='function'){input.setCustomValidity('');clearField(input);}status.hidden=true;});
 }
})();
// Only allow known navigation context. Never copy arbitrary query text into email.
(()=>{
 const form=document.querySelector('.enquiry-form');if(!form)return;
 if(!form.dataset.contextMap||!form.elements.topic)return;
 const map=JSON.parse(form.dataset.contextMap),topic=form.elements.topic,email=document.querySelector('[data-context-email]'),summary=document.querySelector('[data-context-summary]');
 const topics=[...topic.options].map(x=>x.value),routes=[...map.sources,...map.solutions.map(x=>x.route),...map.services.map(x=>x.route),...map.solutions.map(x=>'/briefs/'+x.slug)];
 const goals=['cash-flow','growth','equipment','property','startup','ownership','complex','not-sure'];
 let context={};
 function restore(){const q=new URLSearchParams(location.search);context={};if(topics.includes(q.get('purpose')))topic.value=q.get('purpose');else if(q.has('purpose'))topic.value='not-sure';for(const [key,allow] of [['source',routes],['city',map.cities],['goal',goals]])if(allow.includes(q.get(key)))context[key]=q.get(key);const stages=map.solutions.find(x=>x.slug===topic.value)?.stages||[];const stage=stages.find(x=>x.id===q.get('stage'));if(stage)context.stage=stage.label;form.dispatchEvent(new Event('frontier-context-restored'));update();}
 function update(){const label=topic.selectedOptions[0].textContent;const pieces=[['Source',context.source||location.pathname],['Project or purpose',context.stage],['Goal',context.goal],['City',context.city]].filter(([,v])=>v);const body='I would like to discuss '+label+'.\n\n'+pieces.map(([k,v])=>k+': '+v).join('\n')+(topic.value==='special-situations'?'\nImportant deadline and event (optional):\n':topic.value==='crypto'?'\nBusiness activity and company jurisdiction:\n':'')+'\n\nMy non-confidential outline:\n';if(email)email.href='mailto:enquiries@frontiercpx.com?subject='+encodeURIComponent(label)+'&body='+encodeURIComponent(body);if(summary)summary.textContent='Enquiry topic: '+label+(context.stage?' · '+context.stage:'')+(context.city?' · '+context.city:'');}
 topic.addEventListener('change',()=>{delete context.stage;delete context.goal;update();});window.addEventListener('popstate',restore);window.addEventListener('pageshow',restore);restore();
})();
