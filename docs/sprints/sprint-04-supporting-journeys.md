# Sprint 4 Supporting journeys and client login

**Status:** Implementation delivered at `d3975ff565e593c24a327c9c7f4c3c40990bd759`. 58 tasks Complete; seven utility/routing acceptance items remain In progress for deployed verification and statutory particulars. Owner review Pending. See [closeout](closeouts/sprint-04.md).

**Primary work items:** 65. Owners: development for implementation and evidence; Andy/Roger for business facts and release decisions. No fixed duration or dates are committed.

## Outcome

Complete the site around the advisory and funding pages, including decision support and the inactive login screens.

## Scope

Update Home, Funding Solutions overview, About, Approach, Expertise, Network, Presence, Advisers, comparison, guide and Contact. Consolidate How It Works. Complete ten briefs, six utility/legacy routes and login/recovery. Reconcile privacy and company details with current direct email. This is the largest batch; execute in the sub-stages below.

## Dependencies and early preparation

Funding/service page content from Sprints 1–3. Process and claims work must start during Sprint 1 and be finalised here. Confirm company statutory particulars and supporting evidence before promoting claims; keep proposed offices and anonymous providers. G11 is excluded.

## Execution sequence

1. Finalise shared process, claims, company/fee/privacy wording and supporting pages.
2. Complete comparison, guide, decision briefs and utility redirects.
3. Complete Contact, login/recovery and the deployed whole-site walkthrough.

These are delivery sub-stages inside Sprint 4, not extra tasks or a promise of equal sprint duration.

## Work items

Each ID has one primary sprint assignment. The full source specification and its page acceptance criteria remain binding; early contributions are not duplicate task completion.

### G05

- [x] Unify the process — M effort  |  Dependencies G02 D04 Build Use Our Approach as the canonical five-stage explanation. Migrate useful role, fee and information-sharing content from How It Works. Render shorter process strips from the same data. Done when There is one source of process truth. Stage labels and responsibilities agree across pages; #roles survives; no duplicated full process page remains after redirect.

### G08

- [x] Maintain the claims and scope register — M effort  |  Dependencies D01–D06 Build For each location, count, credential, service capability and access claim, record exact wording, evidence, rights to use, owner and status. Check related cards, metadata and downloadable briefs too. Done when Each promoted claim has supporting evidence and approved wording. Unverified content is visibly provisional or absent. Biographies are not added as a substitute for proof.

### G09

- [x] Make comparisons usable on mobile — M effort  |  Dependencies G06 Build Replace reliance on horizontal scrolling with labelled mobile cards or a two-route comparison. Preserve route, structure, commitments and question fields in meaningful reading order. Done when At 320 CSS pixels all fields can be read without side-scrolling a wide table. Keyboard and screen-reader order remains coherent; category overlap is explained.

### G12

- [ ] Maintain canonical routes and redirects — M effort  |  Dependencies G05 G06 Build Update Vercel routing, local fallbacks, internal links, canonical metadata and launch sitemap together. Preserve old recognised product title mappings and meaningful anchors. Done when Direct URLs, encoded queries, old product links, #roles and unknown-query recovery work on the deployed environment without loops or misleading catch-all sales redirects.

### G13

- [x] Improve the ten decision briefs — L effort  |  Dependencies G03 G04 G06 Build Use each parent page’s approved content and name, adding route-specific discussion fields. Include source date, route and scope. Provide print or save behaviour with a designed print stylesheet. Done when Every brief remains useful alone, returns to the correct enquiry, and has inspected print pagination without clipped content. Edits to the parent data do not leave an old proposition in the brief.

### G14

- [x] Align privacy and website information — M effort  |  Dependencies D01 D04 D07 D08; G11 only for later automated forms Build Align company, advisory fees, provider remuneration, direct email and information handling with confirmed decisions. Explain the current disconnected forms. Update privacy wording again when automation or document collection changes; no G11 launch dependency now. Done when The notice and website information match the implemented system and current entity. Any appropriate specialist review is complete before live collection. No unverified certification or privacy guarantee is added.

### G20

- [x] Build inactive login and recovery interfaces — M effort | Dependencies G17 D07 D08 Build Create both branded screens without authentication or recovery integration. Show no coming-soon or availability notice. Keep credentials out of transmission, storage and analytics. Done when The login and recovery acceptance criteria pass. No actual login, fabricated account validation, reset-email confirmation or unintended credential request occurs.

### P01.1

- [x] Retain the hero brand line; replace the repeated philosophy sections with one concrete explanation of Frontier’s work.

### P01.2

- [x] Add one labelled example of a requirement moving from objective to provider questions; show process, not an invented deal.

### P01.3

- [x] Make both advisory support and funding solutions visible, then show evidence and a relevant next action. Distinguish paid advisory engagements from provider-paid funding activity.

### P02.1

- [x] Separate business objectives from sector contexts and show where the two overlap.

### P02.2

- [x] Give cards concise examples such as stock, machinery, development or shareholder liquidity.

### P02.3

- [x] Place one prominent uncertain-route option after the choices; test whether readers find their route without assistance.

### P13.1

- [x] Rewrite around Frontier’s role and the client problem it addresses, not another philosophy statement.

### P13.2

- [x] Use a sample requirement summary or provider-question checklist as visible work quality evidence.

### P13.3

- [x] Link once to Approach, Expertise and Network; remove their repeated explanations here.

### P14.1

- [x] Consolidate How It Works into this page while preserving useful anchors and redirects.

### P14.2

- [x] Replace philosophy with concrete deliverables and responsibilities for each stage.

### P14.3

- [x] Explain preparation, commercial negotiation and transaction coordination within an agreed engagement. Distinguish client-paid advisory deliverables from provider-paid funding activity and specialist professional responsibilities.

### P15.1

- [x] Choose Our Approach as the canonical destination and migrate the useful detail.

### P15.2

- [x] Redirect this route and preserve or map #roles and other existing anchors.

### P15.3

- [x] Update homepage, About Us and supporting links, then test every redirected journey.

### P16.1

- [x] Replace placeholder metrics with verified facts before external promotion; do not substitute another invented number.

### P16.2

- [x] Show a capability-to-client-output matrix and an approved example deliverable.

### P16.3

- [x] Specify access and engagement scope factually, without implying an employed global team.

### P17.1

- [x] Create a provider-type view and a separate funding-purpose view with links between them.

### P17.2

- [x] Show one explicitly illustrative matching example and the reasons a provider may or may not fit.

### P17.3

- [x] Describe provider categories and supported purposes without names or logos. Keep relationship evidence internally; omit unverified counts rather than treating anonymity as proof.

### P18.1

- [x] Retain all five addresses and approved photographs, with each location clearly identified as proposed. Do not require agreements to finish this preview page.

### P18.2

- [x] Verify address format and coordinate purpose; avoid presenting approximate coordinates as a precise premises pin.

### P18.3

- [x] Add a central contact action with city context and preserve the distinction between city photography and premises.

### P19.1

- [x] Lead with the client relationship and useful specialist access; keep procedure concise.

### P19.2

- [x] Show who contacts the client and how updates are agreed.

### P19.3

- [x] Make the adviser route visible beside contact and in relevant supporting pages; publish only real commercial terms.

### P20.1

- [x] Replace the narrow-screen table with labelled cards or an accessible two-route comparison.

### P20.2

- [x] Clarify that rows are overlapping structure families, not mutually exclusive product definitions.

### P20.3

- [x] Move the relevant brief choice earlier and keep cost assumptions explicit in any future example.

### P21.1

- [x] Make uncertain-route results neutral and explain why each route is shown.

### P21.2

- [x] Expose preparation and enquiry actions for each result rather than only the first.

### P21.3

- [x] Test all 24 objective and next-step combinations plus back navigation and keyboard use.

### P22.1

- [x] Keep direct email as the working route and forms disconnected. Show no send success or transmission. Record automated email delivery as a later task under G11.

### P22.2

- [x] Carry service, solution, guide, adviser or city context into the contact page and a contextual email option without forcing repeated selection.

### P22.3

- [x] Add only useful optional qualification and replace generic hero copy with a direct invitation.

### B01

- [x] Business Funding — /briefs/credit  |  M effort  |  G13 and approved parent page Work Add a cash-cycle outline and a short existing-facility checklist. Heading direction The questions behind your next facility. Acceptance Use the parent page’s final name, scope and preparation points. Include source date, correct enquiry link and the agreed route-specific outline. Inspect print pagination and mobile reading; keep assumptions labelled. Do not require an email address to read or print. Specific risk to test A reader can mistake a generic brief for a provider-specific quotation or assessment.

### B02

- [x] Property Finance — /briefs/real-estate  |  M effort  |  G13 and approved parent page Work Add a project summary with costs, equity, programme and exit assumptions; leave values for the user. Heading direction Put the project and the funding on the same page. Acceptance Use the parent page’s final name, scope and preparation points. Include source date, correct enquiry link and the agreed route-specific outline. Inspect print pagination and mobile reading; keep assumptions labelled. Do not require an email address to read or print. Specific risk to test A static generic document can circulate while project costs and timetable change.

### B03

- [x] Growth and Ownership Capital — /briefs/private-equity  |  M effort  |  G13 and approved parent page Work Add proceeds purpose, desired ownership outcome and governance questions for shareholders. Heading direction Prepare the shareholder conversation. Acceptance Use the parent page’s final name, scope and preparation points. Include source date, correct enquiry link and the agreed route-specific outline. Inspect print pagination and mobile reading; keep assumptions labelled. Do not require an email address to read or print. Specific risk to test A high valuation can dominate discussion while rights and conditions receive too little attention.

### B04

- [x] Venture Funding — /briefs/ventures  |  M effort  |  G13 and approved parent page Work Add a round outline and milestone budget headings, without inventing investment assumptions. Heading direction A round built around the next milestone. Acceptance Use the parent page’s final name, scope and preparation points. Include source date, correct enquiry link and the agreed route-specific outline. Inspect print pagination and mobile reading; keep assumptions labelled. Do not require an email address to read or print. Specific risk to test An overly polished brief can look investor-ready while essential diligence remains incomplete.

### B05

- [x] Complex Funding — /briefs/special-situations  |  M effort  |  G13 and approved parent page Work Add deadline, change, stakeholders and required-consent fields; avoid sensitive detail in the web form. Heading direction The situation, the deadline and the next decision. Acceptance Use the parent page’s final name, scope and preparation points. Include source date, correct enquiry link and the agreed route-specific outline. Inspect print pagination and mobile reading; keep assumptions labelled. Do not require an email address to read or print. Specific risk to test The brief must not be treated as an emergency professional assessment.

### B06

- [x] Life Sciences Funding — /briefs/life-sciences  |  M effort  |  G13 and approved parent page Work Provide non-confidential milestone, evidence, budget and runway headings with subsector context. Heading direction Frame the capital around the scientific milestone. Acceptance Use the parent page’s final name, scope and preparation points. Include source date, correct enquiry link and the agreed route-specific outline. Inspect print pagination and mobile reading; keep assumptions labelled. Do not require an email address to read or print. Specific risk to test Circulation can inadvertently include unpublished work if the intended boundary is unclear.

### B07

- [x] Technology and Equipment Funding — /briefs/tech-opportunities  |  M effort  |  G13 and approved parent page Work Focus this brief on the investment and cost categories; route founders to the relevant equity brief. Heading direction Prepare the investment before the installation. Acceptance Use the parent page’s final name, scope and preparation points. Include source date, correct enquiry link and the agreed route-specific outline. Inspect print pagination and mobile reading; keep assumptions labelled. Do not require an email address to read or print. Specific risk to test A supplier quote can conceal excluded integration or service costs if the breakdown is absent.

### B08

- [x] Sustainability and Impact Funding — /briefs/double-impact  |  M effort  |  G13 and approved parent page Work Add two variants or clear branches: investment economics and impact-led growth evidence. Heading direction Cost the improvement and define the evidence. Acceptance Use the parent page’s final name, scope and preparation points. Include source date, correct enquiry link and the agreed route-specific outline. Inspect print pagination and mobile reading; keep assumptions labelled. Do not require an email address to read or print. Specific risk to test The presence of an environmental objective can be mistaken for preferential funding terms.

### B09

- [x] Insurance Sector Capital — /briefs/insurance  |  M effort  |  G13 and approved parent page Work Tailor preparation to the retained existing insurance entity coverage; remove the obsolete request to reconfirm the product set. Distinguish business capital from cover and underwriting capacity. Heading direction Define the insurance business requirement. Acceptance Use the parent page’s final name, scope and preparation points. Include source date, correct enquiry link and the agreed route-specific outline. Inspect print pagination and mobile reading; keep assumptions labelled. Do not require an email address to read or print. Specific risk to test A forwarded brief may appear to evidence specialist capability beyond the agreed service.

### B10

- [x] Digital Asset Business Funding — /briefs/crypto  |  M effort  |  G13 and approved parent page Work Align the display name and activity questions with the parent page’s digital-asset business audience. Keep /briefs/crypto stable in this release. Heading direction Describe the business behind the digital assets. Acceptance Use the parent page’s final name, scope and preparation points. Include source date, correct enquiry link and the agreed route-specific outline. Inspect print pagination and mobile reading; keep assumptions labelled. Do not require an email address to read or print. Specific risk to test A standalone forwarded document can lose the surrounding site explanation and attract the wrong audience.

### U01

- [ ] Privacy and This Preview — /privacy-policy  |  M effort  |  D01 D04 D07 D08 G14 Work Align the notice with Frontier AI Group Limited, direct email, disconnected forms and the approved handling baseline. Update it before later automated collection or document exchange begins. Intended behaviour Map actual data flows, recipients, retention and contacts; make the notice reflect the receiving workflow before enabling it. Acceptance Confirm deployed response and destination, internal links and page metadata. For privacy and website information, verify the content against the actual entity, system and scope before live enquiries.

### U02

- [ ] Website Information — /terms-use  |  M effort  |  D01 D04 D07 D08 G14 Work Use Frontier AI Group Limited, Lyndon House, 79 Bury Road, Tottington, Bury, BL8 3EU and enquiries@frontiercpx.com. State the advisory and funding remuneration models accurately; verify statutory company particulars before publication. Intended behaviour Provide verified entity and contact information and align the description to agreed scope and remuneration. Acceptance Confirm deployed response and destination, internal links and page metadata. For privacy and website information, verify the content against the actual entity, system and scope before live enquiries.

### U03

- [ ] Page Not Found — /404  |  S effort  |  G12 Work Test true status, navigation and recovery paths on the deployed domain; do not redirect unrelated missing pages to a sales page. Intended behaviour Offer a concise route guide and contact alternative while retaining a true 404 response. Acceptance Confirm deployed response and destination, internal links and page metadata. For privacy and website information, verify the content against the actual entity, system and scope before live enquiries.

### U04

- [ ] Legacy Ventures — /ventures  |  S effort  |  G12 Work Check the deployed response and destination; exclude the retired route from the launch sitemap. Intended behaviour Maintain one direct permanent redirect to the venture page and preserve useful context. Acceptance Confirm deployed response and destination, internal links and page metadata. For privacy and website information, verify the content against the actual entity, system and scope before live enquiries.

### U05

- [ ] Legacy Crypto — /crypto  |  S effort  |  G12 Work Test a direct redirect to the final named page, with the business-capital boundary retained. Intended behaviour Preserve the direct redirect to the retained digital specialist route, with the clarified digital-asset business display name. Acceptance Confirm deployed response and destination, internal links and page metadata. For privacy and website information, verify the content against the actual entity, system and scope before live enquiries.

### U06

- [ ] Legacy Destination — /destination  |  M effort  |  G06 G12 Work Test all ten supported title mappings, unknown queries, encoded titles and target anchors on Vercel; verify final canonical URLs. Intended behaviour Keep recognised mappings explicit, update final route names and provide the guide for unmatched requests. Acceptance Confirm deployed response and destination, internal links and page metadata. For privacy and website information, verify the content against the actual entity, system and scope before live enquiries.

### L01.1

- [x] Build the branded screen with labelled username and password, show/hide password, Sign In, Forgot Password and contact assistance. No public registration is required.

### L01.2

- [x] Place the lozenge button on the right of desktop navigation and at the top of the expanded mobile menu. No coming-soon, access-unavailable or public development-status notice.

### L01.3

- [x] Keep authentication unconnected. Prevent credential transmission, persistence and analytics capture. An attempted sign-in may return a neutral inability-to-complete message with contact assistance; never claim verified account or password validation.

### L02.1

- [x] Build the matching recovery screen with username/email, recovery action, return-to-login link and contact assistance.

### L02.2

- [x] Keep recovery unconnected. Do not transmit or retain entries or claim that a reset email was sent. Offer enquiries@frontiercpx.com for account assistance.

### L02.3

- [x] Verify routing, keyboard use, labels and responsive layout; confirm no account enumeration, credential storage or recovery network request.

## Acceptance criteria

One canonical process; 24 guide combinations; ten readable/printable briefs; direct redirects; current email route and disconnected forms. Partners stay unnamed; all five locations retain proposed labels/photos. Client Login is desktop right/mobile top, with standard username/password and recovery UI, no availability notice, no credential transmission/storage and no fabricated reset success.

## Verification and evidence

Run each route/redirect on deployed preview, inspect ten print layouts, check 24 guide cases, keyboard/focus/mobile menu, email context, login/recovery network/storage behaviour, privacy and fee wording.

## Review checkpoint

Preview the full journey from Home through Services/Funding, guide/brief and Contact, then login/recovery. Provide page checklist and evidence before final regression.

## Boundaries

Keep the existing branch and approved brand/assets. Forms, authenticated login, password recovery delivery and document-platform setup remain deferred. No customer outreach, real credentials or transaction data in tests. Do not mark a task complete without implementing commit and evidence.

## References

- [Sprint index and task register](README.md)
- [Complete implementation specification](implementation-specification.md)
- [Deferred operations](deferred-operations.md)

## Mandatory sprint closeout gate

A sprint must not be marked Complete or Closed until its development write-up is committed and the following checks pass. Keep the record in [closeouts](closeouts/) as `sprint-NN.md`, using the [closeout template](closeout-template.md).

- [ ] Every assigned task has a final status, implementing commit, evidence and any remaining action. Never silently carry incomplete work into the next sprint.
- [ ] Explain what changed and why, including relevant source files, content schemas, routes, shared components and behaviour. Record material decisions and deviations from the agreed specification.
- [ ] Record the exact tested code commit, branch, environment and preview URLs. If the closeout is a later documentation-only commit, distinguish it from the tested code commit.
- [ ] Record checks actually run, their results and evidence. Identify unrun checks, pre-existing failures, browser/device/assistive-technology limits and relevant mobile/desktop screenshots. Do not infer functional success from deployment alone.
- [ ] Document known defects, deferred work, risks and follow-up task/owner. Any change to agreed scope must have an explicit reason and decision; unrelated deferred integrations remain excluded.
- [ ] Update the master task register and affected architecture, content, route or operating documentation so the next sprint can continue without this conversation.
- [ ] Record the checkpoint demonstration and Andy's review status accurately as Not requested, Pending, Accepted or Changes requested. Engineering completion does not imply owner acceptance.
- [ ] Provide handover notes and rollback/recovery guidance where relevant. No new credentials or customer information in documentation.

**Pass rule:** required current-scope acceptance checks pass and the closeout evidence is complete, or each exception has an explicit recorded disposition and owner. Unresolved blockers mean the sprint remains In progress or Blocked. The next sprint may perform independent preparation, but dependent implementation must not assume an unmet acceptance condition is satisfied. Owner release approval remains a separate gate before merge/production release.

