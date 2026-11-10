/** Synthetic-only measurement contract. Not imported by the public website. */
import { readFileSync } from 'node:fs';
const funding = JSON.parse(readFileSync(new URL('../content/customer-journeys.json', import.meta.url)));
const services = JSON.parse(readFileSync(new URL('../content/advisory-services.json', import.meta.url)));
function records(value) { return Array.isArray(value) ? value : Object.values(value).find(Array.isArray); }
const routes = new Set([...records(funding), ...records(services)].map(x => x.route || x.path).filter(Boolean));
export const definitions = Object.freeze({
  route_selected: 'A funding or advisory destination was selected; no enquiry or outcome inferred.',
  email_link_clicked: 'An email link was clicked; receipt, delivery, qualification and funding are unknown.'
});
export function validateEvent(input) {
  if (!input || Object.getPrototypeOf(input) !== Object.prototype) throw new Error('Plain event required');
  if (Object.keys(input).sort().join(',') !== 'event,route') throw new Error('Only event and route permitted');
  if (!Object.hasOwn(definitions, input.event) || !routes.has(input.route)) throw new Error('Unknown event or route');
  return Object.freeze({event: input.event, route: input.route});
}
export function measure(input) {
  validateEvent(input);
  return Object.freeze({enabled: false, sent: false});
}
export const permittedRoutes = Object.freeze([...routes]);
