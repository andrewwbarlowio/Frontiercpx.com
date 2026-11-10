# Shared solution sales-page layout

10 November 2026. Implemented across all ten existing Solutions destinations. This replaces the uneven generic/specialist presentation with one reusable commercial layout, while retaining each solution's hero artwork and existing navigation destination.

## Reader journey and design

| Section | Reader question | Presentation |
|---|---|---|
| Hero | Is this relevant to my objective? | Product-specific proposition, concise explanation, particle artwork and clear enquiry CTA |
| On-page navigation | Where can I find the answer? | Four compact anchors for overview, suitability, approach and FAQs |
| Use cases | Do you understand my situation? | Three tailored cards, with distinct supporting descriptions |
| Outcome | What must the capital make possible? | Large photographic image paired with a tailored editorial section |
| Structure | How does this work? | Navy split section explaining the solution and three assessment stages |
| Suitability | Could this be relevant to us? | Paired starting-point and clarification cards |
| Trade-offs | What should I understand before deciding? | Four expandable, solution-specific consideration headings |
| Frontier role | Why involve Frontier? | Clear intermediary role, transparent scope/remuneration language and a visual reassurance panel |
| Process | What happens next? | Four steps from first conversation to an informed decision |
| FAQs | What might stop me enquiring? | Five expandable practical answers, including the product's structure and limitations |
| Enquiry | How do I start? | Short labelled form beside a clear invitation and expectations |

Design uses the existing Frontier navy gradient, particle artwork, Arial typography and paper/white surfaces. Clear section boundaries, spacious editorial splits, restrained cards, deliberate colour changes and accordions reduce the feeling of a long undifferentiated document. Mobile stacks cards and forms, retains full artwork, places hero actions after the image and avoids nested horizontal strips.

## Editing and implementation

- content/solution-pages.json: tailored proposition, introduction, use cases, outcome, suitability, structure and considerations for each solution.
- assets/solution-pages.js: shared rendering and disconnected form behaviour.
- assets/solution-pages.css: scoped layout styling.
- Existing hero/photo files and mappings are retained.
- Existing Ventures/Crypto lower sections are replaced by this same layout; header/footer and destination URLs are retained.
- Draft content establishes page hierarchy and tone. It does not verify product availability, provider relationships, prices, criteria, timelines or performance claims. Those commercial details remain for review before publication.
- No invented testimonials, case studies, rates, limits or approval statistics. Forms display an explicit preview notice and do not send or save entries.

## Verification

Shared build passes for 114 routes, 9,884 local link references and 3,251 asset references. Sales script syntax and all ten content mappings checked. Browser checks cover all ten desktop pages and all ten at 320px, 390px and 768px containers (30 responsive checks): ten consistent sections, one form, no page/form horizontal overflow. Desktop anchor targets are present. Real Estate FAQ expansion and a sample form submission checked; the form confirms nothing was sent or saved. Homepage remains outside the scoped renderer.

Preview branch only. Final product copy, contact integration and production release remain separate steps.
