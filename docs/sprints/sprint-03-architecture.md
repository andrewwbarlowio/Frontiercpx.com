# Sprint 3 Funding Solutions implementation

Starting branch `build/site-refinements-v3`, head `6b96e087262df180a4981c86e543405f406adba4`. Main unchanged at `e4a51cc2b800fb50b27fbffb736b836429997935`. Existing static renderer, navy brand and approved imagery retained. No new product, jurisdiction or provider coverage is inferred.

## Content and page roles

`content/customer-journeys.json` remains the single ten-solution editorial source. The eight Sprint 3 pages have distinct opening, purpose actions, preparation, Frontier-role explanation and enquiry copy. The two earlier funding pilots retain their core copy and sequences, gaining structured client-brief examples as part of G07.

- Growth/Ownership: proceeds into the company versus shareholder liquidity versus a management/ownership transaction. Governance discussion includes board/consent rights and future liquidity, without valuations or returns.
- Venture: validation, round preparation and commercial scale; costed milestone, evidence, runway, round status and investor mandate. No investor coverage is claimed.
- Complex: requirement and actual deadline first, then information, viability and stakeholder dependencies. Funding introductions are distinct from restructuring, insolvency and legal work.
- Life Sciences: scientific milestone retained; discovery/development, commercial scale and laboratory-equipment paths. No new blanket subsector coverage. Lab equipment links directly to the equipment page.
- Technology/Equipment: operating-business investment is primary. Purchase, installation and adoption are separated; company fundraising links directly to Venture/Growth instead of going through equipment enquiry.
- Sustainability/Impact: operational investment separated from impact-led growth; commercial case, baseline and measurement plan. No realised savings or grant availability asserted.
- Insurance: existing brokers, MGAs, insurtechs and risk carriers retained. Entity-specific preparation and capital-versus-policy/claims/capacity boundaries; case-specific specialist assessment rather than reopening the catalogue.
- Digital Asset Business Funding: retained /sectors/digital-infrastructure URL and legacy crypto slug. Operating blockchain/digital-asset company capital, excluding retail tokens/trading and physical data-centre, telecoms or cloud infrastructure. No account connection or identity upload.

## Shared rendering and proof model

`purposeSection(x)` is extracted in `scripts/customer-site.mjs`. `openingRoutes` puts purpose choices before fit copy on the five pages where an early distinction matters. Existing purpose anchor IDs remain unchanged. The same component renders both early and regular positions, preventing duplicated IDs/content.

Every solution requires `example` with title, explicit illustrative assumptions, three sequence steps, caveats/question and `output` (title plus four labelled discussion fields). The output is a semantic definition list with two desktop columns and a single narrow-screen column. It is labelled as an illustrative structure for an agreed engagement, not a client result. G07 thus covers the property summary, working-capital outline, round checklist and other contextual briefs. The seven separately scoped advisory output descriptions from Sprint 2 remain linked and unchanged.

## Optional enquiry fields

`enquiryFields` is an allowlisted per-solution schema. Complex has optional deadline (date); Digital has optional activity/jurisdiction (text). Fields render with descriptive hints on shared forms, are shown/enabled only for the selected topic, and are hidden/disabled/cleared on a topic change. A context-restoration event updates visibility when URL/back context is reapplied.

All forms remain disconnected. Optional text is not automatically inserted into email links. Relevant email bodies contain static prompts for deadline/event or activity/jurisdiction so direct email remains useful. No preview-entered values, credentials, documents or financial records are transmitted, persisted or included in analytics. Tests use synthetic text only.

## Validation and regression

`validate-content.mjs` requires ten labelled examples, three steps, four output fields, explicit early-choice flags and allowlisted enquiry field definitions. Missing decision aids fail the build. `check-sprint-3.mjs` checks ten decision aids/brief structures, all 30 purpose anchors, early-choice order, specialist boundaries, routes and absence of the retired generic headings. Four negative cases reject incomplete records. All 30 service/funding mappings still pass Sprint 2 checks.

Reproduce with:

- `node scripts/build.mjs`
- `node scripts/check-sprint-1.mjs`
- `node scripts/check-sprint-2.mjs`
- `node scripts/check-sprint-3.mjs`

Local-only browser fixtures: `node scripts/qa-funding.mjs` then /qa/funding-320.html, /qa/funding-390.html, /qa/funding-768.html and /qa/funding-1440.html. Next build removes fixtures before deployment.

Forty rendered iframe-width cases passed with document scroll width equal to client width. CSS widths are 320/390/768/1440; scrollbar consumes 15px. Browser interactions verified scoped fields, clearing/disabled state, no copying of synthetic values into mailto, equipment/company-route destinations and mobile output reading.

## Remaining release verification

The existing protected Vercel browser-access limit remains under G10/G15. Local checks and successful deployment are not substituted for deployed end-to-end verification. No physical device/screen-reader pass, live enquiry delivery, authentication or production approval is claimed. Sprints 1–2 implemented journeys remain intact.

Sprint 4 owns supporting-page consolidation, full guide/comparison/brief behaviour, utility routes and login/recovery screens. Preserve the new editorial/example schema, specialist limits, service links and optional-field behaviour when changing those pages.
