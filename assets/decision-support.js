(()=>{
 'use strict';
 const text=(tag,value,cls)=>{const node=document.createElement(tag);node.textContent=value;if(cls)node.className=cls;return node;};
 const arrow=()=>{const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('class','icon-arrow');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('fill','none');svg.setAttribute('aria-hidden','true');const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d','M5 19 19 5M5 5h14v14');path.setAttribute('stroke','currentColor');path.setAttribute('stroke-width','1.5');svg.append(path);return svg;};
 const makeLink=(url,label,cls)=>{const a=text('a',label,cls);a.href=url;a.append(arrow());return a;};
 for(const guide of document.querySelectorAll('.funding-guide')){
  const goals=JSON.parse(guide.dataset.guideGoals),form=guide.querySelector('form'),goal=form.elements.goal,help=form.elements.help,result=guide.querySelector('.guide-result');
  const helpValues=['understand','prepare','talk'];form.querySelector('button').disabled=false;
  function render(){const choice=goals.find(x=>x.id===goal.value);if(!choice)return;result.replaceChildren(text('p','Your funding guide','kicker'),text('h2','Options to explore'),text('p',choice.explain));
   if(!choice.routes.length){result.append(text('h3','Begin without a product choice.'),text('p','You can compare commitments, prepare the business objective or discuss what support would help.'),makeLink('/funding-options','Compare funding questions','text-link'),makeLink('/services/funding-readiness','Explore preparation support','text-link'),makeLink('/contact?purpose=not-sure&goal=not-sure&source=%2Ffunding-guide#enquiry','Discuss the objective','text-link'));}
   for(const route of choice.routes){const card=document.createElement('article');card.className='goal-card';const h=document.createElement('h3');h.append(makeLink(route.url,route.title,''));card.append(h,text('p',route.description));if(help.value==='prepare'){const ul=document.createElement('ul');ul.className='checklist';for(const item of route.prepare)ul.append(text('li',item));card.append(ul);}const actions=text('div','','actions');actions.append(makeLink(route.brief||'/briefs/'+route.slug,'Understand the commitments','text-link'),makeLink(route.url+'?goal='+encodeURIComponent(choice.id)+'&source=%2Ffunding-guide#enquiry','Discuss this requirement','text-link'));card.append(actions);result.append(card);}
   result.append(makeLink('/funding-options','Compare the commitments','text-link'),text('p','These are starting points for a discussion, not an eligibility assessment or funding offer.','form-note'));result.hidden=false;
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
  let submissionKey=null,lastPayload=null,pending=false;
  form.addEventListener('submit',async ev=>{
   ev.preventDefault();if(pending)return;resetErrors();const invalid=[];
   for(const input of form.querySelectorAll('input,textarea')){
    if(input.disabled)continue;
    if(input.required&&!input.value.trim())input.setCustomValidity(input.name==='name'?'Enter your name.':input.name==='phone'?'Enter your phone number.':input.name==='email'?'Enter your email address.':'Complete this field.');
    else if(input.type==='email'&&input.validity.typeMismatch)input.setCustomValidity('Enter an email address in the format name@example.com.');
    if(!input.checkValidity())invalid.push(input);
   }
   if(invalid.length){status.hidden=true;for(const input of invalid){const id=input.id+'-error',label=form.querySelector('label[for="'+input.id+'"]')?.textContent||'Field',message=input.validationMessage;input.setAttribute('aria-invalid','true');input.setAttribute('aria-errormessage',id);input.setAttribute('aria-describedby',[(input.getAttribute('aria-describedby')||''),id].filter(Boolean).join(' '));const inline=text('p',message,'field-error');inline.id=id;input.after(inline);const li=document.createElement('li'),a=text('a',label+': '+message);a.href='#'+input.id;a.addEventListener('click',ev=>{ev.preventDefault();const options=input.closest('details');if(options)options.open=true;input.focus();});li.append(a);errorList.append(li);}errors.hidden=false;errors.focus();return;}
   const payload={name:form.elements.name.value.trim(),email:form.elements.email.value.trim(),phone:form.elements.phone.value.trim(),requirement:form.elements.requirement.value.trim(),website:form.elements.website.value,sourcePath:location.pathname.replace(/\/$/,'')||'/',formVersion:form.dataset.formVersion};
   const fingerprint=JSON.stringify(payload);
   if(fingerprint!==lastPayload){submissionKey=crypto.randomUUID();lastPayload=fingerprint;}
   payload.submissionKey=submissionKey;
   const button=form.querySelector('button[type="submit"]'),originalLabel=button.textContent;
   const inputs=[...form.querySelectorAll('input,textarea')].filter(input=>!input.disabled);
   pending=true;button.disabled=true;button.textContent='Sending…';form.setAttribute('aria-busy','true');inputs.forEach(input=>input.readOnly=true);
   status.hidden=false;status.textContent='Saving your enquiry…';
   try{
    const response=await fetch('/api/enquiries',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),signal:AbortSignal.timeout(25000)});
    const result=await response.json();
    if(!response.ok||!result.ok||typeof result.reference!=='string'){
     if(response.status===409){submissionKey=null;lastPayload=null;}
     if(response.status===429)throw new Error('Please wait before trying again, or email enquiries@frontiercpx.com.');
     if(result.error==='refresh_form')throw new Error('Please refresh this page before sending your enquiry.');
     throw new Error('We could not save your enquiry. Your details are still here. Please try again or email enquiries@frontiercpx.com.');
    }
    form.reset();submissionKey=null;lastPayload=null;
    status.textContent='Your enquiry has been saved.';
    const success=text('section','','enquiry-success');
    success.setAttribute('role','status');success.setAttribute('tabindex','-1');
    const mark=text('span','','enquiry-success-mark');mark.setAttribute('aria-hidden','true');
    const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 32 32');svg.setAttribute('fill','none');svg.setAttribute('focusable','false');
    const tick=document.createElementNS('http://www.w3.org/2000/svg','path');tick.setAttribute('d','M8 16.5 13.5 22 24 10');tick.setAttribute('stroke','currentColor');tick.setAttribute('stroke-width','2.5');tick.setAttribute('stroke-linecap','round');tick.setAttribute('stroke-linejoin','round');tick.setAttribute('pathLength','1');svg.append(tick);mark.append(svg);
    const heading=text('h2','Thank you for getting in touch.');
    const received=text('p','We’ve received your message.','enquiry-success-received');
    const next=text('p','The Frontier team will contact you to discuss your plans and the next step.','enquiry-success-next');
    const reference=text('p','Your enquiry reference: '+result.reference,'enquiry-success-reference');
    const home=text('a','Back to home','enquiry-success-home');home.href='/';
    success.append(mark,heading,received,next,reference,home);
    form.hidden=true;form.after(success);
    success.focus();
   }catch(error){
    status.textContent=error.name==='TimeoutError'||error.name==='AbortError'?'We could not confirm your enquiry was saved. Your details are still here. Please try again; this will not create a duplicate enquiry.':error.message==='Failed to fetch'?'We could not connect. Your details are still here. Please try again or email enquiries@frontiercpx.com.':error.message;
   }finally{pending=false;button.disabled=false;button.textContent=originalLabel;form.removeAttribute('aria-busy');inputs.forEach(input=>input.readOnly=false);if(!form.hidden)status.focus();}

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
