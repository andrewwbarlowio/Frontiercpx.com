# Verification — development pass 2

Date: 9 November 2026. Status: ready for structural review; exact pixel and motion parity remain unaccepted.

## Automated build checks

`node scripts/build.mjs` succeeds: 114 generated routes, 80 unique fictional profiles, 12 unique fictional articles and 23 demo office records. Checks cover 9,887 local link references and 2,683 asset references; no missing targets, outbound href/src requests or connected form actions. JavaScript syntax passes. These checks run during every Vercel build.

## Browser checks

- All 24 representative corporate, detail, legal and utility templates opened directly at desktop width: no horizontal overflow or broken loaded images.
- All 24 templates checked at 390px and 768px container widths (48 checks); all passed after repairing Ventures/Crypto banner overflow.
- Desktop menus, full-screen search and unique profile results work. Search, overlays and galleries include focus handling and Escape support.
- Directory combined filters, empty results, grid/list, URL state and pagination checked. Page 2 starts at record 41; London/Credit produces four matching profiles, with a distinct working detail page.
- News category/business/year filtering, unique article navigation and load-more checked. Load-more expands nine listed cards to eleven, plus the featured item.
- Locations pin selection, Credit filtering (five pins), Europe tab (six cards) and View on map checked.
- Platform category selection, gallery next-image and slide counter checked. Native anchor tab targets repaired across platform and region tabs.
- Disconnected investor form accepts valid demo inputs and displays “nothing has been sent or saved”; no service integration exists.
- No application JavaScript errors observed in inspected browser logs. This is functional QA, not an independent accessibility audit.

## Limits

Vercel preview protection prevents anonymous cloud-page visual verification, and the connected Vercel account cannot access this new project. Browser checks used the same generated build locally. Deployment status is checked separately through GitHub's Vercel integration.

Open-source serif substitution, neutral image/video placeholders and locally implemented animation differ from the reference. Original proprietary typography and exact scroll choreography are not reproduced. External business/microsite trees and portal services remain destination placeholders. Demo records preserve layout density and interactions; they are not a migration of Bain's employee/history database.

Earlier defects in docs/replica-gap-assessment.md are historical evidence. See docs/development-pass-2.md for the implemented follow-up; structural review is still required before production approval.

## Mobile hamburger parity follow-up

Replaced the simplified accordion hamburger with a full-screen navy menu following the supplied mobile screenshots: corporate links, local sites, all ten businesses in reference order, white search card and investor placeholder. A fixed white logo/close bar stays visible while the content scrolls independently. Background is inert and scroll-locked; focus is trapped, Escape/close restore the trigger, and resize to desktop dismisses the menu.

Browser checked at 320px, 390px and 768px container widths with no menu horizontal overflow; all 18 navigation links present. Search-card handoff returns the distinct Partner 07 result. Escape restores focus, unlocks scrolling and removes background inert state. Tested both home and About templates. Shared desktop navigation remains in place. This pass addresses the screenshot discrepancy, not acceptance of every site animation or pixel.
