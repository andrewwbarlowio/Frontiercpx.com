# Replica gap assessment

Assessed against branch commit 9185f1c62453dbb21e11f7240262c090802f03f3 on 9 November 2026.

## Verdict
FAIL against the requested faithful structural and visual replica. The existing route skeleton is useful, but successful page loads did not establish layout completeness. Earlier verification was too shallow to establish fidelity. Do not accept or merge this draft.

The protected Vercel preview remains inaccessible to this connection. The assessment used the same branch source in the local browser and the live Bain reference, both at 1363 × 936. Measurements are diagnostic snapshots, not universal pixel targets: content length, dynamic initialization and fonts affect them.

## Verified defects and immediate corrections
| Area | Evidence before correction | Correction in this audit | Remaining work |
|---|---|---|---|
| Home sector spotlight | Reference section ~683px; draft ~1470px. Three slides stacked instead of forming a horizontal presentation. | Desktop three-column layout; mobile horizontal scroll. Section now ~683px. | Match original carousel navigation, crop, transitions and narrow layout. |
| Home people feature | No rendered background; heading computed white on the pale page background. Full viewport looked mostly empty. | Added actual local image-placeholder background and dark overlay; text visibly readable. | Reproduce the reference people/background rotation and corresponding captions. |
| Careers opportunity testimonials | Reference ~916px; draft ~3678px. All testimonial slides stacked. | Local prev/next carousel, one active slide. Now ~1071px. | Connect original theme controls and refine height/type spacing. |
| Careers development/gallery content | Reference ~3021px; draft ~10484px. Gallery slides stacked. | Local gallery controls and one active slide. Now ~3333px. | Exact gallery sizing, transitions and section spacing. |
| Sustainability quotes | Reference quote bands ~484/444px; draft ~881/1012px. Quotes stacked. | Local quote carousels. Now ~448/407px. Next-slide control verified changing active slide 0 → 1. | Reference-specific controls, quotation alignment and responsive behaviour. |

## Outstanding gaps
1. **Animation-dependent implementation.** Captured markup/styles relied on source initialization. Removing those scripts without replacing every component caused layout failures. Reimplement components explicitly and establish static geometry before adding motion.
2. **Business platform.** The simple local ring is an approximation of the reference graphic/choreography. Tab state works, but shape, scale, label placement and transitions are not a faithful match.
3. **Hero.** Tangram shapes, masks, slide timing and indicators differ. Manual replacement controls are not the original interaction.
4. **Navigation and shared shell.** Header sizing/scroll state, mega-menu details, mobile disclosures, cookie notice and search presentation need visual comparison. The centered search dialog differs from the reference search treatment. A large preview bar adds another fixed overlay.
5. **Typography and content density.** Fallback fonts change line wraps and spacing. Mechanical placeholder replacement leaves awkward fragments and inconsistent density. Use deliberate placeholders sized for each content slot.
6. **Distinct destinations.** Every directory profile currently targets one example profile. Internal news article links similarly collapse to one example article. External reports, recruitment and specialist pages share one generic destination. These must be explicitly accounted for in the final route inventory and acceptance boundary.
7. **Directory/archive controls.** Search/category examples work, but combinations of filters, pagination and query state have not been comprehensively validated. Pagination can override an existing filter because it operates independently. “Load More” still reports a demonstration message rather than adding content.
8. **Locations.** A text box replaces the actual map. The business dropdown has no geographic dataset to filter. Regions contain reference-derived office placeholders, not an implemented interactive map component.
9. **Assets.** Replacing every CSS URL with one placeholder also affects decorative/font/icon assets. Decorative geometry and functional icons need individual treatment. Ordinary portrait slot dimensions checked at ~236 × 236 in both versions; not every image slot is broken, but each needs its own crop/shape check.
10. **Coverage.** Every historical record and specialist microsite is not implemented. Full-width/phone checks on all templates, keyboard behaviour, anchors and visual regression evidence remain outstanding.

## Required completion approach
- Keep the current build as a failing baseline and the PR as draft.
- Make a component checklist per template: static structure, dimensions, assets, states, keyboard controls and mobile arrangement.
- Implement every missing carousel, tab, background and navigation state as an explicit local component.
- Compare full pages, not just first-screen screenshots or route counts. Check each section and interaction at matching widths.
- Retest directory/archive combinations and ensure each intended destination has a deliberate route.
- Resolve the protected-deployment inspection gap and run the same checks on the actual Vercel preview.
- Accept only when the concrete visual and interaction checklist passes. Then begin content/image replacement and backend work.

## Scope of fixes here
Only the high-impact stacked-slide and invisible-background defects were corrected in this audit. This is not a claim that the wider parity work is finished. The live coming soon page remains untouched.
