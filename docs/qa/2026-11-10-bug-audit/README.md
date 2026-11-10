# Website bug audit — 10 November 2026

**Outcome:** two confirmed defects fixed and retested; no further confirmed defects in the checks completed. This is bounded local QA, not a claim that the site is bug-free or ready for production.

Branch: build/site-refinements-v3. Starting head: 90eab8d4036c251fed961ad603fc5f01130f1280. **Tested code: 2631faf7657aa2e94e53884236aa4ebd8d90a0bf.** Evidence/handover follow in a documentation-only commit, identifiable in Git history. Owner review remains Pending. Main and production unchanged.

## Fixed defects

| ID | Severity | Reproduction before fix | Change and verified result |
| --- | --- | --- | --- |
| BUG-01 | Low, functional | Funding Guide: choose growth/prepare, show results, reset, Back, Forward. Results hide but choices incorrectly restore growth/prepare instead of reset defaults. | assets/decision-support.js now restores default objective/help when URL has no valid result pair. Browser reset/Back/Forward returns cash-flow/understand with results hidden. |
| BUG-02 | Medium, accessibility | Shared 11px numbered labels use #657c8e, contrast 4.35:1 on white and 4.02:1 on #f4f6f8, below 4.5:1 for small text. | assets/customer-journey.css uses #536477. Contrast is 6.07:1 on white and 5.61:1 on the light panel. Repeated DOM/computed-style sampling finds no failures on assessed solid backgrounds. |

## Checks actually completed

| Area | Evidence/result |
| --- | --- |
| Build/content/routes/assets | 48 emitted documents; 4,116 internal links/anchors and 372 asset references pass. Sprint 1–5 checks pass; see regression.txt. |
| Responsive rendering | 45 fixture entries × four widths = 180 checks at 320/390/768/1440. No horizontal overflow, broken completed images or missing/duplicate h1. Services overview is intentionally included in both fixture groups; 44 distinct routes. See browser-results.json. |
| Text contrast | 4,806 rendered text samples across desktop fixture pages, including repeated shared components. 515 gradient-background samples excluded from the numeric audit; remaining solid-background samples have zero failures after fix. Samples exclude input placeholder text, hover states and nontext contrast. This is not full WCAG certification. |
| Funding guide | All eight objectives × three help choices exercised through keyboard submission; expected result cards/checklists/focus pass. URL-loaded growth/prepare renders; reset/Back/Forward verified after fix. Single pointer submissions also observed working. Rapid repeated pointer batch clicks sometimes missed submission during layout/scroll changes; the completed matrix uses focused Enter and waits for visible results. No additional production defect inferred from that automation behavior. |
| Enquiry | Blank required fields show linked/inline errors; populated synthetic values show disconnected-preview notice; callback requirement/error removal checked; all 21 topic email subjects match. Invalid city/stage and arbitrary email query values excluded. Entered name/company/email/outline are not copied into the email link. No mail client launched and no email sent. |
| Menus/keyboard | Desktop dropdown opens, Escape closes; mobile menu moves focus to Client Login, makes main/footer inert, Escape clears inert and restores menu-toggle focus. |
| Account interfaces | Synthetic login, password visibility, assistance action clear values and remask password; recovery Enter clears input and shows assistance. No real credentials used; no successful sign-in or reset delivery claimed. |
| Legacy fallback | All ten legacy destination titles resolve locally to expected pages; unknown title resolves to guide; #main survives. This tests client fallback, not actual Vercel HTTP redirect codes. |
| 404 page | Explicit generated 404.html renders recovery heading. An unknown URL's actual deployed HTTP status remains unverified. |
| Structure | All 48 generated documents pass language/image-alt/explicit form-label audit. See accessibility-structure.json. |
| Console | No local-site error logs returned by URL-filtered console query. Browser-extension metadata errors were observed and excluded as extension-origin noise. |
| Measurement | 34 accepted disabled event cases; 21 rejected payloads; no public measurement import/transport. |

## Limits and open release checks

The branch preview was retried and again redirected to Vercel sign-in. Deployed HTTP headers/status codes, real 404 behavior, clean-URL contact-context propagation and end-to-end deployed smoke tests remain open under G10/G12/G15/U01–U06. Do not count local daemon trailing-slash/query behavior as a production bug: the daemon differs from Vercel cleanUrls/trailingSlash configuration.

Official company particulars remain an open verification item under U02. Forms, auth/recovery delivery, document exchange and analytics activation remain intentionally deferred/inactive, not newly discovered faults. No customer messages, production changes or security-protection changes occurred.

No fresh physical-phone, actual screen-reader, browser network/storage instrumentation, Chrome print-dialog, performance benchmark, penetration test or cross-engine/browser pass is claimed. Ten two-page print briefs were checked in Sprint 4; this audit changes only a small label color and guide history and does not rerun that print engine.

## Handover

Existing draft PR #3 includes the fixes. Keep it draft pending named release checks and owner review. Task statuses remain 122 Complete, nine In progress, one Deferred. Before release, verify the deployed reviewed head and resolve existing release blockers; see ../../sprints/release-handover.md. To undo these fixes, revert tested code commit 2631faf7657aa2e94e53884236aa4ebd8d90a0bf in a reviewed commit. Never reset main or force-push. No production rollback is needed because production was not changed.
