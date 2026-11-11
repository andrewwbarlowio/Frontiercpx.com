# Site-wide editorial design system

Applied 11 November 2026 on `design/modern-facelift-v1`. The working homepage, rather than the later raster concepts, is the implementation reference. No production merge is included.

## Shared foundation

`assets/editorial-system.css` supplies the design across all 48 routes. `homepage-pilot.css` retains homepage campaign geometry. Manrope is self-hosted throughout; no guessed serif typeface is introduced. The approved outlined wordmark and F remain unchanged.

Navy `#0D233D`, tint `#193853`, paper `#F5F3EE`, ink `#191F24`, muted text `#586168`. Dark surfaces use the homepage gradient. Primary actions use `#315F86`, warm-white text `#F6F3ED`, border `#547593`, 7px corners, 52px minimum height and 15px labels. Hover uses `#3B6E97` / `#6C91AF`. Shared focus and reduced-motion rules apply.

Content width is 1216px with 48px desktop and 20-24px mobile margins. Section spacing reduces from 96px to 58px on small phones. Grids allow long content to shrink and wrap without clipping.

## Page families

| Family | Application |
| --- | --- |
| Homepage | Existing campaign, frame, F and actions retained. |
| Advisory overview and seven services | Contextual photographic lead, unboxed service/output grids and dark deliverable features. |
| Ten funding pages | Natural photography replaces numerical heroes; existing suitability, purpose, structure, commitments and questions remain. |
| Funding overview | Refined image-led cards and common actions. |
| About, Expertise, Approach, Advisers | Contextual leads, editorial columns and clearer process/capability layouts. Existing matching images are moved into the lead rather than repeated below. |
| Funding network and Global Presence | Refined category/city layouts; statuses, caveats and location attribution remain. |
| Guide and comparison | Consistent form controls, result panels and scrollable comparison tables. |
| Contact, login, legal and briefs | Quiet functional layouts with shared type, colour and controls; print rules retained. |

## Focus frame

`scripts/editorial-system.mjs` provides explicit route-to-scene mapping and the framed photographic component. It reads the actual F outline from the approved white SVG. Frame and F share opaque `#F6F3ED`, with no separate transparency, shadow or glow.

Inner-page lead photographs retain a 3:2 composition, with a 4% inset frame. Frame radius is 18px desktop / 14px mobile; stamp 34px / 28px, inset 20px / 16px. Homepage framing remains separately art-directed. Review head/roof clearance whenever imagery or crop changes. Secondary imagery and city photography are not automatically stamped.

Photos are illustrative, not evidence of clients, transactions, Frontier staff or premises. Alt text describes visible scenes. User-requested image-generation captions are omitted; location credits remain.

## Contact consistency

All 25 enquiry locations share required name, email and phone, optional non-confidential message and **Send**. The former topic, business-name and contact-method fields are removed. Inner-page fee/sharing information remains available through a compact disclosure.

No backend was added. Forms explicitly remain disconnected previews that send and store nothing. Local validation and direct email remain. This rollout does not make enquiry delivery production-ready.

## Verification

- Build passes: 48 routes, 4,163 local links, 484 asset references, unique IDs, static content, script syntax and disconnected-preview checks.
- `node scripts/qa-editorial.mjs`: all routes have common style/font; 25 simple forms; 22 focus frames; responsive assets exist; no retired numerical hero references remain.
- Generated header and footer markup matches the saved baseline on all 48 routes. Navigation labels and destinations are preserved.
- Browser checks: 13 representative routes at 320, 390 and 768px (39 cases), plus the same 13 desktop routes. No page overflow or out-of-bounds text/control elements remains; no broken completed images observed. Static checks also cover lazy image files.
- Corrected legacy grid intrinsic sizing and oversized mobile illustration containers. Reviewed advisory/funding leads and dark example sections; corrected dark-feature paragraph/callout colours.
- Tested required-field errors, valid preview result, mobile menu/accordion/Escape, desktop seven-service dropdown and Funding Guide results.
- Physical-device, screen-reader and printed output testing are not claimed. The remote Vercel preview required authentication; browser checks used the matching local build.

The QA script creates a temporary `dist/_editorial-qa` browser fixture. Build clears it; it is not a production route.
