# Customer journey implementation

## Baseline and scope

Based on main `ea790258e07f1454c69e0be046605fafa7ddd174`, following the customer strategy and implementation plan of 10 November 2026. This is a branch preview, not a launch-ready claim that all partner services are available.

## Implemented

- Replaced the captured reference-page runtime with a dependency-free static renderer using the existing build and assets.
- Goal-led homepage and Solutions hub; white logo/hamburger against the dark blue header and gradient hero.
- Mobile navigation lists About us, Solutions accordion, How it works and contact; nested product/sector links preserve all ten reviewable categories.
- Ten distinct direct URLs and initial HTML, with customer-specific purpose, suitability, visible commitments, preparation, FAQs and a print-friendly decision view.
- Technology distinguishes adoption from company capital. Sustainability distinguishes operational investment from impact-led growth. Insurance and digital infrastructure explicitly state pending specialist scope.
- Reworked About us, How it works and Contact; no invented biographies, office network, press coverage, lender counts, results, rates or partner logos.
- Excluded all fictional directory/news/office records from published output. Unrelated retired detail URLs return 404 instead of misleading sales redirects.
- Added Vercel redirects for recognised old solution paths/title queries; local destination fallback selects a recognised mapping only.
- Accessible preview enquiry fields, existing solution context, adviser/not-sure choice, callback-only telephone requirement, validation and honest sample-only confirmation. No submission endpoint, persistence or analytics.
- Preview remains noindex. Print/preview handling never enables live enquiries.

## Verification

Baseline build passed with 114 routes and 9,884 local links. Revised build passes with 21 emitted routes (including 404 and local fallback routes), all ten solution records, 1,150 internal links and anchors and 137 asset references.

Browser review used the supported cloud browser against the local Sites preview. Desktop homepage/menu visually reviewed. Local-only iframe harnesses exercised all ten pages in 320, 390 and 768 CSS-pixel frames; usable widths after native scrollbars were 305, 375 and 753 pixels. No horizontal overflow was reported. These are responsive browser checks, not physical-device or full screen-reader certification.

Mobile menu opening, Solutions expansion, nested closed-state indicator, goal navigation, background inert state and form context were checked. Form tests used sample data: required-field validation focuses the name field; callback reveals/requires telephone; successful preview validation explicitly says nothing was sent or stored. Hero copy contrast, artwork blending and font-independent SVG arrows were corrected during review. Build checks confirm meaningful content without waiting for JavaScript and unique IDs on every page.

External browser-extension metadata errors were observed in the test environment; no site script exception was identified in those logs. Production redirect behaviour and the deployed branch still require their own smoke test after deployment.

## Remaining operating dependencies

- Andy/Roger: actual supported products, partner relationships, geography/entity/stage coverage, exclusions and verified capital bands if published.
- Actual role/remuneration wording and any appropriate specialist review.
- Real contact destination, enquiry owner/backup, receiving system, response hours and later secure information process.
- Approved company details, biographies and permissioned cases/partner references, where available.
- Final privacy/data-handling implementation, then actual receiving workflow and commercial stage tracking.

No backend or provider identity is fabricated to hide those dependencies. The form and specialist scope remain explicitly labelled until confirmed. Live conversion measurement, user interviews, actual provider introductions and funding outcomes have not been tested.

## Backlog status

B02/B07/B08/B09/B10/B11/B12/B13/B14/B15/B20/B21/B22/B24/B25: structural implementation in preview, with business validation and additional user/accessibility testing outstanding as applicable. B01/B03/B05/B06/B16 depend on business facts and proof. B04/B17/B27 require the actual operating systems. B18 has a print-friendly initial view; B19/B28/B29/B30 remain follow-on research/optimisation work. No claim that the entire operating programme is complete.

## Release

Review this branch preview before merging. Retain main as the rollback baseline. Recheck service scope, receiving workflow, genuine proof and production indexing before marketing acquisition traffic. Root deployment remains protected from unintended changes because this work only updates the feature branch.
