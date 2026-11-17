# Funding products and sector navigation implementation plan

Date: 17 November 2026
Branch: funding-products-restructure
Status: implementation plan; no customer-facing changes made
Baseline: main at c165b6270fb59a3a294bff1faebca704faafe793

## Objective

Help visitors find a recognisable finance product after one mobile menu expansion. Separate products, customer goals and industry sectors. Preserve Frontier's wider advisory, equity and specialist proposition alongside the new equipment offering.

## 1. Navigation and information architecture

Funding Solutions opens a single list: Business Loans; Invoice Finance; Asset & Equipment Finance; Stock & Dealer Finance; Property Finance; Bridging Loans; Acquisition Finance; Equity & Growth Capital; All Funding Solutions. Keep Help choosing a route visible.

Remove the nested Funding and sectors accordion and the duplicate goal links from the menu. Keep customer goals on /solutions and the homepage, linking them to relevant products. Do not add a second accordion inside the mobile Funding Solutions list. Product details live on landing pages and their linked child pages.

Add a separate Sectors destination in desktop and mobile navigation with a sector index. Initial explicit sectors: Plant & Machinery, Technology, Life Sciences and Insurance. Retain a discoverable Digital Asset Businesses specialist page with accurately scoped copy. Sector pages link to applicable products; they must not imply that every product is available to every sector.

Retain Sustainability & Impact as a cross-cutting specialist theme, linked from relevant equipment and equity pages and the solutions directory. Retain Complex Funding as a specialist route in the solutions directory and Funding Guide; do not label it a sector or discard its existing page.

## 2. Page and route register

| Destination | Proposed route | Action |
| --- | --- | --- |
| Funding Solutions | /solutions | Rebuild directory with product cards, customer-goal entry points and a separate specialist section |
| Business Loans | /solutions/business-loans | New specific page; cover secured/unsecured term borrowing and explain revolving facilities as a distinct option subject to provider access |
| Invoice Finance | /solutions/invoice-finance | New page; explain factoring and invoice discounting without implying identical eligibility |
| Asset & Equipment Finance | /solutions/asset-finance | New hub for machinery, equipment and related vehicles |
| Hire Purchase | /solutions/hire-purchase | New product page |
| Equipment Leasing | /solutions/equipment-leasing | New page; clearly distinguish finance lease and residual value lease |
| Asset Refinance | /solutions/asset-refinance | New page; explain sale and HP back and sale and leaseback, existing debt and asset ownership |
| Vehicle & Fleet Finance | /solutions/vehicle-finance | New page; distinguish HP, lease and vehicle contract hire; separate own-use fleets from rental businesses |
| Stock & Dealer Finance | /solutions/stock-dealer-finance | New page; distinguish dealer stock, demonstrators and eligible short-term hire units from long-term rental fleets |
| Finance for Your Customers | /solutions/vendor-finance | New seller-facing page describing an arrangement using underlying finance products, not a separate loan type |
| Property Finance | /solutions/property-finance | Retain and refine links |
| Bridging Loans | /solutions/bridging-loans | Retain existing business bridging scope; do not silently narrow to property |
| Acquisition Finance | /solutions/acquisition-finance | New specific page; debt structures and possible ABL combinations, linked to ownership capital |
| Equity & Growth Capital | /solutions/growth-and-ownership-capital | Retain route, simplify display label and link clearly to Venture Funding |
| Sector index | /sectors | New index |
| Plant & Machinery | /sectors/plant-machinery | New sector page for operators, rental fleets and equipment sellers |
| Technology | /sectors/technology | New sector page; separate technology-company fundraising from buying IT |

Retain existing Life Sciences, Insurance and Digital Asset page URLs initially; update their labels, breadcrumbs and navigation placement. Defer URL moves until a one-to-one redirect is justified. Retain /solutions/technology-funding as a useful Technology & Equipment Finance page for software, automation and implementation, cross-linked from the asset hub and Technology sector page. Retain /solutions/business-funding as a broader hub directing visitors to loans, invoice finance, acquisition funding and bridging. This avoids breaking existing links or unnecessarily redirecting useful content.

## 3. Copy approach and evidence

Use Lombard's public pages as research references for product mechanics, asset coverage and questions to address. Write original Frontier copy, with Frontier's own structure, examples and voice. Do not copy or closely paraphrase Lombard prose or present its offering as Frontier's established facility.

Each product page: clear customer benefit; what it is; who it may suit; typical uses; how the structure works; ownership/security/end-of-term commitments; information needed; related alternatives; concise FAQs; enquiry form. Keep paragraphs short and explanations practical. Existing brand, typography and page components remain the design starting point.

Frontier arranges introductions rather than lending its own money. Distinguish provider-paid introductions from separately commissioned client-paid advisory services. Do not invent an agreed Lombard relationship, panel acceptance, exclusivity, rates, minimum/maximum amounts, decision times, acceptance criteria, tax outcomes or guaranteed savings. Publish specific commercial claims only after verification and confirmation they apply to Frontier's channel.

Research references reviewed in this conversation:
- https://www.lombard.co.uk/finance-options.html
- https://www.lombard.co.uk/assets/manufacturing-machinery.html
- https://www.lombard.co.uk/finance-options/residual-value-lease.html
- https://www.lombard.co.uk/services/refinance-solutions.html
- https://www.lombard.co.uk/finance-options/wholesale-finance.html
- https://www.lombard.co.uk/support/brokers.html
- https://www.lombard.co.uk/support/contact-us.html

Provider-specific questions to confirm before publishing availability claims: onward-hire permission; imported brands; new/used asset ages; existing finance; stock versus rental fleet treatment; residual value and return conditions; permitted vendor arrangements; Frontier's access to individual products. Chattel mortgages remain a specialist explanation where relevant, not a general machinery promise.

## 4. Implementation sequence

1. Establish product/sector content records and the route register; update shared desktop/mobile navigation, footer and no-JavaScript links.
2. Build the Funding Solutions directory and sector index, preserving the goal-led journey on-page.
3. Build Asset & Equipment Finance and its HP, leasing, refinance and vehicle pages, then Stock & Dealer Finance and Finance for Your Customers.
4. Build Invoice Finance, Business Loans and Acquisition Finance. Connect existing property, bridging, equity and venture routes.
5. Refine sector and specialist pages; update homepage goal links and Funding Guide suggestions so each journey reaches the appropriate destination.
6. Complete original copy, contextual image selection, metadata and cross-link review. Reuse suitable licensed/existing assets; avoid generic imagery or lender branding implying a partnership.
7. Validate the complete branch and deploy a preview. Review the mobile navigation and sample pages with Andy before a separate production merge instruction.

## 5. Source changes expected

- scripts/customer-site.mjs: shared navigation, directory rendering, route output and internal links.
- content/customer-journeys.json and relevant content records: product and sector copy, calls to action and goals. Inspect content/solution-pages.json usage before deciding whether to extend or retire duplicated records.
- scripts/customer-content.mjs: associated rendering/content integration as needed.
- assets/editorial-system.css, assets/customer-journey.css and navigation JavaScript: single-level menu, sector styling, responsive layout and accessible expansion behavior.
- assets/solution-pages.*: use only where active renderer requires them; avoid conflicting legacy styles.
- vercel.json: only necessary redirects for genuinely replaced routes.
- Existing metadata, sitemap generation, structured data and relevant tests: include all new canonical pages.

## 6. Acceptance and release checks

- Every product is reachable from Funding Solutions after one menu expansion; no Funding and sectors label or nested funding accordion remains.
- Products, sectors and specialist themes have explicit separate placement; all current destinations remain discoverable.
- Keyboard, focus, Escape, menu close behavior and accordion state work; no horizontal overflow on 320px, 390px and 430px layouts. Desktop navigation accommodates Sectors without crowding; approved sticky header proportions remain intact.
- Product differences are accurate and comprehensible, with original copy and no unsupported lender/availability claims.
- Existing URLs and anchor destinations work; deliberate replacements have direct redirects without chains. Canonicals, titles, descriptions, sitemap entries and internal links align.
- Shared forms retain production API, validation, success experience and enquiry/customer identity handling. New page/source attribution maps correctly to database records and notification templates without a schema change unless evidence requires one.
- Run build/link checks and existing relevant test suite; add meaningful checks for taxonomy, routes and new form attribution. Check preview responsive layouts and representative journeys. Avoid sending repeated real notifications as part of routine layout QA.
- Deliver preview URL, concise change summary and any unresolved product access questions. Merge only after Andy authorises production release.

## Deliverables

One branch with the plan, followed by a preview containing the revised navigation, product directory, product pages, sectors and connected customer journeys. No production changes are part of this planning commit.
