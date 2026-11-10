(()=>{
 'use strict';
 const text=(tag,value,cls)=>{const node=document.createElement(tag);node.textContent=value;if(cls)node.className=cls;return node;};
 const arrow=()=>{const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('class','icon-arrow');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('fill','none');svg.setAttribute('aria-hidden','true');const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d','M5 19 19 5M5 5h14v14');path.setAttribute('stroke','currentColor');path.setAttribute('stroke-width','1.5');svg.append(path);return svg;};
 const makeLink=(url,label,cls)=>{const a=text('a',label,cls);a.href=url;a.append(arrow());return a;};
 for(const guide of document.querySelectorAll('.funding-guide')){
  const goals=JSON.parse(guide.dataset.guideGoals),form=guide.querySelector('form'),goal=form.elements.goal,help=form.elements.help,result=guide.querySelector('.guide-result');
  form.querySelector('button').disabled=false;
  form.addEventListener('submit',ev=>{
   ev.preventDefault();const choice=goals.find(x=>x.id===goal.value);if(!choice)return;
   result.replaceChildren(text('p','Information to explore','kicker'),text('h2','Your starting points'),text('p',choice.explain));
   for(const route of choice.routes){const card=document.createElement('a');card.href=route.url;card.className='goal-card';card.append(text('h3',route.title),text('p',route.description),arrow());result.append(card);}
   const next=text('div','','guide-next'),first=choice.routes[0];
   if(!first){next.append(text('h3','Start with your objective.'),text('p','There is no need to select a funding product yet.'),makeLink('/funding-options','Compare funding questions','text-link'),makeLink('/contact?purpose=not-sure&source=%2Ffunding-guide#enquiry','Discuss the objective','text-link'));result.append(next);result.hidden=false;result.focus();return;}
   if(help.value==='prepare'){next.append(text('h3','Prepare a useful outline.'),text('p','Write down the objective, broad amount and timing, the evidence available and the commitments you need to understand. Keep confidential details for an agreed later stage.'),makeLink('/briefs/'+first.slug,'Read the decision brief','text-link'));}
   else if(help.value==='talk'){const topic=choice.id==='not-sure'?'not-sure':first.slug;next.append(text('h3','Start with the requirement.'),text('p','You do not need to have chosen a product. Your enquiry can carry a starting topic, which you can change.'),makeLink('/contact?purpose='+encodeURIComponent(topic)+'&goal='+encodeURIComponent(choice.id)+'&source=%2Ffunding-guide#enquiry','Discuss this requirement','text-link'));}
   else next.append(text('h3','Understand the wider choices.'),text('p','Cost, cash flow, ownership and timing can matter in different ways. Compare the questions before deciding which conversation to pursue.'),makeLink('/funding-options','Compare funding questions','text-link'));
   result.append(next,text('p','These links are information, not an eligibility assessment, recommendation or funding offer. Service scope and suitability must be established for the actual requirement.','form-note'));result.hidden=false;result.focus();
  });
  form.addEventListener('change',()=>{result.hidden=true;});
 }
 for(const form of document.querySelectorAll('.enquiry-form')){
  const method=form.elements['contact-method'],phone=form.elements.phone,phoneField=form.querySelector('[data-phone-field]'),topic=form.elements.topic,status=form.querySelector('.form-status'),errors=form.querySelector('.form-errors'),errorList=errors.querySelector('ul');
  const purpose=new URLSearchParams(location.search).get('purpose');if(purpose&&[...topic.options].some(x=>x.value===purpose))topic.value=purpose;
  const note=text('p','','enquiry-context-note');note.hidden=true;topic.closest('.form-field').after(note);
  const companyLabel=form.querySelector('label[for="company"]'),hint=form.querySelector('#requirement-hint');
  function context(){const adviser=topic.value==='adviser';companyLabel.textContent=adviser?'Your firm or business':'Business name';hint.textContent=adviser?'A non-confidential client requirement. Do not enter the client’s personal details or financial documents.':'A brief, non-confidential summary. Amount and timing can be approximate.';note.hidden=!adviser;note.textContent=adviser?'Use your own contact details as the referrer. Client authority, contact ownership and any introducer arrangements need to be agreed before an approach.':'';}
  function clearField(input){input.removeAttribute('aria-invalid');input.removeAttribute('aria-errormessage');const errorId=input.id+'-error';document.getElementById(errorId)?.remove();const described=(input.getAttribute('aria-describedby')||'').split(/\s+/).filter(x=>x&&x!==errorId);if(described.length)input.setAttribute('aria-describedby',described.join(' '));else input.removeAttribute('aria-describedby');errorList.querySelector('a[href="#'+input.id+'"]')?.closest('li').remove();if(!errorList.children.length)errors.hidden=true;}
  function resetErrors(){for(const input of form.querySelectorAll('input,textarea')){input.setCustomValidity('');clearField(input);}errorList.replaceChildren();errors.hidden=true;}
  function phoneState(){const needed=method.value==='callback';phoneField.hidden=!needed;phone.disabled=!needed;phone.required=needed;if(!needed){phone.setCustomValidity('');clearField(phone);}}
  topic.addEventListener('change',context);method.addEventListener('change',phoneState);context();phoneState();form.querySelector('button[type="submit"]').disabled=false;
  form.addEventListener('submit',ev=>{
   ev.preventDefault();resetErrors();const invalid=[];
   for(const input of form.querySelectorAll('input,textarea')){
    if(input.disabled)continue;
    if(input.required&&!input.value.trim())input.setCustomValidity('Enter a value for this field.');
    else if(input.type==='email'&&input.validity.typeMismatch)input.setCustomValidity('Enter an email address in the format name@example.com.');
    if(!input.checkValidity())invalid.push(input);
   }
   if(invalid.length){status.hidden=true;for(const input of invalid){const id=input.id+'-error',label=form.querySelector('label[for="'+input.id+'"]')?.textContent||'Field',message=input.validationMessage;input.setAttribute('aria-invalid','true');input.setAttribute('aria-errormessage',id);input.setAttribute('aria-describedby',[(input.getAttribute('aria-describedby')||''),id].filter(Boolean).join(' '));const inline=text('p',message,'field-error');inline.id=id;input.after(inline);const li=document.createElement('li'),a=text('a',label+': '+message);a.href='#'+input.id;a.addEventListener('click',ev=>{ev.preventDefault();input.focus();});li.append(a);errorList.append(li);}errors.hidden=false;errors.focus();return;}
   status.hidden=false;status.textContent='Preview checked. Nothing has been sent or stored. You can contact Frontier directly using the email link.';status.focus();
  });
  form.addEventListener('input',ev=>{const input=ev.target;if(typeof input.setCustomValidity==='function'){input.setCustomValidity('');clearField(input);}status.hidden=true;});
 }
})();
// Only allow known navigation context. Never copy arbitrary query text into email.
(()=>{
 const form=document.querySelector('.enquiry-form');if(!form)return;
 const map=JSON.parse(form.dataset.contextMap),topic=form.elements.topic,email=document.querySelector('[data-context-email]'),summary=document.querySelector('[data-context-summary]');
 const topics=[...topic.options].map(x=>x.value),routes=[...map.sources,...map.solutions.map(x=>x.route),...map.services.map(x=>x.route),...map.solutions.map(x=>'/briefs/'+x.slug)];
 const goals=['cash-flow','growth','equipment','property','startup','ownership','complex','not-sure'];
 let context={};
 function restore(){const q=new URLSearchParams(location.search);context={};if(topics.includes(q.get('purpose')))topic.value=q.get('purpose');else if(q.has('purpose'))topic.value='not-sure';for(const [key,allow] of [['source',routes],['city',map.cities],['goal',goals]])if(allow.includes(q.get(key)))context[key]=q.get(key);const stages=map.solutions.find(x=>x.slug===topic.value)?.stages||[];const stage=stages.find(x=>x.id===q.get('stage'));if(stage)context.stage=stage.label;update();}
 function update(){const label=topic.selectedOptions[0].textContent;const pieces=[['Source',context.source||location.pathname],['Project or purpose',context.stage],['Goal',context.goal],['City',context.city]].filter(([,v])=>v);const body='I would like to discuss '+label+'.\n\n'+pieces.map(([k,v])=>k+': '+v).join('\n')+'\n\nMy non-confidential outline:\n';if(email)email.href='mailto:enquiries@frontiercpx.com?subject='+encodeURIComponent(label)+'&body='+encodeURIComponent(body);if(summary)summary.textContent='Enquiry topic: '+label+(context.stage?' · '+context.stage:'')+(context.city?' · '+context.city:'');}
 topic.addEventListener('change',()=>{delete context.stage;delete context.goal;update();});window.addEventListener('popstate',restore);window.addEventListener('pageshow',restore);restore();
})();
