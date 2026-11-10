# Sprint 3 closeout

**Sprint:** 3 Funding Solutions  
**Engineering status:** Complete — implementation and local acceptance  
**Owner review:** Pending  
**Prepared:** 10 November 2026  
**Branch:** build/site-refinements-v3  
**Starting commit:** 6b96e087262df180a4981c86e543405f406adba4  
**Tested code commit:** 3e7db9bdb7cc172875dfb950996517c8afe5d9fd  
**Closeout documentation commit:** this follow-up commit, identifiable in file history; no self-referential SHA.  
**Preview:** https://frontiercpx-git-build-site-refinements-v3-andrewbarlowio.vercel.app  
**Deployment status:** successful for tested code; https://vercel.com/andrewbarlowio/frontiercpx/9U7XyMzBaG7QWyMwFBNeqkrGyXdM  
**Scope:** [Sprint 3 brief](../sprint-03-funding-solutions.md)

## Outcome

Eight remaining funding pages have their own commercial language and decision support. All ten solutions now have a labelled illustrative sequence and client-brief structure. Early purpose choices precede fit on five pages. Complex and Digital have topic-specific optional fields in the disconnected preview. Existing routes, ten funding pages, seven service pages and all thirty service/funding mappings remain intact. Forty-six total routes.

All 25 assigned implementation tasks are Complete with local evidence. No site development remains for this sprint. The existing protected Vercel browser-verification exception stays with G10/G15; it is not reported as passed. No new product, jurisdiction, mandate, client result or provider capacity is invented. Main unchanged; no live enquiry or authentication activated.

## Changes and development notes

See [architecture](../sprint-03-architecture.md) for detailed content roles, schema, field handling and reproduction.

| Source | Change | Maintenance |
| --- | --- | --- |
| content/customer-journeys.json | Eight contextual rewrites, ten labelled examples/brief structures and specialist enquiry definitions | Single content source for pages and related brief data |
| scripts/customer-site.mjs | Shared purposeSection, early-choice placement, output definition list and optional preview fields | Preserve anchors; no repeated choice section |
| assets/decision-support.js | Topic-scoped field visibility/clearing and context-restoration sync; static email prompts | Never auto-copy preview input into email |
| assets/customer-journey.css | Responsive illustrative-output layout | Two columns on desktop, one on narrow screens |
| scripts/validate-content.mjs | Require ten examples, structured outputs and allowlisted fields | Missing copy/aid fails build |
| scripts/check-sprint-3.mjs | Funding, anchor, scope, early-choice, repetition and negative cases | Run with existing sprint regressions |
| scripts/qa-funding.mjs | Reproducible local-only viewport fixtures | Removed from dist by next build |

## Task reconciliation

| Task | Status | Implementing commit | Acceptance evidence | Remaining action |
| --- | --- | --- | --- | --- |
| G07 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Ten labelled sequences and four-field illustrative brief structures; preserved property/working-capital pilots and advisory outputs; assumptions and limitations explicit. | None within Sprint 3 implementation. |
| P05.1 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Opening choices distinguish company investment, shareholder liquidity and management/ownership transactions. | None within Sprint 3 implementation. |
| P05.2 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Ownership/governance guide covers proceeds, consent rights, incentives and later liquidity; no valuations or returns. | None within Sprint 3 implementation. |
| P05.3 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Shareholder-decision CTA and explicit scoped intermediary/advisory role before provider approach. | None within Sprint 3 implementation. |
| P06.1 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Milestone headline retained; round, runway, evidence and investor-fit language throughout. | None within Sprint 3 implementation. |
| P06.2 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Validation, round preparation and scaling separated; round-readiness sequence and checklist. | None within Sprint 3 implementation. |
| P06.3 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Investment-summary structure covers evidence, milestone, runway and investor questions. No mandate evidence supplied, so none claimed. | None within Sprint 3 implementation. |
| P07.1 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Requirement and real deadline lead the opening; triage explained through information, viability and decisions. | None within Sprint 3 implementation. |
| P07.2 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Optional deadline field on disconnected preview; relevant email has a static deadline/event prompt. | None within Sprint 3 implementation. |
| P07.3 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Funding versus restructuring/insolvency/legal boundaries and specialist signposts visible. | None within Sprint 3 implementation. |
| P08.1 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Scientific milestone headline retained with development, commercial-scale and equipment choices before fit. | None within Sprint 3 implementation. |
| P08.2 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Non-confidential milestone brief covers evidence, budget, dependencies and runway. | None within Sprint 3 implementation. |
| P08.3 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | No new subsector coverage claimed; case-specific expertise required; lab equipment links directly to equipment funding. | None within Sprint 3 implementation. |
| P09.1 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Operating-business investment is primary; company-fundraising card links straight to Venture/Growth. | None within Sprint 3 implementation. |
| P09.2 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Illustrative expenditure outline and order/delivery/commissioning/productive-use sequence. | None within Sprint 3 implementation. |
| P09.3 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Purchase, installation, adoption and capability language replaces generic ambition/progress. | None within Sprint 3 implementation. |
| P10.1 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Operational investment and impact-led business growth separated in opening choices. | None within Sprint 3 implementation. |
| P10.2 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Labelled commercial/baseline/outcome/measurement example; no realised savings or outcome claimed. | None within Sprint 3 implementation. |
| P10.3 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Specific investment and evidence language; grants explicitly separate and unpromised. | None within Sprint 3 implementation. |
| P11.1 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Brokers, MGAs, insurtechs and risk carriers retained; catalogue not reopened. | None within Sprint 3 implementation. |
| P11.2 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Entity-specific preparation and illustrative broker/MGA, insurtech and risk-carrier discussion stages. | None within Sprint 3 implementation. |
| P11.3 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Capital distinguished from cover, claims and underwriting capacity; specialist capital CTA. | None within Sprint 3 implementation. |
| P12.1 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Digital Asset Business Funding title retained on the existing /sectors/digital-infrastructure URL; physical infrastructure excluded. | None within Sprint 3 implementation. |
| P12.2 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Operating-company capital separated from tokens, retail trading and physical infrastructure. | None within Sprint 3 implementation. |
| P12.3 | Complete | `3e7db9bdb7cc172875dfb950996517c8afe5d9fd` | Optional activity/jurisdiction preview fields and static email prompt; no wallet/account/identity request. | None within Sprint 3 implementation. |

## Verification

| Check | Environment | Actual result | Evidence |
| --- | --- | --- | --- |
| Build/site checks | Local Node 24, tested code | Pass: 46 routes, 3963 links, 360 assets; IDs, anchors, static content, syntax and disconnected forms checked | [Build](../evidence/sprint-03/build.txt), [routes](../evidence/sprint-03/routes.json) |
| Sprint 1 regression | Local Node, tested code | Pass: required editorial fields, four negative cases, three earlier pilots | [Output](../evidence/sprint-03/sprint-1-regression.txt) |
| Sprint 2 regression | Local Node, tested code | Pass: eight service routes, seven unique service headlines/examples and thirty bidirectional mappings | [Output](../evidence/sprint-03/sprint-2-regression.txt) |
| Sprint 3 checks | Local Node, tested code | Pass: ten decision aids and brief structures, thirty stable anchors, five early-choice pages, four missing-content rejections; specialist/repetition checks pass | [Output](../evidence/sprint-03/funding-checks.txt) |
| Responsive | Cloud Chromium/local iframe fixtures | All 40 cases pass at CSS widths 320/390/768/1440; no horizontal document overflow | [Geometry](../evidence/sprint-03/responsive.json) |
| Optional fields | Cloud Chromium/local pages | Complex deadline visible; switching to Digital hides deadline and shows activity/jurisdiction; switching away clears value and disables input | Observed synthetic test: activity value empty, disabled true |
| Email/privacy boundary | Cloud Chromium/local pages | Synthetic field contents absent from mailto href; form delivery remains disconnected | Source and observed link inspection; no email sent |
| Routing | Cloud Chromium/local pages | Technology-company card reaches Venture; lab-equipment card reaches Technology/Equipment | Observed page headings after clicks |
| Example reading | Cloud Chromium/local desktop and 390px frame | Expenditure breakdown and mobile investment-summary checklist readable; labels/limitations visible | Screenshots below |
| Claims/scope/repetition | Content and emitted HTML | Retired headings absent; no invented funding rates, grants, outcomes or mandate coverage; specialist boundaries retained | Automated assertions and editorial review |
| Deployment | GitHub Vercel commit status | Completed successfully | Exact tested code and dashboard link above |
| Protected deployed UI | Existing access limitation | Not tested in this sprint; no substituted local/deployment success claim | Still outstanding under G10/G15 |

### Screenshots

- [Ownership page desktop](../evidence/sprint-03/ownership-desktop.webp)
- [Equipment output structure](../evidence/sprint-03/equipment-output.webp)
- [Venture mobile hero](../evidence/sprint-03/venture-mobile.webp)
- [Venture mobile brief](../evidence/sprint-03/venture-output-mobile.webp)

Evidence shows local rendered code. CSS-width tests use iframes with scrollbars consuming 15px; physical device emulation and assistive-technology success are not claimed. Screenshots contain no entered customer data. Documentation/screenshots are committed after the tested code without changing runtime source.

## Decisions and deviations

| Decision | Reason and basis | Disposition |
| --- | --- | --- |
| Keep both Sprint 1 pilots and extend their proof structures | G07 belongs to Sprint 3 across all ten solutions | Core pilot text/routes retained; no double-counting earlier page tasks |
| Place five route-choice sections before fit | Sprint 3 requires early audience/purpose distinctions | Same component, original anchors; no duplicated content |
| Leave optional fields inside disconnected forms | User deferred form delivery | Static email prompts useful now; no form transmission or automatic copying |
| No new provider mandates or life-sciences subsectors listed | No evidence supplied; do not reopen catalogue | Case-specific assessment instead of unsupported coverage claims |
| Continue local work with inherited protected-preview exception | User authorised Sprint 3 after the known limitation | G10/G15 remain open, no deployment UI pass asserted |

## Known limits and deferred work

| Item | Impact/disposition | Owner and next action |
| --- | --- | --- |
| Protected deployed UI access | Existing exception, not a missing development feature | Development: complete G10/G15 with authenticated access |
| Physical device/screen reader | Not tested in this browser environment | G15 release verification |
| Supporting pages and full decision briefs | Source data updated, but dedicated brief/guide/comparison work remains Sprint 4 | Development: use new data and keep contextual links |
| Forms, auth and document operations | Still disconnected/deferred | Later separately commissioned operations |

## Checkpoint and review

All ten funding routes form a consistent catalogue with distinct language, purpose paths and decision aids. Ready for Andy's review; status Pending, not Accepted. Sprint 3 changes were not merged to main. No approval is inferred from deployment success.

## Handover and recovery

Sprint 4 should preserve example/output fields, early-choice anchors, specialist limits and the single service/funding mapping source. Use the updated preparation/mechanics when improving briefs; keep forms inactive and optional-field behaviour intact.

Rollback baseline: 6b96e087262df180a4981c86e543405f406adba4. Revert the Sprint 3 implementation through the usual repository workflow if necessary, without force-resetting history or changing production. Main remains e4a51cc2b800fb50b27fbffb736b836429997935. Closeout follow-up is documentation/evidence only.

## Gate conclusion

- [x] All 25 tasks reconciled with implementation commit and evidence.
- [x] Local content, scope, link, responsive and interaction acceptance passes.
- [x] Protected-deployment verification exception retained under G10/G15.
- [x] Architecture, task register, evidence and handover updated.
- [x] Owner review Pending; no production approval assumed.

**Result:** Pass for Sprint 3 implementation and local acceptance, with the existing deployed-verification exception. This does not close G10/G15 or authorise production release.
