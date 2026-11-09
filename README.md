# Frontier Capital Partners — structure preview

Review branch for the Bain Capital corporate-site structure study. This is an editable static HTML/CSS/JavaScript draft, not a production release or completed pixel-parity implementation.

- Plan: docs/build-plan.md
- Reference map: docs/reference/bain-capital-site-structure.md
- Route/section inventory: docs/page-inventory.json
- Verification and remaining differences: docs/verification.md

Each route has its own index.html. Replace copy and individual image src values in that page; shared image placeholders are in assets/. Authored behaviour/overrides are assets/replica.js and assets/replica.css. The reference-*.css files preserve captured public reference layout rules; they are isolated from authored overrides for later cleanup. They are not represented as an original Frontier design system. Reference imagery, typeface files, portal services and executable tracking/submission scripts are not bundled.

Vercel: static “Other” preset, repository root, no install/build command. vercel.json enables clean routes and preview noindex headers. This branch must not be merged to main until approved. Forms are intentionally disconnected; CSP prevents submissions and network calls. No database or credentials are required.
