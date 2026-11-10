# Sprint 4 closeout

**Sprint:** 4 Supporting journeys and client login  
**Engineering status:** Implementation delivered; In progress for named release checks  
**Owner review:** Pending  
**Prepared:** 10 November 2026  
**Branch:** build/site-refinements-v3  
**Starting commit:** 955b49b60cc357c3782481109cf74118ad293fc2  
**Tested code commit:** d3975ff565e593c24a327c9c7f4c3c40990bd759  
**Closeout documentation commit:** this follow-up, identifiable in file history; no self-referential SHA  
**Preview:** https://frontiercpx-git-build-site-refinements-v3-andrewbarlowio.vercel.app  
**Deployment:** successful for tested code; https://vercel.com/andrewbarlowio/frontiercpx/2chTpgad5Hx9ANq4u1Uz6kB5dMAV  
**Scope:** [Sprint 4 brief](../sprint-04-supporting-journeys.md)

## Outcome

All planned website development is implemented: refreshed supporting pages, one canonical five-stage process, claims cleanup, proposed-location context, mobile comparison cards, a complete guide, ten write-in/print briefs, aligned contact/information pages and inactive account screens. Both new account routes bring emitted documents to 48, including redirect fallbacks. No merge to main, real authentication, form/recovery delivery or document-platform activation.

Fifty-eight tasks have complete local acceptance evidence. G12 and U01–U06 remain In progress because acceptance explicitly includes actual deployed response/status checks, and U02 also requires verified company statutory particulars. These are named checks, not undisclosed missing development. Deployment success and local client redirects are not used as proof of Vercel headers, true 404 or full launch readiness.

## Changes and development notes

See [architecture](../sprint-04-architecture.md) for source ownership, single process, guide/history, print design, account behaviour, source review and reproduction.

| Area | Source | Result |
| --- | --- | --- |
| Process | scripts/process.mjs, credibility.mjs, customer-site.mjs | One stage record set, canonical Approach and compact strips |
| Supporting content | customer-content.mjs and credibility.mjs | Home/overview/About/advisers/expertise/network/presence/comparison/guide/briefs rewritten |
| Information/accounts | information.mjs, customer-journey.js | Contact/privacy/company wording; local login/recovery controls without availability notice or false account results |
| Routing | vercel.json and static fallback documents | One-hop process rule, existing slugs, ten title rules and neutral unknown fallback |
| Styling | decision-support.css | Narrow-screen cards, account controls and two-page A4 brief styling |
| Claims/locations | content/locations.json, docs/claims-and-scope-register.json | Five proposed addresses, 16 traceability entries, unverified scale metrics omitted |
| Checks | check-sprint-4.mjs, qa-supporting.mjs, verify-print-briefs.py | Reproducible build/content, viewport and print QA |

## Task reconciliation

| Task | Status | Implementing commit | Acceptance evidence | Remaining action/owner |
| --- | --- | --- | --- | --- |
| G05 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Five shared records drive the canonical Approach and compact strips; roles retained; old process redirects. | None within implementation scope. |
| G08 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Sixteen-entry claims/scope register; unsupported staffing/lender/experience metrics omitted across emitted pages and metadata. | None within implementation scope. |
| G09 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Five comparison cards expose structure, commitments and question without a wide table; 320px rendering passes. | None within implementation scope. |
| G12 | In progress | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Canonical metadata, sitemap and Vercel rules updated; local browser mappings pass. Deployed headers/statuses remain unverified. | Development: verify deployed protected response/status/canonical. |
| G13 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Ten parent-derived, route-specific briefs with contextual contact, source/date and print controls; twenty print pages inspected. | None within implementation scope. |
| G14 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Current entity/contact, paid advisory/provider remuneration, direct-email and disconnected-interface wording aligned with decisions. | None within implementation scope. |
| G20 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Two branded inactive account screens; local show/hide, clearing and neutral assistance; CSP and source keep transmission/storage disconnected. | None within implementation scope. |
| P01.1 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Brand hero retained; concrete Services/Funding explanation replaces repeated philosophy. | None within implementation scope. |
| P01.2 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Labelled contract/cash-cycle objective -> preparation -> provider questions illustration. | None within implementation scope. |
| P01.3 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Both routes prominent; outputs/examples and relevant next actions; remuneration distinction explicit. | None within implementation scope. |
| P02.1 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Objectives, structure comparison and specialist operating contexts separated. | None within implementation scope. |
| P02.2 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Goal cards retain stock/receivables, equipment, development and ownership examples. | None within implementation scope. |
| P02.3 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | One prominent uncertain-route helper follows objective choices; guide path accessible. | None within implementation scope. |
| P13.1 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | About focuses on advisory/intermediary role and preparation for a business decision. | None within implementation scope. |
| P13.2 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Labelled equipment requirement summary demonstrates information quality without a client claim. | None within implementation scope. |
| P13.3 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Approach, Expertise and Network links centralised rather than repeating their full content. | None within implementation scope. |
| P14.1 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Approach canonical; local How It Works #roles fallback verified; production rule configured. | None within implementation scope. |
| P14.2 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Every stage has a description, client output and responsibility. | None within implementation scope. |
| P14.3 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Agreed preparation, negotiations and transaction coordination; provider/client fees and qualified advisers distinguished. | None within implementation scope. |
| P15.1 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | No second detailed process page; old route is a moved document with canonical target. | None within implementation scope. |
| P15.2 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Direct permanent Vercel rule and client fallback preserve #roles; local browser result verified. | None within implementation scope. |
| P15.3 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Internal old-process links removed; local redirect journey tested. Header validation remains centrally open under G12. | None within implementation scope. |
| P16.1 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | 100+, 250+ and unverified 35-year metric removed, without substitute invented proof. | None within implementation scope. |
| P16.2 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Seven capability/output mappings and labelled modelling/tracker example links. | None within implementation scope. |
| P16.3 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Engagement-specific delivery scope; no claim of an employed global specialist team. | None within implementation scope. |
| P17.1 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Provider-type cards and a distinct funding-purpose view cross-link to relevant funding pages. | None within implementation scope. |
| P17.2 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Illustrative contract cash-cycle matching case includes reasons provider fit might fail. | None within implementation scope. |
| P17.3 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | No provider names/logos or unsupported network counts; provisional framework explicit. | None within implementation scope. |
| P18.1 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | All five proposed addresses, agreement labels and approved city images retained. | None within implementation scope. |
| P18.2 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Primary-source address formats checked; SF suite added; Abu Dhabi mailing caveat retained; approximate coordinates removed. | None within implementation scope. |
| P18.3 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Each city has a central Contact action with allowlisted city context; photography distinguished from premises. | None within implementation scope. |
| P19.1 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Advisers leads with client relationship, agreed preparation and specialist responsibilities. | None within implementation scope. |
| P19.2 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Central inbox monitoring, initial contact ownership and update arrangements explained. | None within implementation scope. |
| P19.3 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Adviser entry beside Contact and footer; no invented introducer commission or contract terms. | None within implementation scope. |
| P20.1 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | No table on comparison route; labelled cards at all widths. | None within implementation scope. |
| P20.2 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Overlapping structure families explicitly explained, including borrowing/property/equipment overlap. | None within implementation scope. |
| P20.3 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Relevant brief links on each comparison card; no invented cost assumptions. | None within implementation scope. |
| P21.1 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Uncertain choice is neutral and each objective has an explanation. | None within implementation scope. |
| P21.2 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Every returned route has a preparation/brief action and enquiry action; prepare mode adds its own checklist. | None within implementation scope. |
| P21.3 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | All 24 cases pass browser result/action checks; URL restore, reset, back and keyboard/pointer submit checked. | None within implementation scope. |
| P22.1 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Email is the working route; forms remain disconnected and never report delivery success. | None within implementation scope. |
| P22.2 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Service/funding/adviser/city/guide context retained by allowlists; adviser/city mailto verified on preserved-query local URL. | None within implementation scope. |
| P22.3 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Direct contact invitation, only existing useful optional qualification and non-confidential first-message guidance. | None within implementation scope. |
| B01 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Parent-derived name, scope, preparation and four-field route-specific outline; contextual enquiry and source/date; inspected two-page A4 print output and mobile layout. | None within implementation scope. |
| B02 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Parent-derived name, scope, preparation and four-field route-specific outline; contextual enquiry and source/date; inspected two-page A4 print output and mobile layout. | None within implementation scope. |
| B03 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Parent-derived name, scope, preparation and four-field route-specific outline; contextual enquiry and source/date; inspected two-page A4 print output and mobile layout. | None within implementation scope. |
| B04 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Parent-derived name, scope, preparation and four-field route-specific outline; contextual enquiry and source/date; inspected two-page A4 print output and mobile layout. | None within implementation scope. |
| B05 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Parent-derived name, scope, preparation and four-field route-specific outline; contextual enquiry and source/date; inspected two-page A4 print output and mobile layout. | None within implementation scope. |
| B06 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Parent-derived name, scope, preparation and four-field route-specific outline; contextual enquiry and source/date; inspected two-page A4 print output and mobile layout. | None within implementation scope. |
| B07 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Parent-derived name, scope, preparation and four-field route-specific outline; contextual enquiry and source/date; inspected two-page A4 print output and mobile layout. | None within implementation scope. |
| B08 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Parent-derived name, scope, preparation and four-field route-specific outline; contextual enquiry and source/date; inspected two-page A4 print output and mobile layout. | None within implementation scope. |
| B09 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Parent-derived name, scope, preparation and four-field route-specific outline; contextual enquiry and source/date; inspected two-page A4 print output and mobile layout. | None within implementation scope. |
| B10 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Parent-derived name, scope, preparation and four-field route-specific outline; contextual enquiry and source/date; inspected two-page A4 print output and mobile layout. | None within implementation scope. |
| U01 | In progress | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Privacy page implemented and internally checked; deployed response still unverified behind protection. | Development: verify deployed protected response/status/canonical. |
| U02 | In progress | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Confirmed company/address/inbox and fee copy implemented; official company number/registered particulars not verified, no candidate number published. | Andy/development: verify official company number and registered particulars before public release. |
| U03 | In progress | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | 404 document and recovery links maintained; true deployed HTTP 404 still unverified. | Development: verify deployed protected response/status/canonical. |
| U04 | In progress | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Direct permanent venture rule, hash-preserving local fallback and sitemap exclusion; deployed HTTP response still unverified. | Development: verify deployed protected response/status/canonical. |
| U05 | In progress | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Direct permanent digital rule, retained scope and local fallback; deployed HTTP response still unverified. | Development: verify deployed protected response/status/canonical. |
| U06 | In progress | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Ten ordered title rules plus neutral unknown fallback; ten encoded local browser cases pass; actual Vercel response still unverified. | Development: verify deployed protected response/status/canonical. |
| L01.1 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Labelled username/password, show/hide, Sign In, Forgot Password and assistance; no registration. | None within implementation scope. |
| L01.2 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Client Login is desktop right/mobile top and targets /client-login; initial account pages omit development/availability notices. | None within implementation scope. |
| L01.3 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Local attempt clears values and gives neutral assistance; no real account/password validation or authentication. | None within implementation scope. |
| L02.1 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Matching recovery screen with username/email, action, return and assistance. | None within implementation scope. |
| L02.2 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Recovery remains unconnected, clears entry and never claims a reset email was sent. | None within implementation scope. |
| L02.3 | Complete | `d3975ff565e593c24a327c9c7f4c3c40990bd759` | Labels/routes/responsive controls and synthetic clearing checked; source/CSP audit excludes account lookup, storage and recovery delivery. | None within implementation scope. |

## Verification

| Check | Environment | Actual result | Evidence |
| --- | --- | --- | --- |
| Build/site checks | Local Node 24, tested code | Pass: 48 documents, 4116 links, 372 assets; IDs, anchors, initial HTML and JS syntax | [Build](../evidence/sprint-04/build.txt), [routes](../evidence/sprint-04/routes.json) |
| Sprints 1–3 regressions | Local Node, tested code | All pass, including ten funding aids, seven services and thirty service/funding mappings | [Sprint 1](../evidence/sprint-04/sprint-1-regression.txt), [Sprint 2](../evidence/sprint-04/sprint-2-regression.txt), [Sprint 3](../evidence/sprint-04/sprint-3-regression.txt) |
| Sprint 4 assertions | Local Node, tested code | Five process stages, 24 guide cases, ten briefs, five proposed locations, no unsupported scale, ten mappings, two inactive screens | [Checks](../evidence/sprint-04/supporting-checks.txt) |
| Guide browser cases | Cloud Chromium/local | All 24 combinations have correct result count plus preparation/enquiry actions; neutral uncertainty. Explicit visible-result wait and keyboard submit used; pointer submit, URL restore, reset and back separately checked | [Guide cases](../evidence/sprint-04/guide-cases.json) |
| Responsive | Cloud Chromium/local | 108 cases at 320/390/768/1440 CSS frame widths, zero horizontal document overflow | [Geometry](../evidence/sprint-04/responsive.json) |
| Legacy browser routes | Local static client fallbacks | Ten encoded Global-title cases preserve #enquiry; /ventures, /crypto, unknown fallback and old process #roles pass | [Legacy cases](../evidence/sprint-04/legacy-browser.json) |
| Brief pagination | WeasyPrint 70, actual emitted HTML/CSS/assets | Ten PDFs, exactly two A4 pages each; all source/page markers; twenty raster pages visually inspected | [Results](../evidence/sprint-04/print-results.json), [summary](../evidence/sprint-04/print-summary.txt), print sheet below |
| Accounts | Local Chromium, synthetic test text only | Password show/hide works; local actions clear all values and restore masking; neutral assistance, no false reset confirmation | Source/CSP audit and observed DOM states; no instrumented HAR/storage capture available |
| Contact | Local preserved-query URL | Adviser label, source and London context correctly reflected in email link | Observed UI and mailto, no email sent |
| Address/source review | Primary workspace listings | Formats checked; all remain proposed; no premises pin or occupancy implied | [Review](../evidence/sprint-04/address-and-company-review.md) |
| Company statutory particulars | Matching official record retrieval | Not verified; candidate number not published | U02 remains In progress |
| Deployment | GitHub Vercel status | Successful for exact tested code | Dashboard link above |
| Deployed HTTP/status/canonical/404 | Protected preview | Not verified; existing sign-in restriction prevents acceptance | G12/U01–U06 remain open |

### Visual evidence

- [Home](../evidence/sprint-04/home.webp)
- [Client Login](../evidence/sprint-04/login.webp)
- [Responsibilities](../evidence/sprint-04/roles.webp)
- [320px comparison](../evidence/sprint-04/comparison-mobile.webp)
- [Twenty-page print inspection sheet](../evidence/sprint-04/print-contact-sheet.webp)

Browser screenshots show local code. Print rendering is WeasyPrint, not Chromium PDF export; a final browser-print check remains in G15. Iframe widths are CSS viewports with a 15px scrollbar; no physical-phone or screen-reader pass is claimed. No real credentials, client data, emails or account operations used. Closeout/screenshots follow the tested code in a documentation-only commit.

## Decisions and deviations

| Decision | Reason/basis | Disposition |
| --- | --- | --- |
| Omit unsupported 100+/250+ and experience metric | G08/P16 requires supported proof; no supporting record supplied | Original illustrative targets remain only in internal register as omitted |
| Retain all proposed cities and photos | Confirmed decision, no agreements yet | Address sources checked; SF suite normalised; Abu Dhabi mailing details remain agreement-dependent |
| No company number added | Matching official record could not be retrieved; third-party candidate is insufficient | U02 open before public release |
| Use a local print engine for pagination QA | Browser tool has no PDF-export instrumentation | Actual emitted HTML/CSS rendered and all twenty pages inspected; engine limit explicit |
| Preserve global preview protection/noindex | No authorisation to change audience/protection | Deployed checks remain open; no access weakening |
| Account screens remain inactive | User explicitly deferred backend | Local controls only, no availability banner, no account lookup/reset outcome |

## Defects, limits and deferred work

| Item | Impact | Owner and next action |
| --- | --- | --- |
| Protected deployment verification | Vercel rules exist but actual response headers/statuses and true 404 unverified | Development: complete G12/U01–U06 with authenticated access |
| Statutory particulars | Company identity uses owner-confirmed text without a registration-number assertion | Andy/development: verify official number and registered particulars for U02 |
| Local daemon redirects | Local slash-adding redirect drops query in some contact navigation | Preserved-query context tested; G10 and actual deployed click-through remain open |
| Native print/physical device/assistive technology | Not exercised in this environment | G15 final regression |
| Legal/operating review when new collection activates | Copy matches current implementation; no legal compliance opinion claimed | Update notice/terms with actual operations before later integrations |
| G11/auth/recovery/document backend | Explicitly excluded | Remain deferred; no hidden activation |

## Checkpoint and review

Home through Services/Funding, comparison/guide/brief and Contact is locally reviewable, along with both account screens. Owner review Pending, not Accepted. No production merge or approval inferred from deployment.

## Handover and recovery

Sprint 5 should resolve the named access/statutory items where possible, test actual deployed HTTP routing/404 and full contextual contact, finish accessibility/journey checks and define measurement without personal data. Keep the process source, parent-derived brief content, auth inactivity, proposed locations and claim register intact.

Rollback baseline: 955b49b60cc357c3782481109cf74118ad293fc2. Revert this implementation through normal Git workflow if necessary, not by force-resetting history or changing access controls. Main remains e4a51cc2b800fb50b27fbffb736b836429997935. No data migration or irreversible data action occurred.

## Gate conclusion

- [x] All 65 tasks reconciled with implementation, evidence and named remaining checks.
- [x] Local implementation/content/interaction/width and print QA completed.
- [ ] Actual deployed routing/status acceptance and official statutory particulars verified.
- [x] Master register, claims/architecture/evidence and handover updated.
- [x] Owner review accurately Pending; production approval separate.

**Result:** Implementation delivered, sprint not fully closed. 58 tasks Complete; G12/U01–U06 In progress. No missing development feature is concealed by the deployment result.
