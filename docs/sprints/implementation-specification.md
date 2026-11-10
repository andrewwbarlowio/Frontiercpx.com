> Execution update: Sprint 1 implementation and verification are tracked in [the sprint index](README.md) and [closeout](closeouts/sprint-01.md). Historical specification statements below describe the planning baseline, not current implementation status.

# Frontier website improvement implementation plan

Consolidated specification · 10 November 2026 · 132 work items. Source: reviewed Word plan version 4. These are planned changes, not implemented website behaviour.

FRONTIER CAPITAL PARTNERS

Website improvement implementation plan

Page scope delivery sequence and acceptance criteria

10 November 2026

### The intended outcome

Make Frontier’s advisory work and funding solutions clear, specific and connected while retaining its coherent design. Visitors should recognise their situation, understand the support and deliverables available, see credible evidence and know how to start a conversation.

This consolidated revision incorporates Andy’s decisions of 10 November 2026 throughout. It specifies 132 work items: the original 98, four additional shared tasks, 24 advisory-page tasks and six login/recovery tasks. Deferred operations remain identified; no website implementation is reported as complete.

### What completion means

- Seven advisory services and all ten funding solutions have distinctive copy, useful client outputs and relevant next actions.

- Our Approach is the single process page; goals, sectors, provider categories and legacy routes are coherent.

- The ten decision briefs and mobile comparisons support an actual business discussion.

- Claims, location status and service scope reflect evidence; founder biographies remain off the site.

- Direct email works as the current contact route. Website forms and portal authentication remain disconnected until separately commissioned.

### Delivery boundaries

Use the existing build/site-refinements-v3 branch from the reviewed baseline 5321053c43bd9eb7ca239b848f66e768720f5a28. Check its current head before implementation. This document authorises no new claims or outside commitments and makes no website changes. It is the specification for the next development pass.

Preserve the navy identity, white logo and navigation, approved solution artwork, location photography and title-case menu labels. Keep the current static renderer unless an agreed live enquiry integration requires server-side work. No redesign or framework migration is proposed.

The current release is a reviewable website with direct-email contact, proposed locations and an unconnected login interface. Form automation, authenticated portal access and document-platform setup are later operations. Missing future integrations must not block current copy and layout work.

## Delivery sequence and review points

| Stage | Work | Exit condition |
| --- | --- | --- |
| 1 Establish the baseline | G01–G03, G05, G17–G19; apply confirmed decisions and begin evidence checks. | Route and copy schema agreed; one process model; no changes lost from the branch. |
| 2 Build representative pages | P04 Property Finance, P03 Business Funding and A03 Financial Modelling; G04 G07. | Two funding pilots and one service pilot have distinct copy, deliverables and accessible components. |
| 3 Roll out the journeys | Remaining funding pages, A00–A07, Home and About; G06 G10 G17–G19. | All page briefs complete and navigation/context journeys work. Unsupported specialist scope remains explicit. |
| 4 Strengthen supporting pages | Approach, Expertise, Network, Presence and Advisers; G08–G09. | No competing process or invented proof; comparison works on a narrow screen. |
| 5 Finish decision support | Guide, ten briefs, recovery routes and L01–L02; G12 G13 G20. | All 24 guide combinations, brief source links, prints and redirects tested. |
| 6 Release current scope | G14–G16 and current acceptance. Keep G11, portal backend and platform setup deferred. | Direct email and disconnected states verified; regression passes; review, deploy and verify. |

Review checkpoints are demonstrations of concrete work, not requests to restart planning. Review the two pilot pages together, then review the complete journey. A copy change should be assessed with its CTA and lower-page content, not approved as an isolated headline.

### Owners and effort

Development owns implementation, copy drafts, component behaviour and evidence of checks. Andy and Roger own confirmation of business scope, actual relationships, company details and receiving arrangements. Any specialist wording review is provided by an appropriately qualified reviewer where needed. These are proposed responsibilities, not third-party commitments.

Effort bands are relative estimates: S is a contained content, route or configuration change; M spans one page and its component interactions; L spans several journeys or an operational integration. No calendar deadline or fixed engineering estimate is implied. Confirm effort after the baseline and operating choices are known.

## Business decisions and dependencies

The following register is the authoritative status of the business inputs, confirmed by Andy on 10 November 2026. Preserve these decisions during implementation. Open evidence and future operational details are not reasons to reopen the agreed product catalogue.

| ID | Decision and current status | Effect and remaining action |
| --- | --- | --- |
| D01 | Confirmed for now: Frontier AI Group Limited; Lyndon House address; enquiries@frontiercpx.com; no phone. | Andy. Possible Abu Dhabi entity later. Verify company number and any required statutory particulars before public release. |
| D02 | Retain existing agreed funding products and types. | Andy. Existing scope is the source; do not restart product discovery or infer new geographical coverage. |
| D03 | Provisional digital audience: blockchain/digital-asset businesses. Existing insurance scope retained. | Use a clearer digital display name; retain URLs. Any later substantive scope change needs a separate decision. |
| D04 | Seven-service advisory direction agreed. Standalone advisory is client-paid; funding activity is provider-paid. | Andy sources delivery specialists. Define engagement scope and fee terms; no Frontier client fee for funding activity. |
| D05 | Public partner anonymity is ongoing policy. Evidence for claims remains required. | Andy and Roger. No names/logos; omit unverified counts, credentials and outcomes. |
| D06 | All five locations remain proposed; retain addresses and photos. | No workspace agreements confirmed. Do not present them as staffed offices or headquarters. |
| D07 | Direct email to agreed inbox, monitored by Andy and Roger. Forms disconnected. | Automated email delivery is deferred. Response-time commitments remain unconfirmed. |
| D08 | Client go-ahead before sharing; restricted documents; 12-month unsuccessful-enquiry default. | Platform/configuration and justified transaction-record periods remain open before those operations begin. |

D03 establishes blockchain and digital-asset businesses as the provisional digital audience, with the existing insurance scope retained. Use Digital Asset Business Funding as the working editorial label; keep /sectors/digital-infrastructure stable in this release. Route renaming is deferred, avoiding an unnecessary new decision.

Partners remain publicly anonymous and all five locations remain proposed. The 100+ and 250+ figures are illustrative targets, not verified facts. Remove unsupported public counts; evidence remains necessary for promoted experience and capability claims.

## Shared implementation tasks

### G01 Record and protect the baseline

S effort  |  Dependencies None

Build Inventory current branch head, main, routes, source files and deployed preview. Retain the starting commit for rollback and record existing failures separately.

Done when The working tree matches the selected head; all 38 current routes are accounted for and existing build checks pass or pre-existing failures are documented.

### G02 Define page roles and hierarchy

M effort  |  Dependencies G01

Build Map Home to orientation, Advisory Services to client support, Funding Solutions to funding needs, About to operating role, Approach to process, Expertise to evidence, Network to capital access and Presence to proposed geography. Keep Advisers distinct.

Done when Each principal page has one primary reader task and action. Shared sections link to the canonical explanation instead of copying it in full.

### G03 Create the contextual copy model

L effort  |  Dependencies G01 G02

Build Add explicit per-solution fields for hero, fit, use cases, mechanics, commitments, preparation, FAQs and enquiry copy. Keep editorial content separate from rendering and navigation labels. Require all ten records to supply these fields.

Done when The renderer has no generic marketing fallback for those fields. Missing fields fail the build. Current anchor IDs stay stable and text remains meaningful in initial HTML.

### G04 Build reusable solution components

L effort  |  Dependencies G03

Build Retain a consistent section order but allow relevant decision aids: project lifecycle, cash cycle, cost breakdown or readiness outline. Pilot Property Finance and Business Funding before rollout.

Done when At 320, 390, 768 and desktop widths, both pilots are legible and usable. Their headings, examples and enquiry prompts reflect different buying situations without duplicating component code.

## Shared implementation tasks continued

### G05 Unify the process

M effort  |  Dependencies G02 D04

Build Use Our Approach as the canonical five-stage explanation. Migrate useful role, fee and information-sharing content from How It Works. Render shorter process strips from the same data.

Done when There is one source of process truth. Stage labels and responsibilities agree across pages; #roles survives; no duplicated full process page remains after redirect.

### G06 Repair the route and category model

L effort  |  Dependencies G02 D02 D03

Build Separate business objectives, capital structures, sector contexts and provider types. Correct uncertain guide routing and technology-company routing. Map provider categories to purposes rather than blending the classifications.

Done when All objectives and specialist links reach relevant pages. Uncertainty produces neutral help. Confirmed specialist naming is applied consistently across navigation, guide, briefs and forms.

### G07 Build useful proof assets

L effort  |  Dependencies G03 D04

Build Create clearly labelled illustrative outputs: property project summary, working-capital outline, round-readiness checklist and an agreed-scope client output. Use real case evidence only if provided and approved.

Done when Every example identifies what is assumed and what is illustrative. It demonstrates work quality without implying a completed transaction, assured funding, savings or investor access.

### G08 Maintain the claims and scope register

M effort  |  Dependencies D01–D06

Build For each location, count, credential, service capability and access claim, record exact wording, evidence, rights to use, owner and status. Check related cards, metadata and downloadable briefs too.

Done when Each promoted claim has supporting evidence and approved wording. Unverified content is visibly provisional or absent. Biographies are not added as a substitute for proof.

## Shared implementation tasks continued

### G09 Make comparisons usable on mobile

M effort  |  Dependencies G06

Build Replace reliance on horizontal scrolling with labelled mobile cards or a two-route comparison. Preserve route, structure, commitments and question fields in meaningful reading order.

Done when At 320 CSS pixels all fields can be read without side-scrolling a wide table. Keyboard and screen-reader order remains coherent; category overlap is explained.

### G10 Preserve enquiry intent

M effort  |  Dependencies G06

Build Carry source page, service, selected goal, project stage, city or adviser context into contact. Use allowlisted values and let visitors change topic. In this release offer contextual direct email; retain form context for the later integration.

Done when A visitor never has to reselect a known route unnecessarily. Invalid context falls back neutrally. Back navigation and reset behaviour are tested without saving personal financial information.

### G11 Implement enquiry automation in a later phase

L effort  |  Dependencies D01 D07 D08 G10

Build Deferred by Andy. Later connect server-side delivery to enquiries@frontiercpx.com, with validation, proportionate abuse controls, duplicate handling, assignment, acknowledgement and failure paths. Do not connect it during the current release.

Done when Deferred status and future acceptance are recorded. Current forms do not transmit or claim success. Future activation requires synthetic end-to-end receipt, ownership, timeout, failure and retry checks at the real destination.

### G12 Maintain canonical routes and redirects

M effort  |  Dependencies G05 G06

Build Update Vercel routing, local fallbacks, internal links, canonical metadata and launch sitemap together. Preserve old recognised product title mappings and meaningful anchors.

Done when Direct URLs, encoded queries, old product links, #roles and unknown-query recovery work on the deployed environment without loops or misleading catch-all sales redirects.

## Shared implementation tasks continued

### G13 Improve the ten decision briefs

L effort  |  Dependencies G03 G04 G06

Build Use each parent page’s approved content and name, adding route-specific discussion fields. Include source date, route and scope. Provide print or save behaviour with a designed print stylesheet.

Done when Every brief remains useful alone, returns to the correct enquiry, and has inspected print pagination without clipped content. Edits to the parent data do not leave an old proposition in the brief.

### G14 Align privacy and website information

M effort  |  Dependencies D01 D04 D07 D08; G11 only for later automated forms

Build Align company, advisory fees, provider remuneration, direct email and information handling with confirmed decisions. Explain the current disconnected forms. Update privacy wording again when automation or document collection changes; no G11 launch dependency now.

Done when The notice and website information match the implemented system and current entity. Any appropriate specialist review is complete before live collection. No unverified certification or privacy guarantee is added.

### G15 Complete journey and accessibility verification

L effort  |  Dependencies All changed components

Build Run the regression matrix in this plan against local build and deployed preview. Cover initial content, navigation, focus, validation, images, redirects, contact context and 320-pixel layouts.

Done when Check evidence identifies environment, branch and commit. Actual device and assistive-technology limits are stated. No blocker is hidden by a successful static build.

### G16 Establish conversion measurement

M effort  |  Dependencies D08 G14; G11 only for future delivery events

Build Define funding/service route selection and email-link clicks for the current release, with synthetic checks or a disabled adapter. Defer form delivery and qualified-lead integration. Exclude credentials, personal details and free text from analytics.

Done when Event definitions distinguish a click from an email received or funding secured. Permitted collection and tooling are documented before activation. No conversion-uplift claim or target is invented.

## Copy system and editorial acceptance

Keep “Cross the frontier. Funding your ambition.” as the principal brand expression on Home. Retain the brand signature in the footer if desired. Product pages should earn recognition through the reader’s transaction, not repeat that line as their own proposition.

Use transaction language with restraint. A hint such as foundations for property or runway for venture can work when the subheading makes the offer plain. Avoid a metaphor in every line, automatic puns, the word “chapter”, and repetitive clusters of clear, considered, ambition and next move.

| Solution | Structure heading | Commitments heading |
| --- | --- | --- |
| Business Funding | Match the facility to your cash cycle | Repayments, security and room to adapt |
| Property Finance | From acquisition to exit | Equity, drawdowns and the exit plan |
| Growth and Ownership | Where the proceeds go | Ownership and decisions after investment |
| Venture Funding | Build the round around the milestone | Runway, dilution and investor rights |
| Complex Funding | Map the situation and the deadline | Priority, cost and stakeholder consent |
| Life Sciences | Cost the next scientific milestone | Development risk and later capital needs |
| Technology and Equipment | From purchase to productive use | Eligible costs and end of term obligations |
| Sustainability and Impact | The investment behind the intended outcome | Commercial assumptions and evidence |
| Insurance Capital | Capital for the insurance business | Entity and specialist dependencies |
| Digital Asset Infrastructure | The operating model behind the technology | Activity, governance and capital fit |

Use the existing agreed insurance scope and the provisional digital-asset business audience. Full hero and CTA direction appears in each page brief. Replace repeated sales headings across the ten funding records; ordinary functional labels may stay consistent.

Copy acceptance: the opening identifies the situation and useful action; each section adds information; scope and commitments stay accurate; technical terms are consistent; the page makes sense read aloud; the reader does not need to decode a metaphor. Review repeated phrases in the actual emitted content, excluding intentional UI labels and legal terms.

## Principal page delivery specifications

### P01 Home

/  |  M effort  |  G02 G03 G07 G08

Target page Hero and role statement → two clear routes into Advisory Services and Funding Solutions → six funding goal cards → one delivery example → supported capability → contact. Keep the approved bull artwork.

- P01.1  Retain the hero brand line; replace the repeated philosophy sections with one concrete explanation of Frontier’s work.

- P01.2  Add one labelled example of a requirement moving from objective to provider questions; show process, not an invented deal.

- P01.3  Make both advisory support and funding solutions visible, then show evidence and a relevant next action. Distinguish paid advisory engagements from provider-paid funding activity.

Hero direction Cross the frontier. Funding your ambition.

Primary action Explore Funding Options

Page acceptance A visitor understands Frontier’s advisory and intermediary roles, can find either route immediately and reaches property, cash flow or equipment in one goal selection. Lower sections add concrete information.

### P02 Funding Solutions

/solutions  |  M effort  |  G02 G03 G06

Target page Business objectives first; clearly separate funding structures from sector contexts. Give each route a concise situation cue and one optional guide link.

- P02.1  Separate business objectives from sector contexts and show where the two overlap.

- P02.2  Give cards concise examples such as stock, machinery, development or shareholder liquidity.

- P02.3  Place one prominent uncertain-route option after the choices; test whether readers find their route without assistance.

Hero direction What are you looking to fund?

Primary action Find My Funding Route

Page acceptance All ten agreed funding routes remain reachable, with relevant service links and one neutral guide option. Retain the existing scope; do not add unsupported provider terms or reopen products.

## Principal page delivery specifications continued

### P03 Business Funding

/solutions/business-funding  |  L effort  |  G03 G04 G07

Target page Hero → working capital, growth and refinance paths → cash-cycle example → structure and repayment → commitments → preparation → tailored questions → enquiry.

- P03.1  Add separate working-capital, growth and refinance modules with relevant next actions.

- P03.2  Replace generic mechanics and commitments headings with cash-flow and repayment language.

- P03.3  Use a labelled cash-cycle illustration and short first-call checklist; publish funding bands only if supported.

Hero direction Keep your next opportunity moving.

Primary action Discuss My Funding Requirement

Page acceptance An illustrative order-to-payment scenario explains the funding need without implying a client outcome. Existing-facility questions, repayment capacity and relevant cross-links are visible.

### P04 Property Finance

/solutions/property-finance  |  L effort  |  G03 G04 G07

Target page Hero → acquisition, development and exit paths → project lifecycle → net funds and equity → conditions and drawdowns → exit assumptions → project enquiry.

- P04.1  Add a project-stage selector or clear stage links feeding the enquiry context.

- P04.2  Introduce a labelled development drawdown and exit illustration, with dependencies.

- P04.3  Change section language to project, equity, drawdowns, programme and exit; keep qualifications beside the relevant commitment.

Hero direction Build the next project on firmer foundations.

Primary action Discuss My Property Project

Page acceptance Stage choices carry through to the enquiry. A labelled example distinguishes project costs, owner equity, drawdown conditions and repayment or exit, without invented availability or ratios.

## Principal page delivery specifications continued

### P05 Growth and Ownership Capital

/solutions/growth-and-ownership-capital  |  M effort  |  G03 G04 G07

Target page Hero → growth investment, shareholder liquidity or management transaction → proceeds and ownership → governance comparison → preparation → shareholder enquiry.

- P05.1  Split the opening routes by use of proceeds and ownership objective.

- P05.2  Add a simple ownership and governance discussion guide, without invented valuations or returns.

- P05.3  Make the CTA about the shareholder decision and explain the agreed role before marketing execution support.

Hero direction Grow the business. Shape what comes next.

Primary action Discuss Our Growth or Ownership Plans

Page acceptance A reader can distinguish capital entering the business from liquidity for a seller. A sample comparison covers rights and alignment as well as valuation; no target valuation or return is implied.

### P06 Venture Funding

/solutions/venture-funding  |  M effort  |  G03 G04 G07

Target page Hero → validation or scale context → milestone and runway → round readiness → investor mandate questions → ownership terms → round enquiry.

- P06.1  Retain the milestone concept; use runway, round and investor fit throughout the sections.

- P06.2  Add a round-readiness checklist and separate validation from scaling requirements.

- P06.3  Replace generic proof with a sample investment-summary structure and confirmed mandate coverage when available.

Hero direction Fund the milestone that moves you forward.

Primary action Discuss My Next Funding Round

Page acceptance The readiness outline connects stage, evidence, use of funds and next milestone. No investor commitment or guaranteed raise is implied; venture debt remains distinct from equity.

## Principal page delivery specifications continued

### P07 Complex Funding

/solutions/complex-funding  |  M effort  |  G03 G04 G10

Target page Hero → what changed and actual deadline → viability and stakeholder map → capital and specialist boundaries → initial situation outline → contextual enquiry.

- P07.1  Replace the abstract opening with a requirement and deadline-led message.

- P07.2  Add an optional deadline field and explain how the first discussion is triaged.

- P07.3  Define the boundary between capital introductions and specialist restructuring work; keep relevant advice signposts visible.

Hero direction When the funding situation changes, map the next move.

Primary action Discuss the Situation

Page acceptance Timing is captured as context, not a completion promise. The page identifies when specialist support may be needed and never positions a form as emergency assistance.

### P08 Life Sciences Funding

/sectors/life-sciences  |  M effort  |  D02 G03 G04 G07

Target page Hero → development, commercial scale or laboratory investment → milestone evidence → budget and runway → diligence boundaries → non-confidential enquiry.

- P08.1  Retain the scientific milestone headline and introduce stage-specific content paths.

- P08.2  Add a non-confidential milestone brief with evidence, budget, dependencies and runway.

- P08.3  Limit public scope to supported subsectors and activities; link laboratory equipment to the appropriate capital route.

Hero direction Capital for the next scientific milestone.

Primary action Discuss Our Next Milestone

Page acceptance The page distinguishes research risk from operating equipment finance and carries the chosen purpose into contact. No technical validation, patient data or unpublished research is requested.

## Principal page delivery specifications continued

### P09 Technology and Equipment Funding

/solutions/technology-funding  |  L effort  |  G03 G04 G06 G07

Target page Hero for operating-business capability → prominent founder-fundraising link → expenditure breakdown → installation and benefits timeline → obligations → investment enquiry.

- P09.1  Make operating-business investment the primary path and route company fundraising immediately to venture or growth capital.

- P09.2  Add an expenditure breakdown and implementation timeline, both illustrative.

- P09.3  Use installation, capacity and capability language rather than ambition or generic progress.

Hero direction Put your next capability to work.

Primary action Discuss Our Equipment or Technology Investment

Page acceptance A founder can immediately reach venture or growth capital. Equipment, software, implementation and services are separated, with no assumption that all are financeable.

### P10 Sustainability and Impact Funding

/solutions/sustainability-and-impact  |  M effort  |  D02 G03 G04 G07

Target page Hero → operational improvement or impact-led company growth → commercial case and baseline → evidence and reporting → terms → contextual enquiry.

- P10.1  Separate operational investment and impact-led business growth before the main copy.

- P10.2  Add a commercial and outcome measurement example without claiming realised savings.

- P10.3  Use specific investment language and keep grant availability distinct from the core offering.

Hero direction Fund the improvement. Measure the difference.

Primary action Discuss Our Sustainability Investment

Page acceptance The two capital cases are distinct. An illustrative measurement example states assumptions and dependencies, and does not imply a cheaper green loan, grant or delivered saving.

## Principal page delivery specifications continued

### P11 Insurance Sector Capital

/sectors/insurance-capital  |  M effort  |  D02 D03 G03 G04

Target page Existing insurance-business scope (brokers, MGAs, insurtechs and risk carriers) → capital purpose → entity-specific preparation → relevant advisory support → enquiry. Preserve business-capital versus cover/capacity distinctions.

- P11.1  Carry forward the existing named entities and capital purposes; treat these as the agreed scope rather than an unanswered product decision.

- P11.2  Replace broad examples with approved scope and entity-specific preparation.

- P11.3  Retain an explicit capital-versus-cover distinction and use a specialist-requirement CTA.

Hero direction Capital for the business behind the policy.

Primary action Discuss an Insurance Business Requirement

Page acceptance Final copy names supported entities and purposes, distinguishes capital from policies and capacity, and does not expose unsupported activities as live services.

### P12 Digital Asset Business Funding

/sectors/digital-infrastructure  |  L effort  |  D02 D03 G03 G06 G12

Target page Blockchain and digital-asset operating businesses → customers and revenues → capital purpose → governance and jurisdiction → preparation → enquiry. Keep the current route; align display labels, guide, cards, brief and form.

- P12.1  Clarify the display name to reflect digital-asset businesses while preserving the existing URL. Do not extend the proposition to data centres, telecoms or cloud infrastructure.

- P12.2  Separate operating-company capital from token, retail investment and physical infrastructure routes.

- P12.3  Retain a simple activity and jurisdiction enquiry without requesting financial account access.

Hero direction Capital for the infrastructure behind digital assets.

Primary action Discuss Our Business Capital Requirement

Page acceptance The final label matches the business activity. Old routes map directly to the agreed canonical route. Retail investment, token sales and account-access expectations are not introduced.

## Principal page delivery specifications continued

### P13 About Us

/about-us  |  M effort  |  G03 G05 G07 G08

Target page Operating role → why the client needs it → sample output → agreed responsibilities → short links to Approach, Expertise and Network → enquiry.

- P13.1  Rewrite around Frontier’s role and the client problem it addresses, not another philosophy statement.

- P13.2  Use a sample requirement summary or provider-question checklist as visible work quality evidence.

- P13.3  Link once to Approach, Expertise and Network; remove their repeated explanations here.

Hero direction A better prepared funding conversation.

Primary action See How Frontier Works

Page acceptance Explain Frontier’s advisory and intermediary roles, separately paid services and provider-paid funding activity without biographies, duplicate process copy or unverified statistics.

### P14 Our Approach

/our-approach  |  L effort  |  D04 G03 G05 G08

Target page Principles in a short introduction → five stages with input, output and owner → responsibilities → fees and information-sharing questions → contact.

- P14.1  Consolidate How It Works into this page while preserving useful anchors and redirects.

- P14.2  Replace philosophy with concrete deliverables and responsibilities for each stage.

- P14.3  Explain preparation, commercial negotiation and transaction coordination within an agreed engagement. Distinguish client-paid advisory deliverables from provider-paid funding activity and specialist professional responsibilities.

Hero direction From funding requirement to an informed decision.

Primary action Explore the Process

Page acceptance One definitive process describes only supported work. Legacy #roles and relevant section links resolve, and shared strips use a faithful condensed version of the same process.

## Principal page delivery specifications continued

### P15 How It Works

/how-it-works  |  S effort  |  G05 G12

Target page Migrate unique useful detail to Our Approach, update all internal references, then redirect this route. Retain a local fallback only where needed for static preview.

- P15.1  Choose Our Approach as the canonical destination and migrate the useful detail.

- P15.2  Redirect this route and preserve or map #roles and other existing anchors.

- P15.3  Update homepage, About Us and supporting links, then test every redirected journey.

Hero direction One process page under Our Approach

Primary action Read Our Approach

Page acceptance The deployed URL redirects once to Our Approach, with #roles preserved or mapped. The old page is removed from the canonical launch sitemap and no internal links depend on it.

### P16 Our Expertise

/our-expertise  |  M effort  |  D04 D05 G07 G08

Target page Verified capability evidence → sample work quality → specialist delivery model → links to service pages and funding solutions → enquiry. Do not repeat the service catalogue in full.

- P16.1  Replace placeholder metrics with verified facts before external promotion; do not substitute another invented number.

- P16.2  Show a capability-to-client-output matrix and an approved example deliverable.

- P16.3  Specify access and engagement scope factually, without implying an employed global team.

Hero direction Expertise for the decisions that shape the deal.

Primary action Explore the Capabilities

Page acceptance No unsupported employee, expert or lender count is promoted as fact. Founder experience can be stated accurately without a biography. Every capability connects to an identifiable client output.

## Principal page delivery specifications continued

### P17 Frontier Funding Network

/funding-network  |  L effort  |  D02 D05 G06 G08

Target page Capital access proposition → who supplies capital → what capital can fund → criteria for a match → illustrative matching example → confirmed scope → contact.

- P17.1  Create a provider-type view and a separate funding-purpose view with links between them.

- P17.2  Show one explicitly illustrative matching example and the reasons a provider may or may not fit.

- P17.3  Describe provider categories and supported purposes without names or logos. Keep relationship evidence internally; omit unverified counts rather than treating anonymity as proof.

Hero direction The right capital begins with the right connection.

Primary action Explore Capital Routes

Page acceptance Provider types and funding purposes are not presented as one mutually exclusive classification. Relationships, available capital and funding outcomes remain distinct.

### P18 Global Presence

/global-presence  |  S effort  |  D06 G08 G10

Target page Keep the five current city photos and addresses. Verify mailing formats and coordinate purpose; add one central contact route that can retain the selected city.

- P18.1  Retain all five addresses and approved photographs, with each location clearly identified as proposed. Do not require agreements to finish this preview page.

- P18.2  Verify address format and coordinate purpose; avoid presenting approximate coordinates as a precise premises pin.

- P18.3  Add a central contact action with city context and preserve the distinction between city photography and premises.

Hero direction Connected to the centres of capital.

Primary action Explore Our Locations

Page acceptance Proposed locations remain identified until agreements authorise use. A city image is never described as the premises, and no new staffed-office or headquarters claim is introduced.

## Principal page delivery specifications continued

### P19 For Advisers

/for-advisers  |  M effort  |  D04 D07 G10; G11 deferred

Target page Client-relationship benefit → agreed introduction sequence → authority and ownership → sample update → commercial arrangements → adviser-context contact.

- P19.1  Lead with the client relationship and useful specialist access; keep procedure concise.

- P19.2  Show who contacts the client and how updates are agreed.

- P19.3  Make the adviser route visible beside contact and in relevant supporting pages; publish only real commercial terms.

Hero direction A funding conversation that respects your client relationship.

Primary action Discuss a Client Requirement

Page acceptance A referrer sees who would contact the client and how updates are agreed. No client information or fee entitlement is assumed; adviser details remain separate from client details.

### P20 Funding Options

/funding-options  |  M effort  |  G06 G09 G13

Target page Compare two structure families on desktop where useful; present labelled cards on mobile → practical questions → relevant briefs → discussion action.

- P20.1  Replace the narrow-screen table with labelled cards or an accessible two-route comparison.

- P20.2  Clarify that rows are overlapping structure families, not mutually exclusive product definitions.

- P20.3  Move the relevant brief choice earlier and keep cost assumptions explicit in any future example.

Hero direction Understand what the funding asks of your business.

Primary action Compare Funding Questions

Page acceptance Every comparison field is accessible without horizontal table dependence at 320 CSS pixels. Explain overlapping families and avoid implying a recommendation or universal provider terms.

## Principal page delivery specifications continued

### P21 Funding Guide

/funding-guide  |  L effort  |  G06 G10 G13

Target page Objective and next-action selection → explain why routes are shown → separate actions for each result → change or reset choices → neutral uncertainty route.

- P21.1  Make uncertain-route results neutral and explain why each route is shown.

- P21.2  Expose preparation and enquiry actions for each result rather than only the first.

- P21.3  Test all 24 objective and next-step combinations plus back navigation and keyboard use.

Hero direction Find the funding conversation that fits your goal.

Primary action Show My Starting Points

Page acceptance All 24 combinations pass. Not sure leads to comparison or a neutral enquiry. A preparation action uses the chosen result’s brief, and back navigation does not silently reset the user’s task.

### P22 Contact

/contact  |  M effort  |  D01 D07 D08 G10 G14; G11 deferred

Target page Direct invitation for advisory or funding needs → enquiries@frontiercpx.com → short disconnected form → useful optional context → client-authorised later sharing. No published telephone number or unconfirmed response time.

- P22.1  Keep direct email as the working route and forms disconnected. Show no send success or transmission. Record automated email delivery as a later task under G11.

- P22.2  Carry service, solution, guide, adviser or city context into the contact page and a contextual email option without forcing repeated selection.

- P22.3  Add only useful optional qualification and replace generic hero copy with a direct invitation.

Hero direction Tell us what you are working towards.

Primary action Email Our Team

Page acceptance Correct email and both advisory/funding entry routes work. Forms remain disconnected and do not report delivery. Andy and Roger monitor the inbox; automated receipt and response-time commitments are deferred.

## Decision brief delivery specifications

### B01 Business Funding

/briefs/credit  |  M effort  |  G13 and approved parent page

Work Add a cash-cycle outline and a short existing-facility checklist.

Heading direction The questions behind your next facility.

Acceptance Use the parent page’s final name, scope and preparation points. Include source date, correct enquiry link and the agreed route-specific outline. Inspect print pagination and mobile reading; keep assumptions labelled. Do not require an email address to read or print.

Specific risk to test A reader can mistake a generic brief for a provider-specific quotation or assessment.

### B02 Property Finance

/briefs/real-estate  |  M effort  |  G13 and approved parent page

Work Add a project summary with costs, equity, programme and exit assumptions; leave values for the user.

Heading direction Put the project and the funding on the same page.

Acceptance Use the parent page’s final name, scope and preparation points. Include source date, correct enquiry link and the agreed route-specific outline. Inspect print pagination and mobile reading; keep assumptions labelled. Do not require an email address to read or print.

Specific risk to test A static generic document can circulate while project costs and timetable change.

### B03 Growth and Ownership Capital

/briefs/private-equity  |  M effort  |  G13 and approved parent page

Work Add proceeds purpose, desired ownership outcome and governance questions for shareholders.

Heading direction Prepare the shareholder conversation.

Acceptance Use the parent page’s final name, scope and preparation points. Include source date, correct enquiry link and the agreed route-specific outline. Inspect print pagination and mobile reading; keep assumptions labelled. Do not require an email address to read or print.

Specific risk to test A high valuation can dominate discussion while rights and conditions receive too little attention.

### B04 Venture Funding

/briefs/ventures  |  M effort  |  G13 and approved parent page

Work Add a round outline and milestone budget headings, without inventing investment assumptions.

Heading direction A round built around the next milestone.

Acceptance Use the parent page’s final name, scope and preparation points. Include source date, correct enquiry link and the agreed route-specific outline. Inspect print pagination and mobile reading; keep assumptions labelled. Do not require an email address to read or print.

Specific risk to test An overly polished brief can look investor-ready while essential diligence remains incomplete.

## Decision brief delivery specifications continued

### B05 Complex Funding

/briefs/special-situations  |  M effort  |  G13 and approved parent page

Work Add deadline, change, stakeholders and required-consent fields; avoid sensitive detail in the web form.

Heading direction The situation, the deadline and the next decision.

Acceptance Use the parent page’s final name, scope and preparation points. Include source date, correct enquiry link and the agreed route-specific outline. Inspect print pagination and mobile reading; keep assumptions labelled. Do not require an email address to read or print.

Specific risk to test The brief must not be treated as an emergency professional assessment.

### B06 Life Sciences Funding

/briefs/life-sciences  |  M effort  |  G13 and approved parent page

Work Provide non-confidential milestone, evidence, budget and runway headings with subsector context.

Heading direction Frame the capital around the scientific milestone.

Acceptance Use the parent page’s final name, scope and preparation points. Include source date, correct enquiry link and the agreed route-specific outline. Inspect print pagination and mobile reading; keep assumptions labelled. Do not require an email address to read or print.

Specific risk to test Circulation can inadvertently include unpublished work if the intended boundary is unclear.

### B07 Technology and Equipment Funding

/briefs/tech-opportunities  |  M effort  |  G13 and approved parent page

Work Focus this brief on the investment and cost categories; route founders to the relevant equity brief.

Heading direction Prepare the investment before the installation.

Acceptance Use the parent page’s final name, scope and preparation points. Include source date, correct enquiry link and the agreed route-specific outline. Inspect print pagination and mobile reading; keep assumptions labelled. Do not require an email address to read or print.

Specific risk to test A supplier quote can conceal excluded integration or service costs if the breakdown is absent.

## Decision brief delivery specifications continued

### B08 Sustainability and Impact Funding

/briefs/double-impact  |  M effort  |  G13 and approved parent page

Work Add two variants or clear branches: investment economics and impact-led growth evidence.

Heading direction Cost the improvement and define the evidence.

Acceptance Use the parent page’s final name, scope and preparation points. Include source date, correct enquiry link and the agreed route-specific outline. Inspect print pagination and mobile reading; keep assumptions labelled. Do not require an email address to read or print.

Specific risk to test The presence of an environmental objective can be mistaken for preferential funding terms.

### B09 Insurance Sector Capital

/briefs/insurance  |  M effort  |  G13 and approved parent page

Work Tailor preparation to the retained existing insurance entity coverage; remove the obsolete request to reconfirm the product set. Distinguish business capital from cover and underwriting capacity.

Heading direction Define the insurance business requirement.

Acceptance Use the parent page’s final name, scope and preparation points. Include source date, correct enquiry link and the agreed route-specific outline. Inspect print pagination and mobile reading; keep assumptions labelled. Do not require an email address to read or print.

Specific risk to test A forwarded brief may appear to evidence specialist capability beyond the agreed service.

### B10 Digital Asset Business Funding

/briefs/crypto  |  M effort  |  G13 and approved parent page

Work Align the display name and activity questions with the parent page’s digital-asset business audience. Keep /briefs/crypto stable in this release.

Heading direction Describe the business behind the digital assets.

Acceptance Use the parent page’s final name, scope and preparation points. Include source date, correct enquiry link and the agreed route-specific outline. Inspect print pagination and mobile reading; keep assumptions labelled. Do not require an email address to read or print.

Specific risk to test A standalone forwarded document can lose the surrounding site explanation and attract the wrong audience.

## Information and recovery delivery specifications

### U01 Privacy and This Preview

/privacy-policy  |  M effort  |  D01 D04 D07 D08 G14

Work Align the notice with Frontier AI Group Limited, direct email, disconnected forms and the approved handling baseline. Update it before later automated collection or document exchange begins.

Intended behaviour Map actual data flows, recipients, retention and contacts; make the notice reflect the receiving workflow before enabling it.

Acceptance Confirm deployed response and destination, internal links and page metadata. For privacy and website information, verify the content against the actual entity, system and scope before live enquiries.

### U02 Website Information

/terms-use  |  M effort  |  D01 D04 D07 D08 G14

Work Use Frontier AI Group Limited, Lyndon House, 79 Bury Road, Tottington, Bury, BL8 3EU and enquiries@frontiercpx.com. State the advisory and funding remuneration models accurately; verify statutory company particulars before publication.

Intended behaviour Provide verified entity and contact information and align the description to agreed scope and remuneration.

Acceptance Confirm deployed response and destination, internal links and page metadata. For privacy and website information, verify the content against the actual entity, system and scope before live enquiries.

### U03 Page Not Found

/404  |  S effort  |  G12

Work Test true status, navigation and recovery paths on the deployed domain; do not redirect unrelated missing pages to a sales page.

Intended behaviour Offer a concise route guide and contact alternative while retaining a true 404 response.

Acceptance Confirm deployed response and destination, internal links and page metadata. For privacy and website information, verify the content against the actual entity, system and scope before live enquiries.

## Information and recovery delivery specifications continued

### U04 Legacy Ventures

/ventures  |  S effort  |  G12

Work Check the deployed response and destination; exclude the retired route from the launch sitemap.

Intended behaviour Maintain one direct permanent redirect to the venture page and preserve useful context.

Acceptance Confirm deployed response and destination, internal links and page metadata. For privacy and website information, verify the content against the actual entity, system and scope before live enquiries.

### U05 Legacy Crypto

/crypto  |  S effort  |  G12

Work Test a direct redirect to the final named page, with the business-capital boundary retained.

Intended behaviour Preserve the direct redirect to the retained digital specialist route, with the clarified digital-asset business display name.

Acceptance Confirm deployed response and destination, internal links and page metadata. For privacy and website information, verify the content against the actual entity, system and scope before live enquiries.

### U06 Legacy Destination

/destination  |  M effort  |  G06 G12

Work Test all ten supported title mappings, unknown queries, encoded titles and target anchors on Vercel; verify final canonical URLs.

Intended behaviour Keep recognised mappings explicit, update final route names and provide the guide for unmatched requests.

Acceptance Confirm deployed response and destination, internal links and page metadata. For privacy and website information, verify the content against the actual entity, system and scope before live enquiries.

## Implementation structure and route decisions

### Content and rendering

Extend content/customer-journeys.json or introduce a dedicated editorial file. Required fields should include fitHeading, usesHeading, structureHeading, commitmentsHeading, valueHeading, preparationHeading, questionsHeading, enquiryHeading, enquiryIntro and primaryCta, alongside the existing hero fields. Define proof/example data separately with an explicit illustrative or verified status.

scripts/customer-site.mjs renders shared components from that data; scripts/customer-content.mjs owns the guide, comparison, About and briefs; scripts/credibility.mjs owns the four credibility pages. Keep process data in one place. Split modules only where it improves ownership; do not rewrite the site into a new framework.

Extend scripts/check.mjs to require the new fields, check references and meaningful initial content, and prevent accidentally reintroducing the retired generic headings. Keep navigation title case independent of sentence-case body headings. Match site copy, not filenames alone, when checking repetition.

### Specific route handling

| Current route | Proposed treatment | Condition |
| --- | --- | --- |
| /our-approach | Keep as canonical process | Migrate useful detail and retain roles anchor. |
| /how-it-works | One permanent redirect to /our-approach | Update all internal links and test anchors first. |
| /sectors/digital-infrastructure | Keep URL; clarify display name | Digital Asset Business Funding; provisional digital-asset business audience. |
| /sectors/insurance-capital | Retain existing insurance scope | Carry existing entities and purposes into page and brief; no new product decision. |
| /ventures and /crypto | Direct legacy redirects to final relevant pages | Align specialist naming and preserve business-capital boundaries. |
| /destination | Explicit recognised query mapping plus neutral fallback | Test all ten titles and unknown/encoded values. |

The starting inventory has 38 emitted routes. Add eight advisory routes and two login/recovery routes; redirect How It Works. Account for every old and new route, including redirects, without treating the number of rendered pages as the acceptance test. Do not restore archived people or news pages.

## Enquiry and operational specification

### The minimum useful first conversation

Current contact is direct email to enquiries@frontiercpx.com, monitored by Andy and Roger. Keep the existing short form disconnected. Later forms may collect name, business, email, service/funding topic and a non-confidential requirement; phone only if a callback is requested.

Preserve source route, service, goal, solution, stage, city and adviser context through allowlisted values. Visitors may change topic. Do not persist personal or financial data merely to maintain navigation state.

### Delivery behaviour

Later phase only: implement server-side delivery to the agreed inbox, with credentials off the client, validation, abuse controls and duplicate handling. The current release neither sends form contents nor logs them into analytics.

Success identifies what actually happened and the operational next step. Failure explains that the enquiry was not confirmed and offers a safe retry or a verified alternative contact. Avoid repeated-send ambiguity after timeouts. Acknowledgement and internal assignment are tested separately from a successful HTTP response.

### Ownership and information handling

Andy and Roger monitor the enquiry inbox. Do not invent availability or response times. Obtain client go-ahead before sharing details or documents with a funding provider; record recipient, scope and date. Agree client-contact ownership for adviser referrals.

Approved baseline: restricted client folders on an established business platform, named access, MFA and access logs. Delete unsuccessful enquiries after 12 months without meaningful contact and unnecessary documents sooner. Select the platform and justify engagement-record periods before use; these are future operational tasks.

### Preview and live states

Current release: direct email, disconnected forms and unconnected login/recovery screens. Do not transmit or retain entered passwords. Future activation updates behaviour, security configuration and privacy wording together. Do not publish a portal availability notice on the login screen.

Before enabling live mode, test valid enquiry, invalid input, missing callback phone, duplicate click, retry, provider timeout, receiving failure, owner absence and adviser context. Confirm actual receipt and assignment using synthetic test data. No real customer outreach is part of this development plan.

## Verification matrix

| Area | Required checks | Acceptance evidence |
| --- | --- | --- |
| All page content | Every P, A, B, U and L item has final naming, useful HTML, relevant action and accurate scope. | Page checklist linked to commit; no missing editorial field or unintended generic fallback. |
| Copy and proof | Compare page headers, lower sections, examples, cards, briefs and CTA text. | Distinct contextual language; supported claims; labelled illustrations; no biographies added. |
| Navigation and routing | Desktop and mobile Services/Funding menus, login placement, focus, back navigation, routes, queries and anchors. | Correct destinations, focus restoration, background handling and no broken internal references. |
| Responsive layouts | 320, 390, 768 CSS pixels and desktop; funding/service pages, login and recovery, plus shared components. | No document overflow, clipped copy or hidden comparison fields. Images retain useful crops. |
| Guide | Eight objectives × three next actions, including uncertain choice and multi-result preparation. | 24 recorded results; correct reason and route-specific actions; keyboard operation and neutral fallback. |
| Briefs | Ten web and print views; source dates and contextual return links. | All ten prints inspected; no overlap, clipped commitments, stranded headings or stale scope. |
| Accessibility | Keyboard sequence, focus visibility, accordion state, labels, error summary, contrast and reading order. | Automated checks plus manual review. State any remaining physical-device or screen-reader limit. |
| Contact and later delivery | Current: email links, context and no form transmission. Later: G11 success, failure, timeout and assignment tests. | Current states evidenced. Actual receipt tests required only before later form activation. |
| Deployed behaviour | Canonical URLs, redirects, cache effects, image loading, HTTPS and receiving endpoint. | Checks on the actual deployed build, not inferred from local static output. |
| Information and measurement | Entity and privacy content; preview/live state; event payloads and definitions. | Text matches implementation; no personal or free text in event data; indexing state is intentional. |

Do not repeat all checks after an unchanged build without a reason. Re-run affected journeys after edits and run the complete release regression once the content and operations are final. A Vercel success status confirms deployment completion, not every page or enquiry behaviour.

## Release review and rollback

### Reviewable preview completion

- All 132 work items have a status: complete with evidence, intentionally deferred with reason, or blocked on a named input. G11 and later portal operations remain deferred; no item silently disappears.

- All copy, layout and navigation improvements within confirmed scope are built on the working branch. Missing business facts do not delay unrelated work.

- Retain proposed locations and anonymous partners, omit unsupported public counts, and preserve existing agreed funding scope. Forms and login authentication remain disconnected as specified.

- A pull request describes final behaviour, validation, dependencies and known limits, with screenshots of representative mobile and desktop journeys.

### Operational launch acceptance

- Confirmed business decisions are applied. Verify company particulars and evidence for public claims; remove unsupported claims. Future document-platform and retention details only gate the operations they concern.

- For the current release, verify the email contact route and disconnected forms/login. Live form receipt, assignment, acknowledgement and failure tests are required only when G11 is separately activated.

- All changed routes and redirections pass on the deployed environment; the final sitemap and indexing choice are deliberate.

- The owner approves the concrete reviewed release before main merge. Keep the existing audience and deployment protection unless a change is explicitly requested.

### Cutover and recovery

Before merge, record commit IDs and the last good deployment. Merge only the reviewed head, inspect deployment, then check Home, Services, a service page, Funding Solutions, Property, Contact, login, recovery and legacy routes. Run an enquiry submission test only if later enabled and agreed.

If a release breaks the main navigation, route selection or delivery, stop acquisition activity and restore the prior known good deployment or revert the merge through the normal repository workflow. Preserve the event and commit record, fix on the working branch and repeat the affected checks. No automatic deletion of data or weakening of access controls is part of rollback.

### Work item tracking

For every G, P, A, B, U and L ID record status, implementing commit, evidence, dependency, owner and next action. Use the written acceptance criteria. Effort bands are relative; no calendar deadline is implied.

## Measurement and handover

### What to observe

Clarity: can a visitor identify the right route and explain the main commitment? Speed: how many decisions and repeated fields sit between the need and useful contact? Quality: do enquiries contain enough accurate context and reach the right owner? Access: do supported provider conversations follow from appropriately qualified requirements?

These are hypotheses to validate, not an assertion of conversion uplift. Use representative founder, finance, property and adviser tasks before launch. Ask participants what they believe Frontier does, which route they would choose and what they expect after contact. Record wrong turns and mistaken expectations.

After delivery is reliable, establish baselines for relevant route visits, enquiry starts, accepted submissions, delivered enquiries, qualified conversations and agreed next steps. Report the denominator and source period. Exclude internal testing, duplicates and spam from commercial outcomes. A button click is not a delivered enquiry, and a conversation is not funding secured.

### Final handover package

- Updated route and component inventory, source commit and deployment link.

- Page checklist for P01–P22, A00–A07, briefs B01–B10, utility routes U01–U06 and L01–L02.

- Claims and scope register with supporting business inputs and review dates.

- Copy inventory, approved illustrative assets and image source records.

- Current direct-email ownership notes and a separate deferred form/portal operations runbook.

- Build, browser, routing, print and delivery verification results with known limits.

- Measurement definitions and a prioritised follow-up list based on actual feedback.

### Reference and status

Source: Frontier Website Page by Page SWOT Review, 10 November 2026, saved version 0, covering 38 emitted routes at commit 5321053c43bd9eb7ca239b848f66e768720f5a28. This plan retains its page IDs and turns its recommendations into implementation and verification work. It does not replace actual service, partner, office or operating evidence.

This document consolidates the confirmed business decisions and expanded service scope. It performs no website implementation, outreach, merge or deployment. Begin with baseline, navigation and content models, then the two funding pilots and one advisory pilot before full rollout.

## Additional shared implementation tasks

### G17 Add the two navigation routes

M effort | Dependencies G02 D04

Build Place Advisory Services and Funding Solutions side by side, each with overview and individual-page links. Add Client Login on desktop right and at the top of the mobile menu. Preserve existing supporting pages.

Done when Desktop and mobile menus expose both routes and login, with visible focus, keyboard access, correct expanded state and usable touch targets.

### G18 Build the advisory content model

M effort | Dependencies G03 D04

Build Add required service fields for audience, trigger, scope, outputs, process, fees, boundaries, related funding and enquiry. Create one reusable service template with distinctive examples.

Done when All seven service records pass completeness checks; A03 establishes the template; no generic marketing fallback or invented team capacity.

### G19 Connect services to funding journeys

M effort | Dependencies G06 G10 G18

Build Map each service to relevant funding pages and each funding page to relevant support. Use existing rendering architecture. Carry service context into direct-email contact.

Done when Every service is reachable from its overview and relevant funding journey; links work both ways; paid services and provider-paid funding remain clear.

### G20 Build inactive login and recovery interfaces

M effort | Dependencies G17 D07 D08

Build Create both branded screens without authentication or recovery integration. Show no coming-soon or availability notice. Keep credentials out of transmission, storage and analytics.

Done when The login and recovery acceptance criteria pass. No actual login, fabricated account validation, reset-email confirmation or unintended credential request occurs.

## Advisory overview and service template

### A00 Advisory Services

/services | M effort | G17 G18 G19 D04

Target page Advisory role → seven service cards → example client outputs → engagement and fees → relevant funding routes → email enquiry.

A00.1 Explain the seven services with a clear client situation and deliverable for each.

A00.2 Show how clients can buy preparation or analysis independently of a funding introduction.

A00.3 Link each service, relevant funding solutions and the canonical process; keep one primary enquiry action.

Hero direction Prepare the business for the capital it needs. Primary action Discuss Our Advisory Requirement.

Acceptance All seven pages are linked. Client-paid advisory and provider-paid funding are distinct. No blanket promise of free services, guaranteed funding or an existing employed specialist team.

### Common acceptance for A01 to A07

Each page includes the client trigger, intended audience, agreed scope, named deliverables, practical process, useful preparation, relevant FAQs, engagement fees, related funding pages and contextual email action. Work is scoped before engagement. Specialist legal, tax, audit and regulated activities remain the responsibility of appropriately qualified providers.

Maintain the navy identity, approved imagery and title-case navigation. Use page-specific headings and a labelled illustrative output; do not invent case results. Check 320, 390, 768 pixels and desktop, keyboard reading order, metadata and direct URLs. Services are proposed for delivery through an appropriately assembled team; verify capacity before accepting an engagement.

### Service and funding distinction

Funding Solutions describes the capital requirement; Advisory Services describes the work Frontier undertakes. Avoid duplicating the service catalogue on Expertise. State that provider fees and costs may exist even where Frontier charges no client fee for the funding activity.

## Advisory service page specifications

### A01 Capital Strategy and Funding Advisory

/services/capital-strategy | M effort | G18 G19 D04

Audience and scope Funding objectives, existing borrowing and ownership; assess debt/equity options, capital structure, sequencing and trade-offs.

A01.1 Write contextual audience, scope, preparation and FAQs; distinguish advisory support from the associated funding route.

A01.2 Specify outputs: Funding roadmap, options appraisal and information requirements. Include one clearly labelled illustrative example.

A01.3 Add engagement/fee wording, process, related links and the contextual enquiry action. Related funding: Growth/Ownership, Business Funding, Venture Funding.

Primary action Assess Our Capital Options.

Acceptance Common A01–A07 criteria apply. No assured valuation, lender/investor commitment, audit assurance or guaranteed completion. Deliverables and responsibilities are agreed for the individual engagement.

### A02 Funding Readiness and Application Preparation

/services/funding-readiness | M effort | G18 G19 D04

Audience and scope Assess readiness, identify gaps and organise applications, business plans, presentations, information memoranda and data-room contents.

A02.1 Write contextual audience, scope, preparation and FAQs; distinguish advisory support from the associated funding route.

A02.2 Specify outputs: Readiness review, prioritised action list and agreed application or investor pack. Include one clearly labelled illustrative example.

A02.3 Add engagement/fee wording, process, related links and the contextual enquiry action. Related funding: All funding solutions, with page-specific preparation.

Primary action Prepare Our Funding Case.

Acceptance Common A01–A07 criteria apply. No assured valuation, lender/investor commitment, audit assurance or guaranteed completion. Deliverables and responsibilities are agreed for the individual engagement.

## Advisory service page specifications continued

### A03 Financial Modelling and Commercial Analysis

/services/financial-modelling | M effort | G18 G19 D04

Audience and scope Integrated profit/loss, balance sheet and cash flow, working capital, debt schedules, project appraisal, scenarios and affordability.

A03.1 Write contextual audience, scope, preparation and FAQs; distinguish advisory support from the associated funding route.

A03.2 Specify outputs: Assumption-led model, scenario summary and explanation of funding gaps. Include one clearly labelled illustrative example.

A03.3 Add engagement/fee wording, process, related links and the contextual enquiry action. Related funding: Property Finance, Business Funding, Venture and Growth/Ownership.

Primary action Discuss Our Financial Model.

Acceptance Common A01–A07 criteria apply. No assured valuation, lender/investor commitment, audit assurance or guaranteed completion. Deliverables and responsibilities are agreed for the individual engagement.

### A04 Debt Advisory and Capital Sourcing

/services/debt-advisory | M effort | G18 G19 D04

Audience and scope Assess debt requirement, prepare lender case, identify providers, coordinate approaches, compare offers and support commercial negotiations.

A04.1 Write contextual audience, scope, preparation and FAQs; distinguish advisory support from the associated funding route.

A04.2 Specify outputs: Funding brief, lender approach plan and offer comparison where offers exist. Include one clearly labelled illustrative example.

A04.3 Add engagement/fee wording, process, related links and the contextual enquiry action. Related funding: Business, Property, Equipment and Complex Funding.

Primary action Discuss Our Debt Requirement.

Acceptance Common A01–A07 criteria apply. No assured valuation, lender/investor commitment, audit assurance or guaranteed completion. Deliverables and responsibilities are agreed for the individual engagement.

## Advisory service page specifications continued

### A05 Equity and Strategic Capital Advisory

/services/equity-advisory | M effort | G18 G19 D04

Audience and scope Plan round, proposition, valuation scenarios, dilution and governance questions; prepare for investors and targeted introductions.

A05.1 Write contextual audience, scope, preparation and FAQs; distinguish advisory support from the associated funding route.

A05.2 Specify outputs: Round strategy, investor materials and ownership scenario analysis. Include one clearly labelled illustrative example.

A05.3 Add engagement/fee wording, process, related links and the contextual enquiry action. Related funding: Venture Funding and Growth/Ownership Capital.

Primary action Prepare Our Capital Raise.

Acceptance Common A01–A07 criteria apply. No assured valuation, lender/investor commitment, audit assurance or guaranteed completion. Deliverables and responsibilities are agreed for the individual engagement.

### A06 Due Diligence and Transaction Management

/services/transaction-support | M effort | G18 G19 D04

Audience and scope Review financial/commercial information, identify gaps, coordinate data room and questions, advisers, conditions and completion milestones.

A06.1 Write contextual audience, scope, preparation and FAQs; distinguish advisory support from the associated funding route.

A06.2 Specify outputs: Issues log, diligence tracker and transaction timetable. Include one clearly labelled illustrative example.

A06.3 Add engagement/fee wording, process, related links and the contextual enquiry action. Related funding: Property, Growth/Ownership, Venture and Complex Funding.

Primary action Discuss Our Transaction.

Acceptance Common A01–A07 criteria apply. No assured valuation, lender/investor commitment, audit assurance or guaranteed completion. Deliverables and responsibilities are agreed for the individual engagement.

## Advisory service page specifications continued

### A07 Ongoing Capital and Business Advisory

/services/ongoing-advisory | M effort | G18 G19 D04

Audience and scope Review facilities, forecasts, refinancing needs, future capital requirements, acquisition and ownership plans; coordinate restructuring specialists where needed.

A07.1 Write contextual audience, scope, preparation and FAQs; distinguish advisory support from the associated funding route.

A07.2 Specify outputs: Periodic capital review, updated forecasts and prioritised actions. Include one clearly labelled illustrative example.

A07.3 Add engagement/fee wording, process, related links and the contextual enquiry action. Related funding: Business, Growth/Ownership and Complex Funding.

Primary action Review Our Capital Position.

Acceptance Common A01–A07 criteria apply. No assured valuation, lender/investor commitment, audit assurance or guaranteed completion. Deliverables and responsibilities are agreed for the individual engagement.

### Current implementation status

All current-scope work items are planned, not implemented. G11 is deferred by instruction; form activation tests remain future work. Portal authentication, recovery backend, document-platform setup and final engagement-record retention periods are also deferred operations, not completed website features. Business confirmations are recorded decisions, not evidence of deployed functionality.

## Client login and password recovery specifications

### L01 Client Login

/client-login | M effort | G17 G20

L01.1 Build the branded screen with labelled username and password, show/hide password, Sign In, Forgot Password and contact assistance. No public registration is required.

L01.2 Place the lozenge button on the right of desktop navigation and at the top of the expanded mobile menu. No coming-soon, access-unavailable or public development-status notice.

L01.3 Keep authentication unconnected. Prevent credential transmission, persistence and analytics capture. An attempted sign-in may return a neutral inability-to-complete message with contact assistance; never claim verified account or password validation.

Acceptance Accessible labels, focus, keyboard operation, direct URL and mobile layout pass. No successful login is possible; no credential request or stored password exists. This release is the screen only.

### L02 Forgot Password

/forgot-password | S effort | L01 G20

L02.1 Build the matching recovery screen with username/email, recovery action, return-to-login link and contact assistance.

L02.2 Keep recovery unconnected. Do not transmit or retain entries or claim that a reset email was sent. Offer enquiries@frontiercpx.com for account assistance.

L02.3 Verify routing, keyboard use, labels and responsive layout; confirm no account enumeration, credential storage or recovery network request.

Acceptance Standard visual controls and neutral assistance behaviour are present without an availability notice. Authentication, reset tokens, sessions, MFA and portal document access are deferred to a separate implementation.

### Tracking and validation status

The 132-item count is 98 original items + G17–G20 (4) + A00–A07 with three items each (24) + L01–L02 with three items each (6). This review validates the specification against the recorded decisions; it does not validate an implemented website, legal permissions, service delivery capacity or deployment.

