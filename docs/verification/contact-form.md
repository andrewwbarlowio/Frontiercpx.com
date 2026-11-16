# Contact-form verification — 16 November 2026

## Completed

- `npm run build`: 50 generated routes; 4,300 internal links and 503 asset references checked; unique IDs and syntax checks pass.
- `npm test`: 14 tests passed. Every one of the 26 generated enquiry forms submitted through the shipped browser interaction in JSDOM. All four submitted values and the source path matched embedded Postgres records and rendered notification content.
- Failure coverage: atomic rollback when outbox insertion fails; no success on database failure; saved enquiry retained when notification fails; unchanged retry deduplication; changed payload conflict; client values retained after lost response; sixth new enquiry rate-limited; disabled sending leaves queue untouched; one recipient's failure does not repeat the other's accepted send; stable provider idempotency keys; claim/lease recovery; permanent errors; transient outage; expired idempotency window requires review; duplicate/out-of-order events; signature rejection and valid signing verification; email escaping; request validation, origin and body limits.
- `node scripts/qa-auth.mjs`: existing authentication-preview regression checks pass.
- `node scripts/check-sprint-5.mjs`: disabled measurement checks pass. Its stale pre-bridging route count was replaced with a count derived from current funding/advisory content.
- `npm audit --omit=dev`: zero reported production dependency vulnerabilities.
- Neon: tracked migration applied on the isolated `contact-form` database branch. Four expected tables confirmed. Scoped runtime role created; no main-branch schema changes.

## Form inventory

All routes below passed synthetic field mapping and notification rendering. Notifications were mocked; no real email was sent by these tests.

| Route | Stored fields/source | Rendered notification |
| --- | --- | --- |
| `/about-us` | Pass | Pass |
| `/contact` | Pass | Pass |
| `/for-advisers` | Pass | Pass |
| `/funding-network` | Pass | Pass |
| `/funding-options` | Pass | Pass |
| `/our-approach` | Pass | Pass |
| `/our-expertise` | Pass | Pass |
| `/sectors/digital-infrastructure` | Pass | Pass |
| `/sectors/insurance-capital` | Pass | Pass |
| `/sectors/life-sciences` | Pass | Pass |
| `/services` | Pass | Pass |
| `/services/capital-strategy` | Pass | Pass |
| `/services/debt-advisory` | Pass | Pass |
| `/services/equity-advisory` | Pass | Pass |
| `/services/financial-modelling` | Pass | Pass |
| `/services/funding-readiness` | Pass | Pass |
| `/services/ongoing-advisory` | Pass | Pass |
| `/services/transaction-support` | Pass | Pass |
| `/solutions/bridging-loans` | Pass | Pass |
| `/solutions/business-funding` | Pass | Pass |
| `/solutions/complex-funding` | Pass | Pass |
| `/solutions/growth-and-ownership-capital` | Pass | Pass |
| `/solutions/property-finance` | Pass | Pass |
| `/solutions/sustainability-and-impact` | Pass | Pass |
| `/solutions/technology-funding` | Pass | Pass |
| `/solutions/venture-funding` | Pass | Pass |

## Earlier test limitations (superseded for capture by live checks below)

The tests use embedded Postgres (PGlite), with transaction advisory lock calls stubbed because that embedded engine does not model separate server sessions. Concurrent worker locking still needs a real deployed Postgres/runtime check. Provider responses are controlled test doubles, not inbox delivery evidence. There is no claim of a live working form based on these tests alone.

The current Vercel connection lists only older Frontier projects and returns not-found for the live site's expected project names. A browser attempt to access Vercel timed out. No live website environment settings, webhook, cron schedule, production database, production deploy or real-user records were changed. Activation needs correct project access and environment setup; Resend sender verification is a separate remaining check.


## Live activation verified — 16 November 2026

PR #6 was merged to main (dcf9955dc1769bfb1a341eeca78b29ab64876f4b). Vercel reported a successful production deployment at https://vercel.com/andrewbarlowio/frontiercpx/XWsdvLAqpt1a33smZgXjp72ZZV5j.

After browser sign-in, server-only DATABASE_URL settings were saved separately for Preview and Production. Capture is enabled in both; notification sending is explicitly disabled. Preview uses the isolated contact-form Neon branch. Production uses a distinct website-production Neon branch (br-spring-breeze-zarpyh2j), created before any preview test records were inserted. Both runtime connections use the schema-scoped frontier_contact_app role. No credentials are recorded in this document.

All 26 form routes listed above were submitted through the real browser on the configured preview deployment and again on https://frontiercpx.com. Direct Neon queries confirmed 26 unique form pages in each database. In Production, all name, email, phone, message and source-path comparisons passed; every record is tagged production. Each submission created its corresponding notification outbox entry for the agreed recipient. Synthetic test outbox entries were then marked failed with synthetic_test_do_not_send to prevent later delivery of test notifications. The clearly labelled synthetic enquiry records remain as verification evidence.

During the controlled batches, only the QA client rate-limit bucket was reset between groups of five. Production resets were guarded by the expected synthetic-record count and absence of other enquiry records. The shipped rate limiter remains unchanged. Real visitor enquiries retain their normal limits and durable notification records.

Remaining work is email activation and delivery testing (including Resend domain verification, webhook and retry scheduling), plus the separate wider site audit items. These no longer block real form persistence in Neon. A successful form submission on the live domain now reflects a committed database record.
