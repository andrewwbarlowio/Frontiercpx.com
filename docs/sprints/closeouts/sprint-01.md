# Sprint 1 closeout

**Sprint:** 1 Foundations and pilot pages  
**Engineering status:** In progress — implementation delivered; deployed G10 verification blocked  
**Owner review:** Pending  
**Prepared:** 10 November 2026  
**Branch:** build/site-refinements-v3  
**Starting commit:** 85fc02efbfa15830cd648facbc4e334c9eb547d4  
**Tested code commit:** c4ffe715058fddd5ea9a83f25eeba9c2aa915b22  
**Closeout documentation commit:** this documentation commit (its own history identifies the SHA); no self-referential value invented.  
**Preview:** https://frontiercpx-git-build-site-refinements-v3-andrewbarlowio.vercel.app  
**Deployment:** GitHub Vercel status success for tested code; https://vercel.com/andrewbarlowio/frontiercpx/5XgjhbG9HMmEUEBXXMAXJAQffDD1  
**Scope:** [Sprint 1 brief](../sprint-01-foundations-and-pilots.md)

## Outcome

Three implemented pilot journeys: Business Funding focuses on the trading cash cycle; Property Finance on project stages, equity and exit; Financial Modelling on paid advisory scope and client outputs. Both navigation routes are usable. All seven services have validated records; only the model detail page is emitted in this sprint. Current build emits 40 routes. No merge to main, authentication, form delivery or customer outreach.

## Development notes

See [architecture and baseline](../sprint-01-architecture.md) for source ownership, schema fields, route classifications, contact allowlists and reproduction. Content/schema/renderer/menu/contact changes are in the tested code commit. Screenshots and this closeout arrive in a documentation-only follow-up commit; the code tested has not changed.

| Area | Change | Maintenance |
| --- | --- | --- |
| content/customer-journeys.json | Ten explicit editorial records, contextual headings, use CTAs, pilot examples | Preserve anchor IDs and required fields |
| content/advisory-services.json | Seven service records and complete modelling scope | Expand remaining detailed copy in Sprint 2 |
| scripts/customer-site.mjs and services.mjs | Shared shell, menus, contact, sequences and advisory pilot | Extend template, preserve existing static build |
| scripts/validate-content.mjs and check-sprint-1.mjs | Required fields, references, negative tests and initial HTML | Missing content fails build |
| assets/customer-journey.js and decision-support.js | Multi-menu handling, neutral uncertain route and context | No storage, form network delivery or auth |
| scripts/customer-content.mjs and credibility.mjs | Neutral fallback and provider-to-purpose links | Full supporting-page work stays Sprint 4 |

## Task reconciliation

| Task | Status | Implementing commit | Acceptance evidence | Remaining action and owner |
| --- | --- | --- | --- | --- |
| G01 | Complete | `c4ffe715058fddd5ea9a83f25eeba9c2aa915b22` | Recorded exact baseline/main, passing 38-route build and rollback head; baseline route inventory retained. | None in Sprint 1. |
| G02 | Complete | `c4ffe715058fddd5ea9a83f25eeba9c2aa915b22` | Page roles and service/funding hierarchy documented; canonical page ownership preserved. | None in Sprint 1. |
| G03 | Complete | `c4ffe715058fddd5ea9a83f25eeba9c2aa915b22` | All ten editorial records required; four negative schema checks; renderer consumes explicit headings and CTAs. | None in Sprint 1. |
| G04 | Complete | `c4ffe715058fddd5ea9a83f25eeba9c2aa915b22` | Shared purpose links and optional example sequence; all twelve pilot/width combinations have zero horizontal overflow. | None in Sprint 1. |
| G06 | Complete | `c4ffe715058fddd5ea9a83f25eeba9c2aa915b22` | Neutral uncertain guide; technology company routes to venture/growth; provider categories link to funding purposes; digital name aligned. | None in Sprint 1. |
| G10 | In progress | `c4ffe715058fddd5ea9a83f25eeba9c2aa915b22` | Local allowlisted topic/stage/source/city, topic change, invalid query and back/forward pass. Protected deployed end-to-end navigation remains unverified. | Development: verify protected deployed stage/email journey when authenticated access is available. |
| G17 | Complete | `c4ffe715058fddd5ea9a83f25eeba9c2aa915b22` | Services/Funding desktop/mobile/footer; dropdown exclusivity and Escape/focus pass. Login assistance is valid temporary target pending Sprint 4 screens. | None in Sprint 1. |
| G18 | Complete | `c4ffe715058fddd5ea9a83f25eeba9c2aa915b22` | Seven service records validated; shared advisory renderer and complete Financial Modelling pilot. Other detail pages remain Sprint 2. | None in Sprint 1. |
| P03.1 | Complete | `c4ffe715058fddd5ea9a83f25eeba9c2aa915b22` | Working capital, growth and refinance cards each carry their own stage and contact action. | None in Sprint 1. |
| P03.2 | Complete | `c4ffe715058fddd5ea9a83f25eeba9c2aa915b22` | Cash-cycle structure and repayment/security headings replace shared marketing text. | None in Sprint 1. |
| P03.3 | Complete | `c4ffe715058fddd5ea9a83f25eeba9c2aa915b22` | Labelled supplier-to-customer cash-cycle sequence, downside question and first-call checklist; no funding bands invented. | None in Sprint 1. |
| P04.1 | Complete | `c4ffe715058fddd5ea9a83f25eeba9c2aa915b22` | Acquisition, development and refinance stage links carry source and stage into contact. | None in Sprint 1. |
| P04.2 | Complete | `c4ffe715058fddd5ea9a83f25eeba9c2aa915b22` | Labelled equity, staged release and exit sequence with monitoring, delay and contingency dependencies. | None in Sprint 1. |
| P04.3 | Complete | `c4ffe715058fddd5ea9a83f25eeba9c2aa915b22` | Project, equity, drawdown, programme and exit language; relevant conditions beside commitments. | None in Sprint 1. |
| A03.1 | Complete | `c4ffe715058fddd5ea9a83f25eeba9c2aa915b22` | Audience, trigger, scope, preparation and three FAQs; standalone service and funding distinction. | None in Sprint 1. |
| A03.2 | Complete | `c4ffe715058fddd5ea9a83f25eeba9c2aa915b22` | Model, scenario and gap outputs; labelled delayed-customer-payment illustration. | None in Sprint 1. |
| A03.3 | Complete | `c4ffe715058fddd5ea9a83f25eeba9c2aa915b22` | Agreed fees/scope, three-step engagement, four relevant funding links and contextual email action. | None in Sprint 1. |

## Verification

| Check | Environment | Actual result | Evidence |
| --- | --- | --- | --- |
| Baseline build | Local Node 24 | Pass, 38 routes, 2400 links, 304 assets | Baseline recorded in architecture; [baseline routes](../evidence/sprint-01/baseline-routes.json) |
| Implemented build | Local Node 24, tested code | Pass, 40 routes, 3373 links, 318 assets; IDs, anchors, initial content and scripts checked | [Build output](../evidence/sprint-01/build.txt), [routes](../evidence/sprint-01/routes.json) |
| Content checks | Local Node 24, tested code | Pass, 7 service records and 4 negative checks | [Content output](../evidence/sprint-01/content-checks.txt) |
| Responsive | Cloud Chromium, iframe CSS widths 320/390/768/1440 | Twelve cases: scroll width equals client width | [Geometry](../evidence/sprint-01/responsive.json); screenshots below |
| Menu/keyboard | Cloud Chromium local preview | Pass: two dropdowns mutually exclusive; Escape closes and restores focus; mobile background inert and Escape returns to toggle | Manual observed states |
| Context | Local preview, slash-form URL preserving query | Topic, property development stage, source and London context shown; switching topic clears stage; invalid values discarded; back/forward restores URL context | Observed context and mailto href, no email sent |
| Forms | Local preview | Required-field errors shown; valid synthetic input gives explicit nothing-sent/stored status; CSP blocks network/form actions | Source inspection plus observed validation states; no real customer data |
| Uncertain guide | Local preview | Offers comparison/contact, no product selection | Observed guide result |
| Deployment | GitHub Vercel commit status | Deployment completed successfully | Exact tested code SHA and Vercel dashboard link above |
| Deployed pilot journey | Protected branch preview | Blocked: browser redirected to Vercel sign-in | G10 remains In progress; not inferred from deployment status |

### Screenshots

| Pilot | Desktop | Mobile |
| --- | --- | --- |
| Property Finance | [Desktop](../evidence/sprint-01/property-desktop.webp) | [390px](../evidence/sprint-01/property-mobile.webp) |
| Business Funding | [Desktop](../evidence/sprint-01/business-desktop.webp) | [390px](../evidence/sprint-01/business-mobile.webp) |
| Financial Modelling | [Desktop](../evidence/sprint-01/model-desktop.webp) | [390px](../evidence/sprint-01/model-mobile.webp) |

Screenshots show local code, not a verified protected deployment. Physical phone, screen-reader and full release regression remain Sprint 5. Width tests use real rendering in iframes; they are not device-emulation claims.

## Decisions and deviations

| Decision | Reason | Owner/date | Follow-up |
| --- | --- | --- | --- |
| Emit lightweight Services overview now | Required live navigation destination for the model pilot | Implementation sequencing, 10 Nov | Full overview and remaining service pages stay Sprint 2 |
| Client Login uses access assistance until Sprint 4 | Avoid a broken URL before G20/L01/L02 screens exist | Implementation sequencing, 10 Nov | Replace link with /client-login when Sprint 4 lands; no authentication added |
| Populate headings across ten records | G03 disallows generic rendering fallback | Existing Sprint 1 scope | Full solution-specific illustrations and copy rollout stays Sprint 3 |
| Local context testing uses slash-form URLs | Preview daemon drops query on directory redirect; Vercel clean-URL configuration differs | Observed environment limitation | G10 requires real deployed click-through verification |

## Defects and deferred work

| Item | Impact | Disposition | Owner |
| --- | --- | --- | --- |
| Protected preview access | Final deployed context/navigation cannot be tested in this session | G10 stays In progress; sprint not closed | Development: resume with authenticated preview access; no protection changes |
| Local daemon query drop | Local click-through loses query during slash redirect | Direct preserved-query URL tested; not evidence of production defect or success | Development: verify Vercel routing |
| Other advisory detail pages | Seven records exist; six details not built yet | Planned Sprint 2 | Development |
| Login/recovery screens and process consolidation | Not built/consolidated here | Planned Sprint 4 | Development |
| Forms/auth/document operations | No live transmission or authentication | Deferred by Andy | Later separately commissioned |

## Checkpoint and owner review

Three pilot pages, menus, contextual contact and local verification are ready for Andy to review. Review status is Pending, not Accepted. The deployed environment requires sign-in in this browser. No owner review or approval to merge is invented.

## Handover and recovery

Sprint 2 can independently expand service content using the existing records/template, but must not assume G10 has deployed acceptance. Preserve source IDs and allowlists. Update staged menu targets when detail pages become available.
Rollback baseline is 85fc02efbfa15830cd648facbc4e334c9eb547d4; production/main remains e4a51cc2b800fb50b27fbffb736b836429997935. Revert the implementation commit through the repository workflow if the branch preview needs restoring. Do not force-reset history or change production.

## Gate conclusion

- [x] All 17 tasks reconciled with implementation and evidence or a named outstanding check.
- [ ] Required deployed G10 verification complete.
- [x] Architecture, current task register and evidence updated.
- [x] Owner review recorded as Pending.
- [x] Handover and rollback recorded.

**Result:** Not closed. Sixteen tasks Complete; G10 In progress. Implementation is delivered and the deployment status is green, but the protected deployed journey must be verified before Sprint 1 is marked Complete.
