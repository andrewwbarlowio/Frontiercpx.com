# Funding products restructure verification

17 November 2026. Branch funding-products-restructure. Preview only; main is unchanged.

- Added 12 product/hub pages, two sector pages and a sector index: total 65 generated routes.
- Shared header, footer and no-JavaScript links updated. Funding Solutions has ten ordered product families with no nested accordion; Sectors is separate.
- Equipment hub links to five detailed pages in agreed order. Existing destinations and goal anchors remain valid.
- Retained solution content reviewed and revised with explicit product links. Original product copy includes purpose, mechanics, commitments, preparation, tailored FAQs and metadata.
- Build verifies local links, anchors, assets, one H1 per page and unique IDs.
- 22 tests passed, including new navigation ordering, metadata, route and Funding Guide coverage.
- All 40 generated enquiry forms tested through browser DOM submission, server validation, a test Postgres instance and rendered notification content. Provider calls mocked; no real emails sent. Customer/enquiry identities and source paths retained. No database migration required.
- Deployed preview checked in the browser: desktop product dropdown, equipment hub hero/options and live Funding Guide recommendations.
- Browser viewport controls were unavailable; physical-device rendering at 320/390/430px was not visually verified in this environment. Responsive CSS and single-level menu structure retained/reviewed; mobile screenshot review remains useful before merging.
- Final journey refinement sends Funding Guide discussion links to each product’s own enquiry form so capture identifies the product page. Broad cash-flow/growth homepage goals continue to use the Business Funding hub rather than assuming one product fits every need.
- Contextual existing brand imagery reused; no lender logos or unsupported partnership claims added. Commercial product access remains subject to confirming provider terms.

Preview: https://frontiercpx-git-funding-products-restructure-andrewbarlowio.vercel.app/solutions

## Follow-up navigation review

Moved About Us and Global Presence out of the primary menus; both remain linked in the footer. Primary dropdown order is Funding Solutions, Advisory Services, Sectors, followed by Funding Network and contact/account utilities. Removed All Funding Solutions, All Sectors and All Advisory Services entries from dropdowns; their overview pages remain available through the footer and contextual links. Desktop panels now use the mobile navy gradient with light text, subtle dividers and visible hover/focus treatments. Build and four focused navigation/product tests passed after this revision.

## Substantive funding copy rewrite

All 21 Funding Solutions destinations reviewed against the audit and revised, including the directory. Twenty detail/hub pages now have clear definitions, tailored benefit explanations and comparison tables, with direct enquiry invitations in the hero and after comparisons. Detailed pages include non-priced illustrative situations; Business Funding and Complex Funding omit redundant long sections. Existing routes, meaningful enquiry source attribution, form behavior and desktop/mobile navigation are retained.

Removed the trade page's letters-of-credit/guarantee option. No Device-as-a-Service or software-payment product is advertised. Technology Finance now focuses on an operating business's investment rather than competing with the technology-company sector page.

Build and 24 tests passed after the substantive renderer change, including every funding page's definition/comparison/CTA and all 40 generated forms through test database storage and notification rendering. No real emails sent and no schema changes made.
