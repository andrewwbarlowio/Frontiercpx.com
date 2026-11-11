# Homepage modern facelift — review pilot

Branch: `design/modern-facelift-v1`
Baseline: `f293a945c288b1bcbc274c3250d14031638a65c1` (`build/site-refinements-v5`).

## Intent

Apply the visual lessons from the ConnexAI and Revolut reviews to Frontier's existing identity. Keep the navigation architecture, route destinations, homepage section order, headings and core copy. Confine the experiment to the homepage until reviewed.

## First pilot (superseded by the editorial refinement below)

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

## Editorial refinement — current review version

Following mobile review, the numerical imagery felt dated and imposed its blue lighting on the whole page. The current homepage removes all numerical illustrations, retains the bull exclusively in the approved header/footer wordmark, and uses a business-owner conversation as its contextual hero photograph. This is an existing AI-generated illustrative asset, not a client or Frontier staff photograph. The caption was subsequently removed at the user’s request.

Ink-charcoal, warm-white and neutral surfaces replace the all-navy treatment. The approved blue remains around the wordmark and closing contact invitation. Funding cards are typography-led with small ordinal labels and generous internal spacing. Service photography remains in natural colour, with a clear division between image and copy. The hero supporting sentence has two intentional lines without a stranded final word.

Navigation, routes, homepage section order and core copy are retained. CSS remains homepage-only. Browser frame checks at 320px, 390px and 768px passed for text bounds, document overflow and aligned hero actions; desktop hero and opportunity cards were visually inspected. Physical-device testing is not claimed.

## Homepage copy cleanup

Removed the AI-generated image captions and the standalone payment explanation beneath the service panels at the user’s request. The imagery and service descriptions are unchanged.

## Frontier frame — photographic hero pilot

The hero now leads with “Funding the new frontier.” and “Expert advice and funding connections for your next stage of growth.” The navigation, action destinations and remaining page sections are retained. A new illustrative entrepreneur/city scene replaces the generic meeting photograph.

A fine warm-white rounded frame sits over the full photographic scene, with clear space above the subject’s head. A restrained navy gradient provides the copy surface; the frame carries “Your ambition. Our focus.” as the connection to Frontier. The treatment is live HTML/CSS rather than baked into the image.

Reuse principles: keep the frame geometry, warm-white line, navy copy surface and typography consistent; vary the scene and relevant business ambition. Candidate scenes include productive capacity, technology, acquisitions and property. Fit the frame around the focal subject, with clear space above the head and around the silhouette; never run its outline through a head or face. Keep its label away from faces. Do not imply funding approval, invent transaction amounts, or present illustrative people as customers. This first homepage composition is a design test, not approval for a wider rollout.
