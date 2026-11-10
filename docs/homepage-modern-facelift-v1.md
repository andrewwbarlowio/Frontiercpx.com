# Homepage modern facelift — review pilot

Branch: `design/modern-facelift-v1`
Baseline: `f293a945c288b1bcbc274c3250d14031638a65c1` (`build/site-refinements-v5`).

## Intent

Apply the visual lessons from the ConnexAI and Revolut reviews to Frontier's existing identity. Keep the navigation architecture, route destinations, homepage section order, headings and core copy. Confine the experiment to the homepage until reviewed.

## Design

- Self-hosted variable Manrope, under the bundled SIL Open Font License; the approved logo remains an image and is unchanged.
- Navy and subtly tinted blue surfaces, localised cyan light, fine borders, consistent corner radii and refined spacing.
- More deliberate hero headline composition and a larger numerical bull with no text baked into the artwork.
- Editorial introduction with the existing contextual manufacturing photograph.
- Six illustrated ambition tiles using existing numerical assets and unchanged destinations.
- Two photographic service panels, with illustrative-image disclosure.
- A split editorial layout for the four principles and a numbered, unboxed process.
- Consistent actions, keyboard focus and restrained entrance/hover motion; reduced-motion overrides.
- Mobile-specific text widths, image scale, compact ambition rows and side-by-side hero actions.

## Isolation

`homepage-pilot.css`, its font preload and `homepage-pilot` body class are emitted only for `/`. New assets are copied by the existing static build. There is no new runtime dependency, tracking, form delivery or network integration.

## Verification

- Existing build passed: 48 routes, 4,163 internal link checks and 387 asset checks.
- Rebuilt the saved baseline independently and compared all HTML: the other 47 pages are byte-identical.
- Compared homepage headings and paragraphs: all baseline wording preserved, with one added AI-illustration caption for the new photographic panels.
- Desktop browser inspection at 1,363px: hero, introduction, ambition cards and lower sections reviewed; local font and artwork loaded.
- Responsive browser frames at 320px, 390px and 768px: no document overflow or out-of-bounds headings/paragraphs; hero actions share a row at each width.
- Mobile navigation opened and closed by keyboard; desktop advisory dropdown opened and retained all seven service links. Existing menu implementation is unchanged.
- Reduced-motion CSS removes the pilot's animation and transitions. Physical-device and assistive-technology testing are not claimed.

## Review

Assess typography, overall darkness, image balance, mobile density and whether the visual language is suitable for wider rollout. No production merge or site-wide rollout is part of this pilot. Existing contact forms remain disconnected previews.
