# Frontier Capital Partners — structure preview

Editable corporate-site study on `build/bain-structure-replica`, draft PR #1. Production remains on main until approved.

## Build and edit

Run `node scripts/build.mjs` with Node 20 or later. No dependencies, install step, credentials or network are required. Vercel uses this build command and publishes `dist/`. Every build runs `scripts/check.mjs` to validate generated routes, local links/assets, disconnected forms and JavaScript syntax.

- Source route `index.html` files preserve each corporate template and section order.
- `content/site.json` owns the 80 fictional profiles, 12 fictional articles and 23 demonstration office records. Change these records to maintain consistent directory, detail, search and map content.
- `assets/replica.js` and `assets/replica.css` implement shared behaviour and layout refinements. Captured public reference layout rules remain isolated in `reference-*.css`.
- Replace local image placeholders in source templates and the hero artwork. The build generates 114 routes, `assets/site-data.js` and `route-inventory.json`; do not edit generated output.

Forms are demonstrators only. CSP blocks submissions, network connections and embedded frames. No form entries are stored. The consent UI remembers only its dismissed state for the session. No analytics are loaded. Preview pages carry noindex headers.

Inter and Libre Caslon Display are bundled under their included SIL Open Font Licenses. Libre Caslon Display substitutes for the reference proprietary serif. The world map uses public-domain Natural Earth boundaries (assets/world-LICENSE.txt). Photography/video slots use authored neutral placeholders.

See docs/build-plan.md, docs/verification.md and docs/development-pass-2.md for scope, evidence and remaining differences. Separate business sites, authentication, recruitment, report downloads and historical archive migration remain labelled placeholders.
