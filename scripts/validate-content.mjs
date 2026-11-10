import assert from 'node:assert/strict';
export function validateContent(data,services){
 const required=['slug','route','title','headline','intro','fitHeading','fitIntro','usesHeading','structureHeading','commitmentsHeading','valueHeading','valueIntro','preparationHeading','questionsHeading','enquiryHeading','enquiryIntro','primaryCta'];
 assert.equal(data.solutions.length,10);
 const retired=['A clear starting point.','The purpose shapes the funding.','Your business first.'];
 for(const x of data.solutions){for(const k of required)assert(typeof x[k]==='string'&&x[k].trim(),`${x.slug}: required ${k}`);for(const k of ['fit','uses','tradeoffs','prepare','faqs'])assert(Array.isArray(x[k])&&x[k].length,`${x.slug}: required ${k}`);assert(data.solutions.some(y=>y.slug===x.alternative),`${x.slug}: alternative`);for(const row of x.uses)assert(row.length===4&&row.every(v=>typeof v==='string'&&v.trim()),`${x.slug}: purpose CTA`);for(const k of required)assert(!retired.includes(x[k]),`${x.slug}: retired heading`);}
 assert.equal(services.length,7);assert.equal(new Set(services.map(x=>x.slug)).size,7);
 for(const x of services){for(const k of ['slug','route','title','intro','audience','trigger','fees','boundaries','enquiry'])assert(typeof x[k]==='string'&&x[k].trim(),`${x.slug}: required ${k}`);for(const k of ['scope','outputs','process','prepare','relatedFunding','faqs'])assert(Array.isArray(x[k])&&x[k].length,`${x.slug}: required ${k}`);for(const slug of x.relatedFunding)assert(data.solutions.some(y=>y.slug===slug),`${x.slug}: funding reference ${slug}`);}
}
