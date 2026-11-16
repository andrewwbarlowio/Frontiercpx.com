# Contact form capture and notifications — implementation spike
Date: 16 November 2026
Branch: contact-form
Status: investigation and proposed design only; no runtime implementation or resources provisioned.

## Goal and boundaries
Reliably save every website enquiry and notify Andy and Roger with the submitted information. Finish this before returning to wider site launch work. CRM selection, pipelines, client authentication and site-wide indexing/copy fixes are separate work.

## Repository findings
Inspected main on 16 November 2026:
- vercel.json runs node scripts/build.mjs and publishes dist; this is a generated static site, not a Next.js app. No root package.json was found.
- scripts/build.mjs calls renderSite from scripts/customer-site.mjs. Edit the generator, not archived root HTML.
- scripts/customer-site.mjs has a shared enquiryForm() used by contact sections: name (100 characters), email (254), phone (40), optional requirement (1600). Submit is disabled and copy explicitly says nothing is saved.
- The generated CSP sets connect-src 'none' and form-action 'none'. A new same-origin fetch will be blocked until connect-src is changed to 'self'. Keep other restrictions; change form-action only if implementing a native POST fallback.
- assets/customer-journey.js currently has navigation/auth-demo logic but no working enquiry submission.
- Generate the current route inventory and discover actual enquiry forms from dist to establish the full test list; the earlier live audit reported forms on 26 pages, but this must be regenerated rather than hardcoded.

## Recommended minimal architecture
Static form -> POST /api/enquiries (Vercel Node Function) -> managed Postgres transaction.
The transaction inserts one enquiry plus one pending notification per configured recipient.
After commit, attempt email delivery immediately, awaiting a bounded attempt. A durable scheduled worker drains pending/retry records independently of browser lifetime. Return success once storage commits; email delivery is a separate status.
Recommended database: Neon Postgres via Vercel Marketplace. Selected email service: Resend with a verified sending domain. Resend will send enquiry notifications to Andy and Roger's existing Microsoft 365-hosted email addresses. Microsoft 365 remains the mailbox/reply service; Microsoft Graph is not the notification sending route. Resend is also the selected service for future marketing campaigns, which are outside this implementation scope. Database choice remains a proposal; no services are configured by this spike.
Do not rely on unawaited promises after a serverless response. Do not require CRM availability for capture.

## Data contract
POST body: name, email, phone, requirement, sourcePath, formVersion, submissionKey.
Use a browser-generated submissionKey retained across retries of the same attempt. Unique constraint prevents duplicate records; reject reuse with different payload. A deliberate new enquiry gets a new key.
Generate id and receivedAt on server; infer environment on server. Validate sourcePath as a local allowlisted route; it is context, not a trusted security signal. Store explicit product context only if it is already known from the page. Do not store query strings that might contain personal information.
Server validates required values, format and length independently of HTML. Reject oversized bodies and unsupported content types.
Responses: 201 with opaque enquiry reference after commit; 200 for an identical retry; 400/422 validation error; 429 rate limit; 503 if persistence unavailable. Never show success before commit. Preserve input on errors. Disable repeat clicks while pending and provide accessible status/error focus.

## Proposed tables
enquiries:
- id UUID primary key; submission_key unique; payload_hash for retry comparison.
- name, email, phone, requirement nullable.
- source_path, form_version, environment, received_at timestamptz.
- privacy_notice_version if a displayed notice version is used.
notification_deliveries:
- id, enquiry_id foreign key, recipient identifier/address, channel.
- status pending/processing/accepted/delivered/retry/failed/bounced.
- attempt_count, next_attempt_at, lease_until, provider_message_id.
- last_error_code, accepted_at, delivered_at, created_at, updated_at.
- unique(enquiry_id, recipient, channel).
Keep delivery tracking separate for Andy and Roger so one success cannot hide the other failing.
Future CRM integration can use enquiry id as its external unique key without changing the public form.

## Confirmed sending decision
Resend handles transactional website notifications now and future marketing later. Keep campaign subscriptions, unsubscribe/suppression state and marketing permission records distinct from enquiry records and internal operational alerts. Submitting an enquiry must not automatically enrol someone in marketing. Future campaigns need their own configuration and verification; selecting Resend now does not implement campaigns.

## Notification content and reliability
Send a separate internal email to each verified recipient:
Subject: New Frontier enquiry — [source/product] — [reference]
Body: name, email, phone, message (or 'No message provided'), originating page, received time and reference. Include plain text plus safely escaped HTML. Use a verified Frontier sender; validated customer email can be Reply-To, never From.
Read the payload from the committed enquiry record to prevent mapping drift. Do not add unsubmitted/inferred facts.
Use a stable provider idempotency key per delivery; verify provider retention window before implementing retries. Maintain durable database deduplication and status even after that window; do not claim exactly-once delivery.
Worker claims due records with a lease/transaction to avoid concurrent sends. Retry transient timeouts, 429 and 5xx with bounded exponential backoff. Permanent errors move to failed and are visible for manual recovery. Expired leases can be reclaimed.
Verify signed provider webhooks and deduplicate events. Provider acceptance is not inbox delivery; store delivered/bounced events separately and handle out-of-order events.
Pending/failed notifications must remain queryable; monitor oldest pending age and repeated failures through an independent operational alert, not solely the failing email channel.
Proposed retry worker cadence: every five minutes, subject to the actual Vercel plan's supported schedule. Confirm plan before promising this cadence; choose a managed scheduled worker/queue if needed. Secure worker endpoint with a server-only secret.
Customer acknowledgement email is optional later; browser success confirmation is required now.

## Access, security and operations
- Database and email credentials are server-only Vercel environment secrets, never bundled into assets.
- Give Andy and Roger individual restricted provider-console access to inspect enquiries initially; verify usable read/export access. No public enquiry-list endpoint or custom CRM dashboard is required.
- Separate production/test databases or branches and recipient configuration. Preview tests must not notify real recipients by default.
- Basic abuse controls: server-side validation, honeypot and a durable rate limiter; assess challenge only if needed. Origin checks are supplemental and not a substitute for abuse controls.
- Parameterized queries; escape all email rendering; exclude message/contact values from application logs.
- Define retention/deletion, backup/restore and account access before launch. Update privacy text to describe actual capture and processors; avoid treating enquiry handling as marketing consent.
- Log reference, correlation id and delivery state, with scrubbed error details.
- No real customer data or secrets in this public GitHub repository.

## Implementation sequence
1. Confirm Vercel project/runtime/plan, provision isolated database and email service, verify sender and the two recipient addresses. Do not guess addresses.
2. Add package.json/dependencies and lockfile without disturbing existing static build. Create migrations for both tables and restricted credentials.
3. Implement api/enquiries and shared validation/storage module; transactionally create outbox records.
4. Add delivery adapter, worker and signed webhook endpoint; configure schedule and operational monitoring.
5. Update shared generator form markup/copy and CSP; add shared client submit handler. Update preview-specific assertions only where capture is now implemented.
6. Build generated site and execute the form inventory test matrix below in isolated preview.
7. Verify production configuration, deploy, run controlled end-to-end smoke tests with agreed test identities and confirm both actual inbox deliveries. Mark or remove test records.
8. Record launch evidence, operating instructions and rollback/recovery procedure. Then return to the remaining site audit fixes.

## Acceptance and test evidence required
For EVERY generated page containing an enquiry form, record route, test marker, enquiry id, stored-field comparison, Andy delivery status, Roger delivery status and result.
- Submit unique synthetic data from each page; verify all four submitted values and source path against database and both rendered email bodies.
- Browser desktop/mobile and keyboard checks: labels, validation, pending state, retained input on failure, accessible success and no-JavaScript behaviour (honest fallback with contact email).
- Force database failure: no success and no email; retry succeeds without duplicate enquiry.
- Force email failure: enquiry remains stored, pending delivery survives request termination and worker retries.
- One recipient fails, the other succeeds: only failed recipient retried.
- Double click/network response lost/retry: one enquiry and no avoidable duplicate email.
- Concurrent workers and lease expiry; webhook authenticity, duplicate events, bounce and out-of-order event handling.
- Empty/invalid/oversized/malicious input; HTML escaping, rate limits and honeypot.
- Verify generated CSP permits the same-origin endpoint; no browser secrets and no confidential payload in logs.
- Reconcile total accepted test submissions against enquiry count and delivery records; resolve every mismatch.
Do not label forms 'working' based only on HTTP 200 or a front-end success message.

## Remaining deployment inputs
Actual Vercel project access and plan; database region/account and budget; verified sending identity/domain DNS; exact Andy/Roger recipient addresses; operational monitoring destination; retention and recovery settings.
These do not block this spike, but are needed to activate and verify real notifications.

## Primary references
- https://vercel.com/docs/storage
- https://vercel.com/docs/functions
- https://vercel.com/docs/cron-jobs
- https://vercel.com/docs/cron-jobs/manage-cron-jobs
- https://resend.com/docs/dashboard/emails/idempotency-keys
- https://resend.com/docs/webhooks/introduction

## Completion status
Repository inspection and design spike complete. No database, email setup, API, form wiring, deployment or end-to-end tests have been performed by this documentation change.
