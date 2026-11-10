# Solutions imagery plan and execution

10 November 2026. Status: generated and integrated; desktop and mobile QA passed.

## Creative system

Each hero uses one recognisable subject made from luminous blue digits and particles, on the signature navy gradient. Live text remains outside the artwork. Assets are 1536 × 1024 landscape (3:2), encoded as WebP, fitted with their full silhouette visible. Edge feathering and a lighten blend soften the join with the background. Mobile order is copy, artwork, then CTA. The imagery is illustrative, not evidence of clients, transactions or actual Frontier staff.

| Solution | Subject | Rationale |
|---|---|---|
| Private Equity | A powerful, elegant bull standing firmly in a poised forward-facing three-quarter stance, lowered head and beautiful curved horns, strong full-body silhouette, confident not aggressive. Full animal in frame, no buildings. | Capital strength, ownership and growth |
| Credit | A single elegant modern bridge with a clear solid deck spanning a visible gap between two low rock platforms. Three-quarter perspective shows the connection clearly, structurally believable clean design, one bridge only, no vehicles. | Capital connecting ambition with execution |
| Ventures | A young vigorous tree with a slender trunk, visible roots and upward-reaching branches forming a small confident canopy. The entire tree and roots visible, a sense of early growth and potential. Sculptural natural tree, not a circuit diagram, no buildings. | Early-stage growth and potential |
| Real Estate | Contemporary commercial building | Property, development and the built environment |
| Special Situations | A precision-engineered circular gear wheel in three-quarter perspective, with one missing segment being reassembled from ordered fragments drifting into its gap. Main gear recognisable and nearly whole, several small pieces resolving into the structure, elegant simple composition representing rebuilding. | Restructuring, complexity and renewed momentum |
| Life Sciences | A beautifully defined single DNA double helix rising diagonally in a graceful three-dimensional curve, clean paired rungs and two continuous intertwined strands. Scientific sculptural form, full structure visible, not a medical infographic, no labels or molecules crowding it. | Biotechnology, research and discovery |
| Tech Opportunities | A sophisticated industrial robotic arm on a stable round pedestal, joints clearly articulated, gripper extending upward and toward the right. Full machine visible and structurally plausible, strong engineering silhouette, no human-like head or face. | Applied technological capability and productivity |
| Double Impact | A compact contemporary commercial campus with clearly visible photovoltaic solar panels across its roof and two small elegant trees alongside. Three-quarter architectural view, business activity and cleaner energy as one coherent sculptural subject, no sky scenery or infographic. | Commercial progress alongside environmental improvement |
| Insurance | A clean three-dimensional protective shield standing around and slightly in front of a small contemporary commercial building. The shield is a translucent curved outline form, building clearly visible behind it, one simple coherent subject representing protection and resilience, no emblems or ticks. | Protection and business resilience |
| Crypto | Three substantial interlocking chain links forming a graceful receding three-dimensional structure, with a few fine interconnected network points extending from the far link. Clearly recognisable linked chain, intricate digital construction, no cryptocurrency coin, no currency symbol. | Blockchain and connected digital infrastructure |

## Implementation

- Original generated PNGs retained separately; deployable hero files in assets/images/solutions/.
- content/solution-imagery.json owns subjects, rationale, hero/photo mappings and alt text.
- Real Estate artwork retained; nine additional heroes generated with GPT Image Generation from the same style reference.
- Shared hero renderer and responsive brand styles cover all ten existing destinations. No navigation destinations changed.
- Generic solution destination placeholders now show a hero plus a supporting photographic section. Ventures/Crypto retain the existing sections below their replaced hero, with original headline/body wording and illustrative photos replacing empty image slots.
- Supporting photos reuse the previously generated photographic-style images. They are not real client photographs. Final copy, product scope and future original photography remain separate work.

## Review limits

The metaphors are a first creative direction. Credit's bridge does not imply a particular bridging-loan product; the bull does not promise returns; Double Impact's campus is not an impact-performance claim. The concepts are selected for recognition and consistency rather than a claim that any metaphor is objectively the only correct choice.


## Verification

All ten destinations checked on desktop: correct distinct image, white hero heading, supporting photographic section and no horizontal overflow. All ten checked at 320px, 390px and 768px containers (30 responsive checks): no horizontal overflow and button below the image. Local image encodings verified, all ten mappings/files checked during every build, and shared 114-route build checks passed. Protected cloud preview deployment is verified through GitHub/Vercel status; visual QA uses the same generated build locally.
