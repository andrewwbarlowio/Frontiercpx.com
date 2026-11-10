# Frontier Capital Partners

Customer journeys preview on `build/customer-journey-v2`. Production remains on main while this design is reviewed.

## Build

Run `node scripts/build.mjs` with Node 20.11 or later. No package installation is needed. Vercel publishes `dist/`. Every build checks routes, anchors, assets, unique IDs, initial HTML, preview restrictions and script syntax.

## Current source

- `content/customer-journeys.json`: ten tailored solution/sector journeys, trade-offs, suitability and FAQs.
- `content/solution-imagery.json`: retained approved concept heroes and photographic illustrations.
- `scripts/customer-site.mjs`: shared initial-HTML templates, homepage, navigation, hub, supporting pages, 404 and local legacy fallbacks.
- `assets/customer-journey.css` and `.js`: responsive layout and accessible navigation.
- `scripts/customer-content.mjs`: About, process, adviser route, funding guide, comparison and ten decision briefs.
- `assets/decision-support.css` and `.js`: guide interactions, accessible preview validation and brief print styles.
- `vercel.json`: preview indexing restrictions and explicit legacy redirects. When routes change, update this file and the checks together.

The build publishes only the new customer experience and its selected assets. Old captured templates, 80 demonstration profiles, 12 articles and 23 office records remain in source history/reference files but are not emitted or linked in the new build. Do not edit dist.

## Preview boundaries

Enquiry forms validate sample input only. They do not send, save or analyse entries; CSP also blocks form submissions and network connections. No analytics are loaded. Full service coverage, operational contacts, remuneration and proof still need founder/partner confirmation. Insurance and digital-infrastructure pages explicitly identify pending specialist scope.

See `docs/customer-journey-v2.md` for changes, verification and remaining launch dependencies. Main has not been merged by this change.
