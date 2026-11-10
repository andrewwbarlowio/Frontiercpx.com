# Sprint 2 Advisory Services implementation

Starting head: `8803abf6a9f3cdf883cb82663b6d9fad30d768ea`; branch `build/site-refinements-v3`. No changes to main, framework, brand assets or live integrations. Starting build: 40 routes, 3,373 links and 318 assets checked. Andy authorised Sprint 2 after reviewing Sprint 1, with its protected-deployment check still open; this work does not assert G10 deployed acceptance.

## Routes and page ownership

/services is the complete overview. All seven service detail routes now render from one template:

- /services/capital-strategy
- /services/funding-readiness
- /services/financial-modelling (Sprint 1 pilot retained, rendered through the common template)
- /services/debt-advisory
- /services/equity-advisory
- /services/transaction-support
- /services/ongoing-advisory

Six new routes bring the total to 46. No URL removed or redirect changed. Navigation now links directly to each service rather than staging six items on overview anchors. Overview anchor IDs remain valid.

## Content and rendering

`content/advisory-services.json` owns seven distinctive headlines, audiences/triggers, scope, outputs and output descriptions, process, preparation, FAQs, fees, boundaries, related funding and contextual enquiry. Eight explicit editorial headings per service control section identity. Each service has its own labelled example with stated assumptions, three discussion stages and a limitation/takeaway. Examples demonstrate a proposed deliverable structure; they are not actual client cases or realised transaction outcomes.

`scripts/services.mjs` renders all detail pages in the same section order: hero, anchor navigation, scope, outputs, example, engagement process, preparation/fees/boundaries, FAQs, relevant funding and enquiry. The overview explains separate paid advisory engagements, lists all seven pages, includes an example and links to Funding Solutions and Our Approach.

`scripts/customer-site.mjs` renders reverse links on funding pages by deriving them from each service's relatedFunding array. There are 30 bidirectional service/funding mappings. Funding Readiness covers all ten solutions with route-specific parent context; there is no separate hardcoded reverse map to drift out of sync.

The overview uses an explicit advisory topic, not a preselected specific service. Detail pages select their own service in the existing contact model. Direct email remains the current contact route. The mailto link includes the service and source, never auto-copies typed form contents. Forms and authentication remain disconnected.

## Completeness and boundaries

`validate-content.mjs` now requires all seven services to have complete editorial headings, output explanations, three FAQs and a structured example. There are no fallback service headlines or placeholder examples. All related funding slugs must resolve. `check.mjs` checks the service renderer and validator syntax as well as the existing modules. `check-sprint-2.mjs` verifies eight Services routes, meaningful initial HTML, anchors, distinct headings/examples, fee/scope copy, all 30 bidirectional links and four negative-content cases. Sprint 1 regression remains green.

No claims about delivery capacity, named partner credentials, funding availability, guaranteed valuation or completion were added. Engagement scope, deliverables, fees and responsibilities are agreed before work. Standalone advisory is client-paid; funding introductions are provider-paid with no Frontier client fee for that activity. Provider costs may apply. These distinctions appear on every service detail and on the overview.

## Verification and handover

Run `node scripts/build.mjs`, `node scripts/check-sprint-1.mjs`, `node scripts/check-sprint-2.mjs`. Recreate local rendering fixtures with `node scripts/qa-services.mjs` and inspect /qa/services-320.html, /qa/services-390.html, /qa/services-768.html and /qa/services-1440.html. The next build removes fixtures from dist; they are not published.

All 32 rendered iframe-width checks had equal document client and scroll widths. Widths are CSS frame widths; scrollbars consume 15px. Physical-device and screen-reader checks are not claimed. Local browser review covers mobile navigation, keyboard FAQ activation, overview -> service -> funding -> return service and context-bearing mailto links.

Sprint 1's protected Vercel verification limitation remains recorded under G10; no dependency on that deployed check is silently assumed. Sprint 2 local scope can be reviewed and delivered independently. Release-wide deployed verification belongs to G15, with G10's enquiry-context check still required. Do not mark those tasks complete from build success.

Sprint 3 continues the remaining eight funding pages. Preserve service references, stable route IDs, linked examples and fee distinctions. Do not reintroduce generic marketing fallbacks or replace supported content with invented scale or outcome claims.
