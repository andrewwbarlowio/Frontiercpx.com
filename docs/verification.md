# Structural draft verification

Date: 9 November 2026. Status: REVIEWABLE STRUCTURAL DRAFT, not exact-parity acceptance.

## Delivered
- 22 corporate reference routes plus local search and destination placeholders (24 routes).
- Page-specific section markup and local responsive layout styles.
- Neutral Frontier preview branding and authored SVG image placeholders.
- Local desktop/mobile navigation, search dialog, platform and sustainability tabs, directory name filtering, grid/list view and demonstration pagination.
- Archive category controls and native form submission interception.
- Local media-placeholder dialogs and a non-persistent consent UI.
- CSP blocks network connections, frames, objects and form submissions. No reference executable scripts or analytics are loaded.
- Draft PR only; production main has not been merged or promoted.

## Checks completed
- JavaScript syntax check passed (node --check).
- Static asset and route-link validation: no missing local assets or broken route targets; no outbound anchor destinations.
- All 24 routes opened directly in the browser against the local static preview. All had the expected title, no broken loaded images and no horizontal overflow at the 1363px desktop viewport.
- Desktop About dropdown opened and exposed its section links.
- Search for “people” returned the local People route and navigation succeeded.
- People search for “Partner 02” returned one demonstration record.
- Credit platform tab acquired active state and made its corresponding panel visible.
- Home rendered in a 390px-wide iframe; mobile menu opened and displayed all six primary sections. Fixed empty animation container and inherited mobile menu height issues found during QA.
- Local app checks produced no application JavaScript errors in the inspected browser log; browser-extension/sign-in errors unrelated to the application were excluded.
- Initial Vercel branch deployment reported success through the GitHub commit status and Vercel bot comment.

## Verification limits and remaining fidelity work
- The Vercel preview is protected. The connected Vercel account cannot access this newly created project, so cloud-deployed pages were not visually tested. Local QA used the same generated HTML/assets, with subsequent fixes committed to the preview branch.
- Desktop typography uses locally available fallback fonts; licensed reference typefaces are not bundled.
- The five-category platform has local positioning/tab behaviour rather than the original scroll-driven choreography. Hero advances manually. Exact motion and pixel parity have not been accepted.
- The world map, videos and editorial images are placeholders. Map business filtering has no real map dataset.
- Core templates represent employee/article details; this does not replicate every historical record. Directory filters/search use demonstration records. Full archive pagination/backend search await integration.
- Mobile QA covered homepage and menu, not every route at every breakpoint. Accessibility received keyboard/focus implementation, not a complete independent audit.
- Separate business websites, healthcare/technology microsite subtrees, portal authentication, live recruitment and report downloads remain labelled destination placeholders.

## Next acceptance pass
Compare every template side by side at desktop and mobile sizes, refine the platform/hero motion, confirm deployment in the owner's signed-in Vercel session, and review page-specific spacing. Replace neutral branding, copy and assets only after structure is accepted. Keep this PR unmerged until Andy approves the production replacement.
