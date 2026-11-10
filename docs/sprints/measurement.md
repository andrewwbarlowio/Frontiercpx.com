# Measurement contract — G16

Status: defined and synthetically verified; collection disabled. No analytics vendor, browser listener, cookie, storage or transport is installed. `scripts/measurement.mjs` is a Node-only contract and is not imported into public pages.

| Event | Permitted payload | Meaning |
| --- | --- | --- |
| route_selected | event, route | A funding or advisory destination was selected |
| email_link_clicked | event, route | An email link on that destination was clicked |

Routes are the exact 17 funding and service detail paths derived from current content. Reject extra keys, unknown events, full URLs, query strings, fragments and unknown routes. Do not collect email addresses, names, credentials, company names, amounts, form content, mailto subjects or free text. The adapter validates then returns enabled:false, sent:false. It cannot be enabled by a flag.

A click proves neither email delivery nor receipt, qualified lead status, funding secured or conversion uplift. Form delivery and CRM outcome integration remain deferred under G11.

Before activation, development must select tooling, document its processing/retention/access controls and consent requirements, obtain Andy/Roger's decision, update privacy information, implement consent where required and verify actual network payloads. Activation requires a separate reviewed change. No target or uplift is asserted.

Reproduce: build then `node scripts/check-sprint-5.mjs`. Evidence: evidence/sprint-05/regression.txt.
