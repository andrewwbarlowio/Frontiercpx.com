# Sprint 2 closeout

**Sprint:** 2 Advisory Services  
**Engineering status:** Complete — implementation and local acceptance  
**Owner review:** Pending  
**Prepared:** 10 November 2026  
**Branch:** build/site-refinements-v3  
**Starting commit:** 8803abf6a9f3cdf883cb82663b6d9fad30d768ea  
**Tested code commit:** 14f5d7a71bbf631fab1a844804b4b00a6aec74b4  
**Closeout documentation commit:** this follow-up commit, identifiable in file history; no self-referential SHA.  
**Preview:** https://frontiercpx-git-build-site-refinements-v3-andrewbarlowio.vercel.app/services  
**Deployment status:** success for the tested code; https://vercel.com/andrewbarlowio/frontiercpx/5ronqvWLh3LaRBCYggeDiSUmP19U  
**Scope:** [Sprint 2 brief](../sprint-02-advisory-services.md)

## Outcome

The complete Services overview and all seven service detail pages are implemented. Six new routes extend the Sprint 1 pilot, bringing the build to 46 routes. Each service has its own audience, scope, named outputs, three FAQs, engagement process, preparation, example and enquiry language. Thirty bidirectional service/funding relationships connect the two routes. Financial Modelling A03 remains delivered under Sprint 1; it is retained through the common template and is not counted again.

All 22 assigned implementation tasks are Complete with local acceptance evidence. The protected-deployment browser verification limitation is unchanged and remains tracked under G10 and final G15 verification; it is not silently treated as passed. Andy explicitly authorised moving to Sprint 2 after the Sprint 1 limitation was explained. No merge, production approval, live form integration or customer outreach occurred.

## Changes and development notes

See [architecture](../sprint-02-architecture.md) for schema, routes, source ownership, reproduction and handover.

| Source | What changed | Maintenance |
| --- | --- | --- |
| content/advisory-services.json | Seven complete, distinct service records; explicit example and editorial fields | Edit copy here, not in the renderer |
| scripts/services.mjs | One template emits all seven details and a complete overview | Existing navy layout and shared contact preserved |
| scripts/customer-site.mjs | Direct service menu targets, neutral advisory topic and derived reverse funding links | Single service/funding mapping source |
| scripts/validate-content.mjs | Required headings, output explanations, three FAQs and structured example | Missing content fails build |
| scripts/check.mjs | Syntax coverage includes advisory renderer and validator | Existing site-wide link/asset/anchor checks retained |
| scripts/check-sprint-2.mjs | Eight-route, content, fee, bidirectional and negative checks | Run after build |
| scripts/qa-services.mjs | Reproducible local-only responsive fixtures | Build removes QA fixtures before publication |

## Task reconciliation

| Task | Status | Implementing commit | Acceptance evidence | Remaining action |
| --- | --- | --- | --- | --- |
| G19 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | 30 service/funding mappings checked both ways; seven service-specific email topics verified locally; navigation points directly to service pages. | None within Sprint 2 implementation. |
| A00.1 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | Overview links seven distinct service situations and named outputs. | None within Sprint 2 implementation. |
| A00.2 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | Standalone paid preparation explicitly independent of a funding introduction; fee distinction stated. | None within Sprint 2 implementation. |
| A00.3 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | Overview links all service pages, relevant example, Funding Solutions and Our Approach; one enquiry section with neutral advisory context. | None within Sprint 2 implementation. |
| A01.1 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | /services/capital-strategy: audience, trigger, scope, preparation and three contextual FAQs in initial HTML. | None within Sprint 2 implementation. |
| A01.2 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | Funding roadmap, options appraisal and information requirements; labelled acquisition-options example. | None within Sprint 2 implementation. |
| A01.3 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | Agreed engagement/fee wording, specific process, funding links and contextual email; no guarantee of funding, valuation or completion. | None within Sprint 2 implementation. |
| A02.1 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | /services/funding-readiness: audience, trigger, scope, preparation and three contextual FAQs in initial HTML. | None within Sprint 2 implementation. |
| A02.2 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | Readiness review, action list and application/investor pack; labelled evidence-gap checklist. | None within Sprint 2 implementation. |
| A02.3 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | Agreed engagement/fee wording, specific process, funding links and contextual email; no guarantee of funding, valuation or completion. | None within Sprint 2 implementation. |
| A04.1 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | /services/debt-advisory: audience, trigger, scope, preparation and three contextual FAQs in initial HTML. | None within Sprint 2 implementation. |
| A04.2 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | Funding brief, lender approach plan and offer comparison; labelled offer-comparison framework without invented offers. | None within Sprint 2 implementation. |
| A04.3 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | Agreed engagement/fee wording, specific process, funding links and contextual email; no guarantee of funding, valuation or completion. | None within Sprint 2 implementation. |
| A05.1 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | /services/equity-advisory: audience, trigger, scope, preparation and three contextual FAQs in initial HTML. | None within Sprint 2 implementation. |
| A05.2 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | Round strategy, investor materials and ownership scenarios; labelled valuation/dilution discussion framework. | None within Sprint 2 implementation. |
| A05.3 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | Agreed engagement/fee wording, specific process, funding links and contextual email; no guarantee of funding, valuation or completion. | None within Sprint 2 implementation. |
| A06.1 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | /services/transaction-support: audience, trigger, scope, preparation and three contextual FAQs in initial HTML. | None within Sprint 2 implementation. |
| A06.2 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | Issues log, diligence tracker and timetable; labelled request-to-owned-action example. | None within Sprint 2 implementation. |
| A06.3 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | Agreed engagement/fee wording, specific process, funding links and contextual email; no guarantee of funding, valuation or completion. | None within Sprint 2 implementation. |
| A07.1 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | /services/ongoing-advisory: audience, trigger, scope, preparation and three contextual FAQs in initial HTML. | None within Sprint 2 implementation. |
| A07.2 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | Periodic capital review, updated forecasts and prioritised actions; labelled refinancing-review example. | None within Sprint 2 implementation. |
| A07.3 | Complete | `14f5d7a71bbf631fab1a844804b4b00a6aec74b4` | Agreed engagement/fee wording, specific process, funding links and contextual email; no guarantee of funding, valuation or completion. | None within Sprint 2 implementation. |

## Verification

| Check | Environment/code | Result | Evidence |
| --- | --- | --- | --- |
| Build/site checks | Local Node 24, tested code | Pass: 46 routes, 3962 links, 360 assets; IDs, anchors, initial content, scripts and disconnected forms checked | [Build](../evidence/sprint-02/build.txt), [routes](../evidence/sprint-02/routes.json) |
| Sprint 1 regression | Local Node, tested code | Pass: required fields, 4 negative cases, three pilots, 7 service records | [Regression output](../evidence/sprint-02/sprint-1-regression.txt) |
| Sprint 2 checks | Local Node, tested code | Pass: 8 service routes, 7 distinct headlines/examples, 30 bidirectional mappings, 4 missing-content rejections | [Service checks](../evidence/sprint-02/services-checks.txt) |
| Responsive layout | Cloud Chromium/local fixtures | All 32 cases pass at CSS frame widths 320/390/768/1440; no horizontal overflow | [Geometry](../evidence/sprint-02/responsive.json) |
| Service enquiry context | Cloud Chromium/local pages | Seven service topics correctly selected; mailto subject/body include service and source | [Observed context](../evidence/sprint-02/service-context.json) |
| Cross-journey | Cloud Chromium/local pages | Overview -> Capital Strategy -> Business Funding -> Capital Strategy works | Manual observed navigation |
| Keyboard | Cloud Chromium/local pages | FAQ activated by Enter; mobile Services menu expands by keyboard; Escape closes menu | Manual observed states |
| Copy/scope | All seven service records and generated pages | Correct outputs, labelled assumptions, preparation, fees and boundaries; examples contain no fabricated client results | Content checks and editorial review |
| Deployment | GitHub Vercel status at tested code | Completed successfully | Exact SHA/dashboard link above |
| Protected deployed UI | Existing restriction | Not tested; no new claim of authenticated access | Inherited G10 and release G15 remain outstanding |

### Screenshots

- [Overview desktop](../evidence/sprint-02/overview-desktop.webp)
- [Overview mobile](../evidence/sprint-02/overview-mobile.webp)
- [Transaction example](../evidence/sprint-02/transaction-example.webp)

Screenshots are local rendered code. They are not screenshots of a verified protected deployment. Iframe tests represent browser layout at stated CSS widths; scrollbars consume 15px. No physical-device or screen-reader pass is claimed. No actual email was sent, and no entered form data or credentials appear in evidence.

## Decisions and deviations

| Decision | Reason | Basis | Disposition |
| --- | --- | --- | --- |
| Complete local Sprint 2 scope while G10 deployed check remains open | User authorised moving to Sprint 2 after the limitation was explained | Andy, 10 Nov 2026 | G10 not marked complete; final deployed regression remains G15 |
| Refactor A03 into shared renderer | Keep all seven service pages maintainable without duplicating the tested pilot | Sprint 2 template scope | A03 content retained and regression checked; not recounted |
| Use neutral advisory topic on overview | Visitors have not necessarily chosen a service | A00/G19 | Individual services still carry their own topic |
| No additional business scope, partner or capacity claims | Existing seven-service direction is sufficient for the pages | Confirmed decisions | Delivery responsibilities agreed per engagement |

## Known limits and deferred work

| Item | Status and impact | Owner/next action |
| --- | --- | --- |
| Protected Vercel UI | Existing access limitation; deployed end-to-end navigation not asserted | Development: resume G10/G15 verification with authenticated access |
| Physical device and assistive technology | Not tested in this environment | Release verification G15 |
| Remaining funding-page rewrites | Service links now exist, but Sprint 3 copy/examples remain planned | Development: Sprint 3 |
| Supporting pages, process consolidation and login screens | Still allocated to Sprint 4 | Development: preserve route and service context |
| Forms/auth/document operations | Disconnected/deferred as agreed | Later separate operations |

## Checkpoint and review

Overview plus seven services, examples and service/funding journey are ready for Andy's review. Status Pending, not Accepted. Main remains unchanged. Deployment success is recorded separately from unavailable protected browser verification.

## Handover and recovery

Sprint 3 should use the existing funding template and extend page-specific copy/examples, keeping the derived service links. Do not change service URLs, heading fields, fee distinction or contact allowlists without updating checks. Full supporting-page rewrites remain Sprint 4.

Last good branch baseline: 8803abf6a9f3cdf883cb82663b6d9fad30d768ea. If needed, revert the Sprint 2 implementation through the normal repository workflow; do not force-reset or merge production. Main remains e4a51cc2b800fb50b27fbffb736b836429997935. Documentation-only follow-up changes do not alter tested runtime code.

## Gate conclusion

- [x] All 22 assigned tasks have implementing commit and evidence.
- [x] Local scope/content, route, responsive and interaction acceptance passed.
- [x] Inherited protected-deployment verification exception explicitly retained under G10/G15; no claim it passed.
- [x] Master register, architecture, evidence and handover updated.
- [x] Owner review accurately Pending; no release approval assumed.

**Result:** Pass for Sprint 2 implementation and local acceptance, with the recorded inherited deployed-verification exception. This does not close G10, G15 or authorise production release.
