# Sprint 1 Foundations and pilot pages

**Status:** Planned. No implementation started by these documents.

**Primary work items:** 17. Owners: development for implementation and evidence; Andy/Roger for business facts and release decisions. No fixed duration or dates are committed.

## Outcome

Establish the shared architecture and demonstrate three complete buyer journeys before scaling the copy.

## Scope

Inventory branch/main/38 existing routes and preserve rollback commit. Define Services/Funding hierarchy, required content fields, allowlisted contact context and route classifications. Build Property Finance, Business Funding and Financial Modelling, with distinct copy, examples and client outputs. Establish menus with existing valid destinations; complete new destination links as pages arrive.

## Dependencies and early preparation

Existing branch head and current source must be inspected. D01–D04/D07 direction is already recorded. Begin G05 process-data design and G07 pilot illustrations here; their final acceptance belongs to later sprints. G18 template and A03 pilot are developed iteratively, not as a circular gate.


## Work items

Each ID has one primary sprint assignment. The full source specification and its page acceptance criteria remain binding; early contributions are not duplicate task completion.

### G01

- [ ] Record and protect the baseline — S effort  |  Dependencies None Build Inventory current branch head, main, routes, source files and deployed preview. Retain the starting commit for rollback and record existing failures separately. Done when The working tree matches the selected head; all 38 current routes are accounted for and existing build checks pass or pre-existing failures are documented.

### G02

- [ ] Define page roles and hierarchy — M effort  |  Dependencies G01 Build Map Home to orientation, Advisory Services to client support, Funding Solutions to funding needs, About to operating role, Approach to process, Expertise to evidence, Network to capital access and Presence to proposed geography. Keep Advisers distinct. Done when Each principal page has one primary reader task and action. Shared sections link to the canonical explanation instead of copying it in full.

### G03

- [ ] Create the contextual copy model — L effort  |  Dependencies G01 G02 Build Add explicit per-solution fields for hero, fit, use cases, mechanics, commitments, preparation, FAQs and enquiry copy. Keep editorial content separate from rendering and navigation labels. Require all ten records to supply these fields. Done when The renderer has no generic marketing fallback for those fields. Missing fields fail the build. Current anchor IDs stay stable and text remains meaningful in initial HTML.

### G04

- [ ] Build reusable solution components — L effort  |  Dependencies G03 Build Retain a consistent section order but allow relevant decision aids: project lifecycle, cash cycle, cost breakdown or readiness outline. Pilot Property Finance and Business Funding before rollout. Done when At 320, 390, 768 and desktop widths, both pilots are legible and usable. Their headings, examples and enquiry prompts reflect different buying situations without duplicating component code.

### G06

- [ ] Repair the route and category model — L effort  |  Dependencies G02 D02 D03 Build Separate business objectives, capital structures, sector contexts and provider types. Correct uncertain guide routing and technology-company routing. Map provider categories to purposes rather than blending the classifications. Done when All objectives and specialist links reach relevant pages. Uncertainty produces neutral help. Confirmed specialist naming is applied consistently across navigation, guide, briefs and forms.

### G10

- [ ] Preserve enquiry intent — M effort  |  Dependencies G06 Build Carry source page, service, selected goal, project stage, city or adviser context into contact. Use allowlisted values and let visitors change topic. In this release offer contextual direct email; retain form context for the later integration. Done when A visitor never has to reselect a known route unnecessarily. Invalid context falls back neutrally. Back navigation and reset behaviour are tested without saving personal financial information.

### G17

- [ ] Add the two navigation routes — M effort | Dependencies G02 D04 Build Place Advisory Services and Funding Solutions side by side, each with overview and individual-page links. Add Client Login on desktop right and at the top of the mobile menu. Preserve existing supporting pages. Done when Desktop and mobile menus expose both routes and login, with visible focus, keyboard access, correct expanded state and usable touch targets.

### G18

- [ ] Build the advisory content model — M effort | Dependencies G03 D04 Build Add required service fields for audience, trigger, scope, outputs, process, fees, boundaries, related funding and enquiry. Create one reusable service template with distinctive examples. Done when All seven service records pass completeness checks; A03 establishes the template; no generic marketing fallback or invented team capacity.

### P03.1

- [ ] Add separate working-capital, growth and refinance modules with relevant next actions.

### P03.2

- [ ] Replace generic mechanics and commitments headings with cash-flow and repayment language.

### P03.3

- [ ] Use a labelled cash-cycle illustration and short first-call checklist; publish funding bands only if supported.

### P04.1

- [ ] Add a project-stage selector or clear stage links feeding the enquiry context.

### P04.2

- [ ] Introduce a labelled development drawdown and exit illustration, with dependencies.

### P04.3

- [ ] Change section language to project, equity, drawdowns, programme and exit; keep qualifications beside the relevant commitment.

### A03.1

- [ ] Write contextual audience, scope, preparation and FAQs; distinguish advisory support from the associated funding route.

### A03.2

- [ ] Specify outputs: Assumption-led model, scenario summary and explanation of funding gaps. Include one clearly labelled illustrative example.

### A03.3

- [ ] Add engagement/fee wording, process, related links and the contextual enquiry action. Related funding: Property Finance, Business Funding, Venture and Growth/Ownership.

## Acceptance criteria

Three pilot pages work at 320/390/768 pixels and desktop; substantive copy is in initial HTML; required fields fail validation when missing. Service fees and funding-provider remuneration are clear. Menu and contextual email navigation work. No form or auth delivery is enabled.

## Verification and evidence

Build/content checks; route inventory and link checks; keyboard/menu/focus checks; screenshots of all three pilots on mobile and desktop; no network transmission from form prototypes.

## Review checkpoint

Preview the three pilot URLs together and demonstrate the menu and contextual contact route. Record branch, commit, preview URL and known limits.

## Boundaries

Keep the existing branch and approved brand/assets. Forms, authenticated login, password recovery delivery and document-platform setup remain deferred. No customer outreach, real credentials or transaction data in tests. Do not mark a task complete without implementing commit and evidence.

## References

- [Sprint index and task register](README.md)
- [Complete implementation specification](implementation-specification.md)
- [Deferred operations](deferred-operations.md)
