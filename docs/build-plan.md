# Frontier CP website replica plan

Status: IN PROGRESS — 9 November 2026.
Branch: build/bain-structure-replica. Production main must not be merged or promoted without Andy's review.

## Goal
Reproduce the current Bain Capital corporate site's page hierarchy, section order, image geometry and responsive interactions using Frontier placeholder branding and neutral content. All form submissions are demonstration-only. Rewrite copy, replace imagery and connect services later.

## Scope
Core corporate pages: home, about, sustainability overview and its five topic pages, careers, people directory and profile template, news archive and article template, locations, ventures, crypto and six legal pages. External business sites and specialist healthcare/technology microsites are tracked destinations, not full separate-site rebuilds. Historical articles and every employee profile are represented by templates and demonstration records.

## Delivery sequence
- [x] Save reference hierarchy.
- [x] Create isolated branch and this plan.
- [ ] Inspect reference desktop geometry and menus.
- [ ] Capture all scoped page structures and local anchors.
- [ ] Implement matching shared shell and placeholder image slots.
- [ ] Implement core landing/detail templates.
- [ ] Implement local navigation, tabs, search, filters and demonstration forms.
- [ ] Produce Vercel preview from this branch.
- [ ] Check desktop and narrow layouts, links, form isolation and console errors.
- [ ] Record differences and remaining work honestly.
- [ ] Andy reviews preview; production release requires approval.

## Acceptance
Each route renders directly and on refresh. Section order and page-specific layouts follow reference. Image slots preserve intended aspect/cropping. Desktop and mobile navigation work with keyboard access. Forms never transmit or store entered information. No copied investor portal or real claims about Frontier's AUM, offices, staff or transactions. No tracker, remote submission, live login or reference-site navigation remains. Search/directory/archive use local demonstration records. Reduced motion and visible focus are supported. Placeholder content is editable independently of styling.

## Verification record
To be updated with tested routes, widths, interactions, preview deployment, and known gaps. Exact pixel parity must not be claimed without side-by-side visual evidence. No backend or production publishing is in this phase.
