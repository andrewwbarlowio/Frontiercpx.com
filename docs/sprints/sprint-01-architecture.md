# Sprint 1 implementation and baseline

Baseline branch `build/site-refinements-v3`: `85fc02efbfa15830cd648facbc4e334c9eb547d4`, tree `56d349024c1fb70df12f8a6ca419a8ada0aeb806`.
Main: `e4a51cc2b800fb50b27fbffb736b836429997935`. Planning baseline `5321053c43bd9eb7ca239b848f66e768720f5a28` is retained in the sprint index, not substituted for the current starting head.
Baseline `node scripts/build.mjs` passed: 38 routes, 2,400 checked internal links and 304 checked assets. Existing source is a static renderer, no package installation or framework migration needed. Remote versions of changed source were fetched at the exact starting head; unrelated archived HTML/assets remain untouched in the Git tree.

## Page roles

| Route | Reader task | Primary action |
| --- | --- | --- |
| Home | Orient by objective | Funding goals; navigation exposes services |
| /services | Choose advisory support | Service discussion or Financial Modelling pilot |
| /solutions | Choose funding purpose | Existing goal and specialist routes |
| /services/financial-modelling | Scope model work | Contextual email |
| /solutions/business-funding | Explain cash use and repayment | Working capital, growth or refinance enquiry |
| /solutions/property-finance | Explain project stage and exit | Acquisition, development or refinance enquiry |
| /about-us | Understand the operating role | Approach |
| /our-approach | Canonical process destination | Discuss requirement |
| /our-expertise | Understand capability and evidence | Discuss scope |
| /funding-network | Understand provider types and relevant purposes | Linked funding routes |
| /global-presence | Understand proposed geography | Contact |
| /for-advisers | Agree authority and client contact | Adviser enquiry |

Supporting page rewrites and process consolidation remain Sprint 4. G05 preparation: the process should use one canonical five-stage data record (objective, scope, agreed information/commercial basis, provider assessment, full commitment); current four-step strips and the two detailed pages are not declared consolidated by this sprint.

## Route inventory

All 38 starting emitted routes retained. Add /services and /services/financial-modelling: 40 routes. Full generated inventory: `dist/route-inventory.json` (reproducible build output); baseline snapshot is in evidence/sprint-01/baseline-routes.json. No new redirects or changed URLs. Digital page display name is Digital Asset Business Funding; /sectors/digital-infrastructure retained.

## Content ownership

- `content/customer-journeys.json`: ten required editorial records. Explicit fit, purpose, structure, commitments, value, preparation, questions, enquiry headings and copy; primary CTA; purpose-specific CTA for each use; optional labelled example with assumptions, stages and downside question.
- `content/advisory-services.json`: seven required service records. Audience, trigger, scope, outputs, process, preparation, fees, boundaries, related funding, FAQs and enquiry action. This sprint emits only the Financial Modelling detail page. Other service menu items use anchors on /services until their pages arrive in Sprint 2.
- `scripts/validate-content.mjs`: build-time field and cross-reference validation. No missing-heading marketing fallback. `scripts/check-sprint-1.mjs` adds negative schema checks and pilot assertions.
- `scripts/services.mjs`: shared advisory rendering entry point and the full model pilot. Extend this into the seven-service template in Sprint 2; do not duplicate the page shell.
- `scripts/customer-site.mjs`: shell, navigation, funding template and contextual contact. `scripts/credibility.mjs`: provider-type links to funding purposes. `scripts/customer-content.mjs`: neutral uncertain-choice routing.

## Route classifications

Objectives describe the use of capital (cash cycle, growth, acquisition, property, ownership, complexity). Structures describe obligations (borrowing, receivables, equity, asset/project facilities). Sector pages describe operating contexts, not funding structures. Provider categories describe counterparties, not mutually exclusive products. The network cards now link these counterparty types to relevant funding-purpose pages. Technology purchase stays on equipment funding; technology-company capital has explicit venture/growth links. An uncertain guide choice offers comparison/contact, no arbitrary borrowing or venture selection.

## Contact context

External JS reads an allowlisted map embedded as JSON data, not executable inline script. Allowlisted topic, source route, goal, city and topic-specific stage may appear in the mailto subject/body. Unknown query values are discarded. Topic changes clear stage and goal. Browser back/pageshow restores URL context; no browser storage, analytics or network request saves it. Entered form fields are never copied automatically into an email link. All 17 solution/service topics plus adviser, uncertain and client-access assistance are valid choices.

Direct email is `enquiries@frontiercpx.com`. Forms remain client-side demonstrations with CSP `connect-src 'none'; form-action 'none'`. No email sent by tests. Advisory client fee and provider-paid funding are separate; provider costs may apply. Go-ahead precedes provider sharing.

## Navigation staging

Both main menus and the footer expose Advisory Services and Funding Solutions. Dropdowns are mutually exclusive, close outside/Escape, and retain focus; mobile menu provides focus containment, background inertness and Escape restoration. At widths <=1200 use the mobile menu to avoid crowding. Client Login is visible right on desktop and first on mobile; its temporary valid destination is contact assistance. The actual /client-login and /forgot-password interfaces remain Sprint 4 (G20/L01/L02). Replace that assistance URL then; no authentication is implied or implemented here.

## Reproduction and limits

`node scripts/build.mjs`; `node scripts/check-sprint-1.mjs`. Local responsive fixtures: `node scripts/qa-responsive.mjs`, then inspect /qa/320.html, /qa/390.html, /qa/768.html, /qa/1440.html. Fixtures are removed by the next build and are not published.
Browser checks use rendered iframe viewports and DOM geometry, not physical phones. Scrollbar consumes 15px; CSS frame widths are 320/390/768/1440. No horizontal overflow in any of the twelve pilot cases. Real-device and assistive-technology checks remain release work.
The local preview daemon adds trailing slashes and drops queries on that redirect; slash-form test URLs preserve context. Vercel uses clean URLs with trailingSlash=false. Deployment context verification is required separately; local rendering is not evidence of deployed routing.
