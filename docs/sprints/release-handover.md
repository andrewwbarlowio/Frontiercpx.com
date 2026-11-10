# Release handover — 10 November 2026

Branch: build/site-refinements-v3. Tested code: 9146a3805a3987e601b7fc5bd0d543a020443a2d. Owner review Pending. Release NOT approved. Main remains e4a51cc2b800fb50b27fbffb736b836429997935.

Preview: https://frontiercpx-git-build-site-refinements-v3-andrewbarlowio.vercel.app

## Delivered and checked

48 generated documents; seven service detail pages; ten funding journeys and printable briefs; guide, comparison and supporting pages; canonical process; anonymous partner/proposed location wording; inactive login/recovery. Current enquiry route is direct email. Measurement defined but disabled, with no public runtime import.

Fresh build and Sprint 1–5 checks pass: 4,116 internal link/anchor checks, 372 asset references, 24 guide combinations checked structurally, 34 accepted disabled measurement cases and 21 rejected payload cases. All 48 documents pass explicit form-label/image-alt/language structural checks. These checks do not prove WCAG conformance.

Earlier browser and print evidence remains applicable because Sprint 5 changes no public runtime code: Sprint 3 forty funding width checks; Sprint 4 108 supporting width checks, guide interaction cases and ten two-page WeasyPrint briefs. See evidence/sprint-03 and evidence/sprint-04. No fresh browser interaction, physical-device, screen-reader or Chrome print-dialog pass is claimed in Sprint 5.

## Remaining acceptance actions

| Items | Action and owner |
| --- | --- |
| G10, G12, G15, U01, U03–U06 | Development: obtain authenticated access to the correct Vercel preview, verify contextual navigation, redirects/status codes, security/noindex headers, true 404 and full journey smoke tests. Preview previously redirects this session to Vercel sign-in. Connected Vercel account does not expose this project. Deployment success is not functional proof. |
| U02 | Andy/Roger: confirm exact registered name/number against the official statutory record; development to update and verify website information. Candidate third-party company number remains unpublished. |
| G11 | Deferred: automated forms, delivery and qualification integration. No fake success; no activation in this release. |
| Owner checkpoint | Andy: review preview and known limitations. Production merge requires explicit release approval after named acceptance actions. |

Actual phone/screen reader, instrumented browser network/storage capture and Chrome print-dialog verification are not run. A source/CSP audit is not a network trace. The preview is deliberately noindex; production indexing configuration must be decided and verified before launch.

## Task audit

132 unique IDs: 122 Complete, nine In progress (G10/G12/G15/U01–U06), one Deferred (G11). Full row-by-row snapshot: evidence/sprint-05/task-audit.json. Earlier closeouts retain implementing commits and evidence for completed IDs. Do not reinterpret these counts as production readiness.

## Release and recovery

After blockers are resolved, rerun affected checks at the reviewed head, update evidence, obtain owner approval, merge, then verify production headers/routing/contact and chosen indexing. Do not activate auth/forms/analytics as part of merge. Record the exact production deployment and known-good predecessor before promotion. On failure, restore the recorded known-good Vercel production deployment; if source correction is required, revert the merge in a reviewed commit. Do not reset main or force-push. Pre-Sprint-5 branch baseline is 00fbfc16d31223bebde02b2f0a9e9c8721e28e4f; this is a source baseline, not a verified production rollback deployment. No production deployment was changed by this work.
