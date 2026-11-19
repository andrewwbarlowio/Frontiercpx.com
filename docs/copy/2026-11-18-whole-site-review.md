# Whole-site line-by-line copy review
18 November 2026

## Scope

Reviewed customer-facing source copy and generated output for all 65 published/generated routes: 58 sitemap pages, client access and account assistance, the error document, three legacy redirect pages and the destination fallback. Shared navigation, footer, form and process text was reviewed once and its use checked across routes. Page-specific headings, introductions, benefits, definitions, comparisons, examples, commitments, FAQs, contact prompts and metadata were reviewed individually. Existing useful text was retained where it met the brief; this is not a claim that every sentence was replaced.

Dynamic copy includes all guide objective/help descriptions, preparation results, form validation, sending, success, timeout and retry messages. No production enquiry was submitted. Archived source templates outside the generated route inventory are not part of the deployed site.

The locked homepage H1 remains “Funding the next frontier.” Frontier’s role in turning vision into action stays central. No named funder relationships, aggregate capital figures, rates, approval times or invented completed transactions were added.

## Verification

- Build and static checks passed for all 65 routes, 5,587 local links and 633 asset references.
- All 26 automated tests passed, including the existing 40-form database/notification integration checks with mocked email, plus regressions for the funding-index fallback, comparison links and unavailable account access.
- Browser DOM review visited all 65 routes at desktop size and all 65 through 390px mobile fixtures. No horizontal mobile page overflow was measured. The local server exposes the error document at `/404.html`; it was checked separately after `/404` did not resolve as a folder. Legacy routes redirect to the intended pages.
- The guide’s preparation results, expanded lease FAQ and empty-form errors were inspected interactively. Existing integration tests verify submission success and retry handling without sending real messages.
- Rendered-text checks found no repeated sentences within paragraphs, stale generic product-card fallbacks, known internal-editorial phrases or descriptions over 165 characters.
- Browser evidence is recorded in `evidence/2026-11-18-browser-review.json`. Visual screenshots were used for local review, not published as site assets.

## Limits

This is an editorial and rendered-content review, not legal certification or independent verification of the business’s service delivery, office arrangements or provider agreements. Existing factual disclosures were copy-edited rather than replaced with invented operational claims. Printed PDF pagination was not regenerated because the optional print renderer is unavailable; on-screen brief content and matching source links were reviewed. Main remains unchanged pending Andy’s approval.

## Route-by-route record

| Route | Review and editorial decision |
|---|---|
| `/our-approach` | Clarified stages, responsibilities, outputs and information sharing. |
| `/our-expertise` | Reviewed capability and output descriptions; removed editorial-style wording. |
| `/funding-network` | Reviewed provider categories and funding-stage example; preserved broad-network positioning without names or figures. |
| `/global-presence` | Reviewed all location labels, addresses, introduction, contact prompts and image descriptions; retained established office details. |
| `/` | Retained the approved hero; sharpened the brand narrative and role of preparation and funding. |
| `/solutions` | Fixed property and equity summary fallback; checked all cards and destination links. |
| `/solutions/business-loans` | Clarified term loan, revolving facility and overdraft distinctions, repayment and security. All sections, FAQ answers, enquiry wording and metadata reviewed. |
| `/solutions/asset-finance` | Clarified buy, lease and refinance outcomes; reviewed used machinery, technology and hire-fleet questions. All sections, FAQ answers, enquiry wording and metadata reviewed. |
| `/solutions/hire-purchase` | Clarified purchase completion, conditional sale, initial costs and ownership. All sections, FAQ answers, enquiry wording and metadata reviewed. |
| `/solutions/equipment-leasing` | Clarified legal title, residual-value risk, maintenance and end-of-term obligations. All sections, FAQ answers, enquiry wording and metadata reviewed. |
| `/solutions/asset-refinance` | Clarified valuation versus usable cash, settlement and ownership outcomes. All sections, FAQ answers, enquiry wording and metadata reviewed. |
| `/solutions/vehicle-finance` | Reviewed operating use, whole-life costs, conversions, mileage and rental-company distinction. All sections, FAQ answers, enquiry wording and metadata reviewed. |
| `/solutions/invoice-finance` | Clarified invoice eligibility, collections, confidentiality, changing availability and bad-debt protection. All sections, FAQ answers, enquiry wording and metadata reviewed. |
| `/solutions/stock-dealer-finance` | Clarified inventory lifecycle, stock ageing, curtailments and permitted hire use. All sections, FAQ answers, enquiry wording and metadata reviewed. |
| `/solutions/trade-import-finance` | Reviewed trade cycle, goods documentation, supplier deposits, currency and equipment for own use. All sections, FAQ answers, enquiry wording and metadata reviewed. |
| `/solutions/acquisition-finance` | Reviewed sources and uses, buyer contribution, integration cash and completion dependencies. All sections, FAQ answers, enquiry wording and metadata reviewed. |
| `/solutions/asset-based-lending` | Explained borrowing-base availability, eligible assets, reporting and security interaction. All sections, FAQ answers, enquiry wording and metadata reviewed. |
| `/solutions/vendor-finance` | Clarified seller/provider roles, buyer assessment, promotions and agreed referral process. All sections, FAQ answers, enquiry wording and metadata reviewed. |
| `/solutions/business-funding` | Reviewed the uncertain-buyer starting point, credit-search question and route comparisons. All sections, FAQ answers, enquiry wording and metadata reviewed. |
| `/solutions/bridging-loans` | Reviewed gap, deadline, exit evidence, fallback, security and full cost without narrowing to property only. All sections, FAQ answers, enquiry wording and metadata reviewed. |
| `/solutions/property-finance` | Reviewed commercial mortgage, development, bridge and refinance distinctions; replaced narrow development-only FAQs. All sections, FAQ answers, enquiry wording and metadata reviewed. |
| `/solutions/growth-and-ownership-capital` | Reviewed company investment versus shareholder proceeds, governance and investor fit. All sections, FAQ answers, enquiry wording and metadata reviewed. |
| `/solutions/venture-funding` | Reviewed stage, milestone, runway, round size and investor rights; replaced an unnecessary venture-debt detour. All sections, FAQ answers, enquiry wording and metadata reviewed. |
| `/solutions/complex-funding` | Reviewed actual situations, obligations, adviser roles and timing without rescue promises. All sections, FAQ answers, enquiry wording and metadata reviewed. |
| `/solutions/technology-funding` | Reviewed equipment, software, implementation and company-growth distinctions. All sections, FAQ answers, enquiry wording and metadata reviewed. |
| `/solutions/sustainability-and-impact` | Reviewed operational investment versus company growth, reporting, grants and supportable outcome claims. All sections, FAQ answers, enquiry wording and metadata reviewed. |
| `/sectors` | Reviewed every sector description and link. |
| `/sectors/plant-machinery` | Distinguished operator, hire-fleet and dealer needs; removed repeated enquiry wording and clarified onward hiring. |
| `/sectors/technology` | Distinguished company capital from investment in operating systems; shortened metadata and removed repeated enquiry wording. |
| `/sectors/life-sciences` | Reviewed all sector-specific narrative, business-model distinctions, examples, preparation prompts, funding links, FAQs and metadata; removed internal scope language. |
| `/sectors/insurance-capital` | Reviewed all sector-specific narrative, business-model distinctions, examples, preparation prompts, funding links, FAQs and metadata; removed internal scope language. |
| `/sectors/digital-infrastructure` | Reviewed all sector-specific narrative, business-model distinctions, examples, preparation prompts, funding links, FAQs and metadata; removed internal scope language. |
| `/services` | Reviewed service cards, outputs, fee explanation, examples and calls to action. |
| `/services/capital-strategy` | Reviewed the problem, scope, outputs, illustrative example, process, engagement/fee section, all FAQs and enquiry wording; tightened metadata and repetitive caveats. |
| `/services/funding-readiness` | Reviewed the problem, scope, outputs, illustrative example, process, engagement/fee section, all FAQs and enquiry wording; tightened metadata and repetitive caveats. |
| `/services/financial-modelling` | Reviewed the problem, scope, outputs, illustrative example, process, engagement/fee section, all FAQs and enquiry wording; tightened metadata and repetitive caveats. |
| `/services/debt-advisory` | Reviewed the problem, scope, outputs, illustrative example, process, engagement/fee section, all FAQs and enquiry wording; tightened metadata and repetitive caveats. |
| `/services/equity-advisory` | Reviewed the problem, scope, outputs, illustrative example, process, engagement/fee section, all FAQs and enquiry wording; tightened metadata and repetitive caveats. |
| `/services/transaction-support` | Reviewed the problem, scope, outputs, illustrative example, process, engagement/fee section, all FAQs and enquiry wording; tightened metadata and repetitive caveats. |
| `/services/ongoing-advisory` | Reviewed the problem, scope, outputs, illustrative example, process, engagement/fee section, all FAQs and enquiry wording; tightened metadata and repetitive caveats. |
| `/about-us` | Strengthened the explanation of Frontier’s role and made the equipment illustration concrete. |
| `/for-advisers` | Reviewed relationship ownership, authority, information sharing and commercial-arrangement wording. |
| `/funding-options` | Corrected equipment and working-capital destinations; clarified structure, commitments and questions. |
| `/funding-guide` | Reviewed all eight objective descriptions, three help choices and generated result/CTA messages. |
| `/briefs/credit` | Reviewed both brief sections, all write-in labels, preparation checklist, explanation, commitments, fee note, source markers and matching CTA. Kept the subject-specific heading. |
| `/briefs/bridging-loans` | Reviewed both brief sections, all write-in labels, preparation checklist, explanation, commitments, fee note, source markers and matching CTA. Kept the subject-specific heading. |
| `/briefs/real-estate` | Reviewed both brief sections, all write-in labels, preparation checklist, explanation, commitments, fee note, source markers and matching CTA. Kept the subject-specific heading. |
| `/briefs/private-equity` | Reviewed both brief sections, all write-in labels, preparation checklist, explanation, commitments, fee note, source markers and matching CTA. Kept the subject-specific heading. |
| `/briefs/ventures` | Reviewed both brief sections, all write-in labels, preparation checklist, explanation, commitments, fee note, source markers and matching CTA. Kept the subject-specific heading. |
| `/briefs/special-situations` | Reviewed both brief sections, all write-in labels, preparation checklist, explanation, commitments, fee note, source markers and matching CTA. Kept the subject-specific heading. |
| `/briefs/life-sciences` | Reviewed both brief sections, all write-in labels, preparation checklist, explanation, commitments, fee note, source markers and matching CTA. Kept the subject-specific heading. |
| `/briefs/tech-opportunities` | Reviewed both brief sections, all write-in labels, preparation checklist, explanation, commitments, fee note, source markers and matching CTA. Kept the subject-specific heading. |
| `/briefs/double-impact` | Reviewed both brief sections, all write-in labels, preparation checklist, explanation, commitments, fee note, source markers and matching CTA. Kept the subject-specific heading. |
| `/briefs/insurance` | Reviewed both brief sections, all write-in labels, preparation checklist, explanation, commitments, fee note, source markers and matching CTA. Kept the subject-specific heading. |
| `/briefs/crypto` | Reviewed both brief sections, all write-in labels, preparation checklist, explanation, commitments, fee note, source markers and matching CTA. Kept the subject-specific heading. |
| `/contact` | Reviewed introduction, required/optional fields, helper text, errors, success/failure messages and sharing wording. |
| `/privacy-policy` | Copy-edited existing operational disclosures; removed internal implementation instructions without adding service promises. |
| `/terms-use` | Copy-edited existing company, fee and website disclosures; made account availability accurate. |
| `/client-login` | Replaced disconnected credential request and misleading simulated failure with accurate assistance copy. |
| `/forgot-password` | Replaced disconnected recovery form with accurate assistance copy. |
| `/404` | Reviewed error heading, explanation and recovery routes; verified the static /404.html document. |
| `/ventures` | Reviewed redirect message and verified destination. |
| `/crypto` | Reviewed redirect message and verified destination. |
| `/how-it-works` | Reviewed redirect message and verified destination. |
| `/destination` | Reviewed fallback route labels and verified guide redirection. |
