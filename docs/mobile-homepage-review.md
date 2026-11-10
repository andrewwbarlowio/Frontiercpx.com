# Full mobile homepage review and repairs

10 November 2026. Reviewed all eight homepage sections and footer visually at a 390px container width. Earlier overflow/load checks missed nested overlapping layouts; those checks did not establish mobile visual completeness.

## Findings and repairs

- Hero: excessive vertical gaps and automatic slide changes while reading. Reordered copy before image, shortened/cropped the mobile artwork canvas, removed the reserved copy height and stopped automatic progression below desktop width. Manual controls remain.
- Sector spotlight: inherited horizontal image/text positioning combined with a narrow overflow strip, causing substantial clipping and overlap. Mobile now has full-width stacked cards, image above text; tablet uses two columns. Desktop retains three columns.
- Platform: reduced mobile label size and removed word-breaking that split labels awkwardly. Category selection and Back tested.
- Sustainability: retained image/copy flow; improved wrapping and touch height of the CTA.
- Team: removed the viewport-height minimum, reduced the section height and strengthened the text overlay for the mobile photo crop.
- News: removed inherited faded opacity, restored heading contrast and Frontier button styling.
- Locations: removed the desktop absolute map layer on mobile; filters/tabs now precede the map in normal document flow. Region content and selected-office callouts expand without overlapping controls. Removed extra inherited top padding.
- Footer: wrapped legal links with adequate touch height. Menu open/close also checked.

## Verification

Checked 320px, 390px, 430px and 768px containers. No page horizontal overflow. All three sector cards have image bottom <= text top, equal image/text widths, and the map starts below its tab controls. At 390px, hero height fell from about 985px to 718px. Platform Credit/Back, Europe region, View on map (Dublin), mobile menu and footer inspected. All visible loaded images worked. Desktop retains three sector columns and no horizontal overflow. Dependency-free 114-route build checks pass.

Mobile layout changes are scoped to the homepage and widths below 992px. This review does not claim that every other page has received equivalent full-section visual QA. Production remains unchanged.
