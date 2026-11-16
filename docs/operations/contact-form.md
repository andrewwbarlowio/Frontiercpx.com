# Website enquiry capture and notifications

Implemented on `contact-form`, 16 November 2026. Capture and notification sending have independent switches. This document distinguishes tested code from live activation.

## Implemented flow

The shared form POSTs to `/api/enquiries`. Server-side validation runs before an atomic Postgres transaction saves the enquiry and one notification record per configured recipient. A committed enquiry is the only basis for a success response. The browser keeps the same submission key when retrying an unchanged request, including after a lost response.

A bounded Resend attempt runs after commit. The protected `/api/enquiry-notifications` worker independently drains queued and retry records. Leases prevent simultaneous workers from intentionally sending the same record. Stable Resend idempotency keys cover ambiguous provider responses. Transient errors retry with backoff; permanent failures and ambiguous sends older than 23 hours require review. The implementation does not promise exactly-once delivery beyond Resend's 24-hour idempotency window.

Signed `/api/resend-webhook` events record delivered, bounced, complained and failed outcomes separately from provider acceptance. Event IDs deduplicate retries. Events arriving before provider acknowledgement are retained and reconciled. A transaction-level lock serialises reconciliation for each provider message ID.

The notification includes the committed name, email, phone, message, page, UTC receipt time and reference. The customer email is Reply-To; the verified Frontier address is From. HTML is escaped and a plain-text alternative is included. No customer acknowledgement email or marketing subscription is sent.

## Database provisioned for development

- Neon project: `Frontier-postgres` (`fragrant-fire-96819462`).
- Isolated branch: `contact-form` (`br-nameless-rice-zap9gubx`), parent `main`.
- Region: London (`aws-eu-west-2`).
- Schema: `frontier_contact`; migration: `migrations/001-enquiries.sql`.
- Tables: `enquiries`, `notification_deliveries`, `rate_limits`, `provider_events`.
- Application role: `frontier_contact_app`, read/write scoped to `frontier_contact`.
- The migration was applied and all four tables were confirmed through the Neon connection. The existing main branch was not migrated or modified.

Use this branch for previews only. Create a separate production branch/database and apply the same tracked migration before production activation. Use the scoped application role for runtime; use an owner/direct connection only for migrations. Do not put an owner connection in browser assets or commit it.

## Activation settings

Configure the correct live website Vercel project, with separate Preview/Production values. `.env.example` lists every key.

| Variable | Purpose / initial value |
| --- | --- |
| `DATABASE_URL` | Pooled connection for the isolated environment, using the scoped application role |
| `DATABASE_URL_UNPOOLED` | Direct owner connection for migration only; need not be deployed to the application |
| `ENQUIRY_CAPTURE_ENABLED` | `true` only after that database schema/configuration is verified |
| `CONTACT_RATE_LIMIT_SECRET` | Unique random server secret used to HMAC client identifiers |
| `ENQUIRY_NOTIFICATION_TO` | `enquiries@frontiercpx.com`; use a controlled test inbox for previews |
| `RESEND_API_KEY` | Already reported added by the owner; its project, targets and scope still need verification |
| `RESEND_FROM` | `Frontier <website@notifications.frontiercpx.com>` |
| `CONTACT_NOTIFICATIONS_ENABLED` | Keep `false` until sender verification and controlled delivery testing; queued capture still works |
| `CONTACT_PREVIEW_NOTIFICATIONS_ENABLED` | `false` by default; explicit `true` required to send from previews |
| `RESEND_WEBHOOK_SECRET` | Signing secret from the webhook registered for this environment |
| `CRON_SECRET` | Independent random server secret authenticating the worker and its protected status response |
| `CONTACT_ALLOWED_ORIGINS` | Optional exact preview/custom origins; production domains and `VERCEL_URL` are already covered |

Generate random secrets with a secure generator; store them directly as environment secrets. Never put secret values in chat, URLs, Git or the client bundle. Redeploy after changing variables. Capture defaults to unavailable until deliberately enabled; a configuration error returns 503, never fake success.

## Retry schedule — activation required

A durable outbox is implemented; an external clock must invoke its worker even when there are no visitors. No schedule has been activated because the actual website project and Vercel plan are not accessible through the current connection.

After confirming a plan that supports a five-minute Vercel Cron cadence, merge this entry into the existing `vercel.json` (preserve other fields):

```json
{
  "crons": [
    { "path": "/api/enquiry-notifications", "schedule": "*/5 * * * *" }
  ]
}
```

Set `CRON_SECRET` so Vercel authenticates the request. On a plan without that cadence, configure an authenticated managed scheduler to GET/POST the same endpoint every five minutes; do not silently substitute a once-daily retry schedule. Preview cron execution and Production scheduling are distinct: test the preview worker explicitly, then confirm the production scheduler actually invokes it. Each invocation attempts up to five deliveries within a bounded time budget.

Do not describe automatic retry delivery as active until a scheduled invocation is observed. While sending is disabled the worker leaves notifications pending without consuming send attempts. A 403 from Resend after activation is a permanent configuration failure; fix the sender/key and review failed rows rather than retrying endlessly.

## Webhook activation

Register the environment's `/api/resend-webhook` URL in Resend for `email.sent`, `email.delivered`, `email.bounced`, `email.complained`, `email.failed`, and `email.delivery_delayed`. Save its signing secret in that environment and redeploy. Preview deployment protection must allow legitimate callbacks or use a separate reachable staging endpoint; never remove protection from private lead data to accommodate a webhook. Confirm the signature test and one real delivered event before claiming delivery tracking works live.

## Inspecting enquiries and delivery failures

Initially use individual, restricted Neon console access rather than a public dashboard. In Neon SQL Editor select the correct branch, then:

```sql
SELECT id, received_at, name, email, phone, requirement, source_path
FROM frontier_contact.enquiries
ORDER BY received_at DESC
LIMIT 100;
```

For operational health without contact details:

```sql
SELECT status, delivery_status, last_error_code, count(*)
FROM frontier_contact.notification_deliveries
GROUP BY status, delivery_status, last_error_code;
```

`npm run enquiries:status` prints counts and oldest queued time without contact details when a database connection is supplied. The authenticated worker response provides the same waiting/failure signals. Add an independent monitor for failed records and oldest pending age above 15 minutes; monitor configuration is still a deployment task. Do not rely only on notification email to report its own outage.

`accepted` means Resend accepted the request. `delivery_status='delivered'` means a signed provider event reports delivery to the recipient's mail server; it does not prove somebody read the email or that it landed outside junk.

For recovery, first inspect the provider message/Resend logs and resolve the configuration or recipient issue. Do not automatically reset accepted, bounced or complained messages. A failed ambiguous send after 23 hours needs an operator to establish whether the original was delivered before arranging any resend. Recovery decisions and any retained records should be documented outside the public repository.

## Data handling and rollback

No query strings or raw client IPs are stored. The rate limiter stores short-lived HMAC buckets and the worker deletes expired buckets. Contact and message values are excluded from application error logs. Abuse limits are five new enquiries per client/hour and 300/hour overall per environment; exact retries do not consume another enquiry. The honeypot and exact-origin checks supplement validation and the durable limiter.

Enquiry handling does not opt a person into marketing. Apply the site's stated retention policy operationally; this change does not add automatic deletion of enquiry records. Confirm individual console access, backup/recovery and operational retention ownership before launch.

To stop sending, set `CONTACT_NOTIFICATIONS_ENABLED=false` and redeploy; already saved enquiries/outbox records remain. To stop capture, set `ENQUIRY_CAPTURE_ENABLED=false`; the form returns an honest error and offers email. Rolling back the static code must not drop the schema or erase enquiries.

## Verification boundary

See `docs/verification/contact-form.md`. Automated checks cover all generated forms using JSDOM and embedded Postgres, plus API/failure behaviour and mocked Resend delivery. Remote schema creation was confirmed separately. Deployed Vercel runtime, mobile browser layout, actual inbox receipt, scheduling and signed live callbacks remain to be verified once the correct Vercel project is accessible. CRM, client authentication, marketing and the remaining site-wide audit items are outside this contact-form branch.
