# Frontier website delivery sprints

Five outcome-led delivery batches on `build/site-refinements-v3`. Planning baseline: `5321053c43bd9eb7ca239b848f66e768720f5a28`. Prepared 10 November 2026 from consolidated implementation plan version 4.

## Delivery sequence

| Sprint | Outcome | Primary task count |
| --- | --- | ---: |
| [1 Foundations and pilot pages](sprint-01-foundations-and-pilots.md) | Establish the shared architecture and demonstrate three complete buyer journeys before scaling the copy. | 17 |
| [2 Advisory Services](sprint-02-advisory-services.md) | Complete the client-facing service offer using the financial-modelling pilot. | 22 |
| [3 Funding Solutions](sprint-03-funding-solutions.md) | Give each of the remaining eight funding pages its own commercial language and decision support. | 25 |
| [4 Supporting journeys and client login](sprint-04-supporting-journeys.md) | Complete the site around the advisory and funding pages, including decision support and the inactive login screens. | 65 |
| [5 Verification and release readiness](sprint-05-verification-and-release.md) | Prove the complete current scope works and prepare a concrete release for owner review. | 2 |
| [Deferred](deferred-operations.md) | G11 automation; other future operations separately described | 1 |

Total: **132 unique primary task assignments: 131 in five sprints and G11 deferred.** Counts are traceability units, not equal effort or time. Sprint 4 is deliberately split into three execution sub-stages.

## How to execute

- One working branch; a reviewable preview and evidence at each checkpoint. Preserve source task IDs.
- A primary sprint owns final acceptance; dependency preparation can happen earlier. G05/G07 start with Sprint 1 and close in their assigned sprints.
- Run affected checks throughout; Sprint 5 is final regression, not the first time testing occurs.
- All implementation tasks start **Planned**, except G11 **Deferred**. Record commit, preview/evidence, owner and next action when status changes.
- The documents do not start implementation, merge main or authorise release. Owner approval applies to the concrete release as stated in the source plan.

## Source and precedence

[Complete consolidated specification](implementation-specification.md) contains every page brief and confirmed business decision. These sprint files organise its execution; they do not expand the commercial scope. Earlier repository plans describe previous development phases. If they conflict with the confirmed decisions in this specification, use this consolidated specification.

## Complete task register

| Task ID | Primary sprint | Initial status | Task |
| --- | --- | --- | --- |
| A00.1 | 2 | Planned | Explain the seven services with a clear client situation and deliverable for each. |
| A00.2 | 2 | Planned | Show how clients can buy preparation or analysis independently of a funding introduction. |
| A00.3 | 2 | Planned | Link each service, relevant funding solutions and the canonical process; keep one primary enquiry action. |
| A01.1 | 2 | Planned | Write contextual audience, scope, preparation and FAQs; distinguish advisory support from the associated funding route. |
| A01.2 | 2 | Planned | Specify outputs: Funding roadmap, options appraisal and information requirements. Include one clearly labelled illustrative example. |
| A01.3 | 2 | Planned | Add engagement/fee wording, process, related links and the contextual enquiry action. Related funding: Growth/Ownership, Business Funding, Venture Funding. |
| A02.1 | 2 | Planned | Write contextual audience, scope, preparation and FAQs; distinguish advisory support from the associated funding route. |
| A02.2 | 2 | Planned | Specify outputs: Readiness review, prioritised action list and agreed application or investor pack. Include one clearly labelled illustrative example. |
| A02.3 | 2 | Planned | Add engagement/fee wording, process, related links and the contextual enquiry action. Related funding: All funding solutions, with page-specific preparation. |
| A03.1 | 1 | Planned | Write contextual audience, scope, preparation and FAQs; distinguish advisory support from the associated funding route. |
| A03.2 | 1 | Planned | Specify outputs: Assumption-led model, scenario summary and explanation of funding gaps. Include one clearly labelled illustrative example. |
| A03.3 | 1 | Planned | Add engagement/fee wording, process, related links and the contextual enquiry action. Related funding: Property Finance, Business Funding, Venture and Growth/Ownership. |
| A04.1 | 2 | Planned | Write contextual audience, scope, preparation and FAQs; distinguish advisory support from the associated funding route. |
| A04.2 | 2 | Planned | Specify outputs: Funding brief, lender approach plan and offer comparison where offers exist. Include one clearly labelled illustrative example. |
| A04.3 | 2 | Planned | Add engagement/fee wording, process, related links and the contextual enquiry action. Related funding: Business, Property, Equipment and Complex Funding. |
| A05.1 | 2 | Planned | Write contextual audience, scope, preparation and FAQs; distinguish advisory support from the associated funding route. |
| A05.2 | 2 | Planned | Specify outputs: Round strategy, investor materials and ownership scenario analysis. Include one clearly labelled illustrative example. |
| A05.3 | 2 | Planned | Add engagement/fee wording, process, related links and the contextual enquiry action. Related funding: Venture Funding and Growth/Ownership Capital. |
| A06.1 | 2 | Planned | Write contextual audience, scope, preparation and FAQs; distinguish advisory support from the associated funding route. |
| A06.2 | 2 | Planned | Specify outputs: Issues log, diligence tracker and transaction timetable. Include one clearly labelled illustrative example. |
| A06.3 | 2 | Planned | Add engagement/fee wording, process, related links and the contextual enquiry action. Related funding: Property, Growth/Ownership, Venture and Complex Funding. |
| A07.1 | 2 | Planned | Write contextual audience, scope, preparation and FAQs; distinguish advisory support from the associated funding route. |
| A07.2 | 2 | Planned | Specify outputs: Periodic capital review, updated forecasts and prioritised actions. Include one clearly labelled illustrative example. |
| A07.3 | 2 | Planned | Add engagement/fee wording, process, related links and the contextual enquiry action. Related funding: Business, Growth/Ownership and Complex Funding. |
| B01 | 4 | Planned | Business Funding |
| B02 | 4 | Planned | Property Finance |
| B03 | 4 | Planned | Growth and Ownership Capital |
| B04 | 4 | Planned | Venture Funding |
| B05 | 4 | Planned | Complex Funding |
| B06 | 4 | Planned | Life Sciences Funding |
| B07 | 4 | Planned | Technology and Equipment Funding |
| B08 | 4 | Planned | Sustainability and Impact Funding |
| B09 | 4 | Planned | Insurance Sector Capital |
| B10 | 4 | Planned | Digital Asset Business Funding |
| G01 | 1 | Planned | Record and protect the baseline |
| G02 | 1 | Planned | Define page roles and hierarchy |
| G03 | 1 | Planned | Create the contextual copy model |
| G04 | 1 | Planned | Build reusable solution components |
| G05 | 4 | Planned | Unify the process |
| G06 | 1 | Planned | Repair the route and category model |
| G07 | 3 | Planned | Build useful proof assets |
| G08 | 4 | Planned | Maintain the claims and scope register |
| G09 | 4 | Planned | Make comparisons usable on mobile |
| G10 | 1 | Planned | Preserve enquiry intent |
| G11 | Deferred | Deferred | Implement enquiry automation in a later phase |
| G12 | 4 | Planned | Maintain canonical routes and redirects |
| G13 | 4 | Planned | Improve the ten decision briefs |
| G14 | 4 | Planned | Align privacy and website information |
| G15 | 5 | Planned | Complete journey and accessibility verification |
| G16 | 5 | Planned | Establish conversion measurement |
| G17 | 1 | Planned | Add the two navigation routes |
| G18 | 1 | Planned | Build the advisory content model |
| G19 | 2 | Planned | Connect services to funding journeys |
| G20 | 4 | Planned | Build inactive login and recovery interfaces |
| L01.1 | 4 | Planned | Build the branded screen with labelled username and password, show/hide password, Sign In, Forgot Password and contact assistance. No public registration is required. |
| L01.2 | 4 | Planned | Place the lozenge button on the right of desktop navigation and at the top of the expanded mobile menu. No coming-soon, access-unavailable or public development-status notice. |
| L01.3 | 4 | Planned | Keep authentication unconnected. Prevent credential transmission, persistence and analytics capture. An attempted sign-in may return a neutral inability-to-complete message with contact assistance; never claim verified account or password validation. |
| L02.1 | 4 | Planned | Build the matching recovery screen with username/email, recovery action, return-to-login link and contact assistance. |
| L02.2 | 4 | Planned | Keep recovery unconnected. Do not transmit or retain entries or claim that a reset email was sent. Offer enquiries@frontiercpx.com for account assistance. |
| L02.3 | 4 | Planned | Verify routing, keyboard use, labels and responsive layout; confirm no account enumeration, credential storage or recovery network request. |
| P01.1 | 4 | Planned | Retain the hero brand line; replace the repeated philosophy sections with one concrete explanation of Frontier’s work. |
| P01.2 | 4 | Planned | Add one labelled example of a requirement moving from objective to provider questions; show process, not an invented deal. |
| P01.3 | 4 | Planned | Make both advisory support and funding solutions visible, then show evidence and a relevant next action. Distinguish paid advisory engagements from provider-paid funding activity. |
| P02.1 | 4 | Planned | Separate business objectives from sector contexts and show where the two overlap. |
| P02.2 | 4 | Planned | Give cards concise examples such as stock, machinery, development or shareholder liquidity. |
| P02.3 | 4 | Planned | Place one prominent uncertain-route option after the choices; test whether readers find their route without assistance. |
| P03.1 | 1 | Planned | Add separate working-capital, growth and refinance modules with relevant next actions. |
| P03.2 | 1 | Planned | Replace generic mechanics and commitments headings with cash-flow and repayment language. |
| P03.3 | 1 | Planned | Use a labelled cash-cycle illustration and short first-call checklist; publish funding bands only if supported. |
| P04.1 | 1 | Planned | Add a project-stage selector or clear stage links feeding the enquiry context. |
| P04.2 | 1 | Planned | Introduce a labelled development drawdown and exit illustration, with dependencies. |
| P04.3 | 1 | Planned | Change section language to project, equity, drawdowns, programme and exit; keep qualifications beside the relevant commitment. |
| P05.1 | 3 | Planned | Split the opening routes by use of proceeds and ownership objective. |
| P05.2 | 3 | Planned | Add a simple ownership and governance discussion guide, without invented valuations or returns. |
| P05.3 | 3 | Planned | Make the CTA about the shareholder decision and explain the agreed role before marketing execution support. |
| P06.1 | 3 | Planned | Retain the milestone concept; use runway, round and investor fit throughout the sections. |
| P06.2 | 3 | Planned | Add a round-readiness checklist and separate validation from scaling requirements. |
| P06.3 | 3 | Planned | Replace generic proof with a sample investment-summary structure and confirmed mandate coverage when available. |
| P07.1 | 3 | Planned | Replace the abstract opening with a requirement and deadline-led message. |
| P07.2 | 3 | Planned | Add an optional deadline field and explain how the first discussion is triaged. |
| P07.3 | 3 | Planned | Define the boundary between capital introductions and specialist restructuring work; keep relevant advice signposts visible. |
| P08.1 | 3 | Planned | Retain the scientific milestone headline and introduce stage-specific content paths. |
| P08.2 | 3 | Planned | Add a non-confidential milestone brief with evidence, budget, dependencies and runway. |
| P08.3 | 3 | Planned | Limit public scope to supported subsectors and activities; link laboratory equipment to the appropriate capital route. |
| P09.1 | 3 | Planned | Make operating-business investment the primary path and route company fundraising immediately to venture or growth capital. |
| P09.2 | 3 | Planned | Add an expenditure breakdown and implementation timeline, both illustrative. |
| P09.3 | 3 | Planned | Use installation, capacity and capability language rather than ambition or generic progress. |
| P10.1 | 3 | Planned | Separate operational investment and impact-led business growth before the main copy. |
| P10.2 | 3 | Planned | Add a commercial and outcome measurement example without claiming realised savings. |
| P10.3 | 3 | Planned | Use specific investment language and keep grant availability distinct from the core offering. |
| P11.1 | 3 | Planned | Carry forward the existing named entities and capital purposes; treat these as the agreed scope rather than an unanswered product decision. |
| P11.2 | 3 | Planned | Replace broad examples with approved scope and entity-specific preparation. |
| P11.3 | 3 | Planned | Retain an explicit capital-versus-cover distinction and use a specialist-requirement CTA. |
| P12.1 | 3 | Planned | Clarify the display name to reflect digital-asset businesses while preserving the existing URL. Do not extend the proposition to data centres, telecoms or cloud infrastructure. |
| P12.2 | 3 | Planned | Separate operating-company capital from token, retail investment and physical infrastructure routes. |
| P12.3 | 3 | Planned | Retain a simple activity and jurisdiction enquiry without requesting financial account access. |
| P13.1 | 4 | Planned | Rewrite around Frontier’s role and the client problem it addresses, not another philosophy statement. |
| P13.2 | 4 | Planned | Use a sample requirement summary or provider-question checklist as visible work quality evidence. |
| P13.3 | 4 | Planned | Link once to Approach, Expertise and Network; remove their repeated explanations here. |
| P14.1 | 4 | Planned | Consolidate How It Works into this page while preserving useful anchors and redirects. |
| P14.2 | 4 | Planned | Replace philosophy with concrete deliverables and responsibilities for each stage. |
| P14.3 | 4 | Planned | Explain preparation, commercial negotiation and transaction coordination within an agreed engagement. Distinguish client-paid advisory deliverables from provider-paid funding activity and specialist professional responsibilities. |
| P15.1 | 4 | Planned | Choose Our Approach as the canonical destination and migrate the useful detail. |
| P15.2 | 4 | Planned | Redirect this route and preserve or map #roles and other existing anchors. |
| P15.3 | 4 | Planned | Update homepage, About Us and supporting links, then test every redirected journey. |
| P16.1 | 4 | Planned | Replace placeholder metrics with verified facts before external promotion; do not substitute another invented number. |
| P16.2 | 4 | Planned | Show a capability-to-client-output matrix and an approved example deliverable. |
| P16.3 | 4 | Planned | Specify access and engagement scope factually, without implying an employed global team. |
| P17.1 | 4 | Planned | Create a provider-type view and a separate funding-purpose view with links between them. |
| P17.2 | 4 | Planned | Show one explicitly illustrative matching example and the reasons a provider may or may not fit. |
| P17.3 | 4 | Planned | Describe provider categories and supported purposes without names or logos. Keep relationship evidence internally; omit unverified counts rather than treating anonymity as proof. |
| P18.1 | 4 | Planned | Retain all five addresses and approved photographs, with each location clearly identified as proposed. Do not require agreements to finish this preview page. |
| P18.2 | 4 | Planned | Verify address format and coordinate purpose; avoid presenting approximate coordinates as a precise premises pin. |
| P18.3 | 4 | Planned | Add a central contact action with city context and preserve the distinction between city photography and premises. |
| P19.1 | 4 | Planned | Lead with the client relationship and useful specialist access; keep procedure concise. |
| P19.2 | 4 | Planned | Show who contacts the client and how updates are agreed. |
| P19.3 | 4 | Planned | Make the adviser route visible beside contact and in relevant supporting pages; publish only real commercial terms. |
| P20.1 | 4 | Planned | Replace the narrow-screen table with labelled cards or an accessible two-route comparison. |
| P20.2 | 4 | Planned | Clarify that rows are overlapping structure families, not mutually exclusive product definitions. |
| P20.3 | 4 | Planned | Move the relevant brief choice earlier and keep cost assumptions explicit in any future example. |
| P21.1 | 4 | Planned | Make uncertain-route results neutral and explain why each route is shown. |
| P21.2 | 4 | Planned | Expose preparation and enquiry actions for each result rather than only the first. |
| P21.3 | 4 | Planned | Test all 24 objective and next-step combinations plus back navigation and keyboard use. |
| P22.1 | 4 | Planned | Keep direct email as the working route and forms disconnected. Show no send success or transmission. Record automated email delivery as a later task under G11. |
| P22.2 | 4 | Planned | Carry service, solution, guide, adviser or city context into the contact page and a contextual email option without forcing repeated selection. |
| P22.3 | 4 | Planned | Add only useful optional qualification and replace generic hero copy with a direct invitation. |
| U01 | 4 | Planned | Privacy and This Preview |
| U02 | 4 | Planned | Website Information |
| U03 | 4 | Planned | Page Not Found |
| U04 | 4 | Planned | Legacy Ventures |
| U05 | 4 | Planned | Legacy Crypto |
| U06 | 4 | Planned | Legacy Destination |

## Definition of completion

Every primary ID is completed with evidence, deferred explicitly or blocked on a named input. Original 22 principal pages, ten briefs and six utility routes remain accounted for; add Services overview, seven services and login/recovery. Preserve old URLs and one process redirect. No statement that a business decision is settled proves that a feature has been implemented.

## Sprint documentation and closure

Each sprint has a **mandatory closeout gate**, detailed in its brief. Write development notes as work proceeds, then commit a closeout under `docs/sprints/closeouts/sprint-NN.md`. Use the [closeout template](closeout-template.md). No closeout records exist yet because implementation has not started.

Completion requires task-by-task status, change/decision record, tested code commit and preview, actual verification evidence, known issues and handover. Record engineering status and Andy's review status separately; neither a planning document nor a green deployment closes a sprint. Production approval remains separate.

[Closeout records](closeouts/README.md)
