# Frontier Capital Partners

Customer journeys preview on `build/customer-journey-v2`. Production remains on main while this design is reviewed.

## Build

Run `npm ci`, then `npm run build` with Node 24. Run `npm test` for enquiry capture and notification checks. Vercel publishes `dist/`. Every build checks routes, anchors, assets, unique IDs, initial HTML, preview restrictions and script syntax.

## Current source

- `content/customer-journeys.json`: eleven tailored solution/sector journeys, trade-offs, suitability and FAQs.
- `content/solution-imagery.json`: retained approved concept heroes and photographic illustrations.
- `scripts/customer-site.mjs`: shared initial-HTML templates, homepage, navigation, hub, supporting pages, 404 and local legacy fallbacks.
- `assets/customer-journey.css` and `.js`: responsive layout and accessible navigation.
- `scripts/customer-content.mjs`: About, process, adviser route, funding guide, comparison and eleven decision briefs.
- `assets/decision-support.css` and `.js`: guide interactions, accessible enquiry submission and brief print styles.
- `vercel.json`: preview indexing restrictions and explicit legacy redirects. When routes change, update this file and the checks together.

The build publishes only the new customer experience and its selected assets. Old captured templates, 80 demonstration profiles, 12 articles and 23 office records remain in source history/reference files but are not emitted or linked in the new build. Do not edit dist.

## Enquiry capture

The shared form posts to a Vercel Node function, which saves an enquiry and a notification outbox transaction before showing success. Resend notifications, retries and signed delivery callbacks are implemented. Capture and sending are independently disabled until environment configuration is activated. No marketing subscription is created by an enquiry.

See [the operating instructions](docs/operations/contact-form.md) for environment settings, database migration, retry scheduling and recovery, and [verification evidence](docs/verification/contact-form.md) for completed tests and live activation limits. This branch is not a claim that production forms or inbox delivery have been enabled.

Client login remains a separate demonstration interface. Search indexing remains blocked pending the wider launch work.
