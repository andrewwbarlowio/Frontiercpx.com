# Sprint 4 supporting journeys and account interfaces

Baseline: `955b49b60cc357c3782481109cf74118ad293fc2` on `build/site-refinements-v3`. Existing static renderer and approved brand, solution artwork and location photographs retained. Main unchanged. The implementation emits 48 route documents, including static legacy fallbacks; permanent redirect behaviour is separately configured in Vercel.

## Single process and page roles

`scripts/process.mjs` owns five stages, their descriptions, outputs and responsibilities. Both the full Our Approach page and compact strips consume these records. The canonical page retains #roles and adds stage-1 through stage-5 plus #commercial-arrangements. How It Works is a one-hop permanent redirect in Vercel and a canonical-target static fallback with client redirect. Internal links target Our Approach directly.

Home retains the approved brand line and bull image, exposes Services/Funding as two routes, explains remuneration and shows an illustrative cash-cycle journey. Funding Solutions separates objectives, structures and operating contexts, with one prominent uncertain-route helper. About explains Frontier's role with a sample requirement summary. Advisers explains client authority, contact ownership and updates, without invented referral terms.

Expertise maps all seven service capabilities to defined outputs. Unsupported team, lender and experience metrics are omitted. Network separates provider categories and funding purposes, with a labelled matching illustration and reasons a provider might not fit. Global Presence retains all five proposed addresses and photos; address formats are source-checked, approximate coordinates removed, and city context links added. See content/locations.json, the claims/scope register and the address review evidence.

## Guide and comparisons

`scripts/guide-data.mjs` owns eight objective records and three next-action IDs. The guide emits metadata from the same funding records as the page and briefs. Every returned route has a brief/preparation action and an enquiry action. Uncertain choice returns neutral comparison/preparation/contact help. Goal/help (non-personal choices) are stored only in the URL with history navigation, not application storage. Change hides the old result; submit renders, reset clears choices, back/forward rehydrates valid URL values. Unknown input is ignored.

Funding comparison is five labelled cards with structure, commitments, discussion question and relevant route/brief links. There is no wide table or horizontal-scrolling dependency. Structure-family overlap is explicit.

## Briefs and print

Ten briefs derive names, preparation, mechanics, scope, commitments and illustrative outline fields from their parent records. Each has a route-specific heading, two printed sections, source route/date, direct contextual enquiry and print/save control. Blank writing lines let the reader add their own values; the webpage does not collect those notes. No email is required.

A4 print CSS gives explicit page breaks, hides shell/actions/skip links and uses semantic headings and write-in fields. Optional QA script `scripts/verify-print-briefs.py` uses WeasyPrint 70 and pypdf to render actual emitted HTML/CSS into temporary PDFs, assert two pages per brief and both source/page markers. Twenty rasterised pages were visually inspected, with a contact sheet retained. This is actual print-engine pagination evidence, not a claim that Chromium's print dialog or physical printers were tested. Browser print uses the same CSS, but engine-specific final checking remains in G15.

## Contact, information and inactive accounts

`scripts/information.mjs` renders Contact, privacy, website information and account screens. Entity, correspondence address, inbox, separate advisory/provider remuneration, client go-ahead and adopted retention/document-handling baseline reflect Andy's decisions. The company's statutory number is not asserted because the matching official record could not be retrieved. U02 remains open before public release; no unrelated similarly named company is substituted.

Client Login is desktop right and mobile first. Both login and recovery use the branded shell without the development strip or an initial availability notice. Labels, password show/hide, Sign In, Forgot Password, recovery and contact assistance are present. Input elements have no name attributes. Controls run local UI only; submit is prevented, entered synthetic values are cleared and the only result is neutral contact assistance. No account lookup, authentication, reset email, credential persistence or storage call exists. Password is masked again on reset and values are cleared on pagehide/pageshow. No public registration.

CSP still blocks form actions and network connections. Source audit finds no fetch/XHR/storage/analytics in account controls. Browser checks confirm masking, clearing and neutral output, but no network-HAR or browser-storage instrumentation was available; do not describe this as an instrumented network-capture pass. Actual auth and recovery integrations remain deferred.

## Routes, inventory and known limits

The Vercel configuration keeps ten conditional /destination mappings in order, then a neutral /funding-guide fallback. Existing /ventures and /crypto are direct permanent redirects. Static fallbacks preserve hashes; local browser tests passed all ten encoded Global-title mappings with #enquiry, both legacy slugs, unknown-query recovery and How It Works #roles. Site metadata and sitemap exclude retired redirect and auth routes from indexable candidates; noindex protection is retained globally.

Protected-deployment HTTP redirect/status/canonical and true 404 verification remains blocked by the existing Vercel sign-in restriction. The local preview runs in the browser environment and is not reachable via executor localhost, so executor HTTP checks are not claimed. Local browser client redirects are not evidence of Vercel 308 headers. G12/U01/U03–U06 retain this verification action; U02 additionally needs statutory particulars. No access setting was weakened.

## Reproduction

- node scripts/build.mjs
- node scripts/check-sprint-1.mjs
- node scripts/check-sprint-2.mjs
- node scripts/check-sprint-3.mjs
- node scripts/check-sprint-4.mjs
- Optional print QA: Python with WeasyPrint 70, pypdf and local CSS/assets; run scripts/verify-print-briefs.py.
- Local browser viewports: node scripts/qa-supporting.mjs then /qa/supporting-320.html, -390.html, -768.html and -1440.html. The next build removes all QA fixtures from dist.

All 24 guide combinations passed after waiting for rendered result visibility; keyboard submit, pointer submit, reset and back restoration were checked. All 108 supporting-page width cases passed with scroll width equal to client width. CSS frame widths are 320/390/768/1440, scrollbar consumes 15px. No physical-phone or screen-reader claim. All three previous sprint regression scripts pass.

Sprint 5 should resolve the named deployed/statutory checks, complete whole-site accessibility/journey verification and measurement definitions, and prepare a concrete review. Preserve source IDs and current deferred integrations; no production merge is authorised by this sprint.
