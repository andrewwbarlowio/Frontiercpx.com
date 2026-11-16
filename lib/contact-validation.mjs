import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
export const FORM_VERSION = '2026-11-16';
export class ContactError extends Error {
 constructor(status, code, fields = {}) { super(code); this.status = status; this.code = code; this.fields = fields; }
}
export function validateEnquiry(body, routes) {
 if (!body || typeof body !== 'object' || Array.isArray(body)) throw new ContactError(400, 'invalid_body');
 if(['customerId','customer_id','enquiryId','enquiry_id'].some(key=>Object.hasOwn(body,key)))throw new ContactError(422,'server_generated_identity_only');
 const fields = {};
 const limits = { name:100, email:254, phone:40, requirement:1600 };
 const clean = {};
 for (const [field,max] of Object.entries(limits)) {
  if (body[field] !== undefined && typeof body[field] !== 'string') { fields[field]='Enter text for this field.'; continue; }
  clean[field]=(body[field] || '').trim();
  if (field !== 'requirement' && !clean[field]) fields[field]='Enter a value for this field.';
  if (clean[field].length > max || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(clean[field])) fields[field]='Check the length and characters in this field.';
 }
 if (clean.email && !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(clean.email)) fields.email='Enter a valid email address.';
 if (clean.phone && (!/^[+()\d\s.\-xext#]+$/i.test(clean.phone) || clean.phone.replace(/\D/g,'').length < 6)) fields.phone='Enter a valid phone number.';
 if (Object.keys(fields).length) throw new ContactError(422,'validation_failed',fields);
 if (typeof body.sourcePath !== 'string' || !routes.includes(body.sourcePath)) throw new ContactError(422,'invalid_source');
 if (body.formVersion !== FORM_VERSION) throw new ContactError(422,'refresh_form');
 if (typeof body.submissionKey !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(body.submissionKey)) throw new ContactError(422,'invalid_submission_key');
 if (typeof body.website !== 'string' || body.website.length > 200 || body.website.trim()) throw new ContactError(422,'invalid_submission');
 return { ...clean, sourcePath:body.sourcePath, formVersion:body.formVersion, submissionKey:body.submissionKey };
}
export const payloadHash = (value,environment) => createHash('sha256').update(JSON.stringify([environment,value])).digest('hex');
export const clientBucket = (ip,secret) => createHmac('sha256',secret).update(ip).digest('hex');
export function constantEqual(a,b) {
 if (!a || !b) return false;
 const left=Buffer.from(a),right=Buffer.from(b);
 return left.length===right.length && timingSafeEqual(left,right);
}
export function notificationConfig(env=process.env) {
 const recipientText=env.ENQUIRY_NOTIFICATION_TO || 'enquiries@frontiercpx.com';
 const recipients=[...new Set(recipientText.split(',').map(x=>x.trim()).filter(Boolean))];
 const sender=env.RESEND_FROM || 'Frontier <website@notifications.frontiercpx.com>';
 if (!recipients.length || recipients.length>5 || recipients.some(x=>!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(x)) || /[\r\n]/.test(sender)) throw new ContactError(503,'notification_configuration');
 return {recipients,sender};
}
