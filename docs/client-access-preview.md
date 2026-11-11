# Client access interaction preview

11 November 2026. Design branch only; no main merge or authentication backend.

## Design

Login and recovery use a focused navy layout with the approved identity, a restrained dark panel, one primary action, account-help and return-to-site links. Full marketing navigation/footer are omitted on these two routes. Mobile navigation exposes client login as a full-width utility row with a lock icon, subtle separator and trailing arrow, rather than a small outlined pill.

Password visibility is an inline 44px eye control, with changing Show/Hide accessible labels and pressed state. Passwords are hidden by default. Inputs support username/current-password autocomplete, paste, keyboard submission and password managers; spelling/capitalisation correction is disabled.

## Behaviour and boundaries

- Required-field errors are specific, associated with inputs, and focus the first invalid field.
- A valid-format submission enters a 650ms simulated busy state, prevents duplicate attempts, then always displays the same generic sign-in failure.
- Password clears and is re-masked after failure; username remains for correction. Page transitions clear both fields, errors and pending timers.
- Caps Lock feedback is provided while editing the password. Error feedback has alert semantics; loading has a polite live region. Reduced motion disables spinner animation.
- Recovery validates the identifier and follows a busy state with an explicit preview-unavailable message. It never claims a reset email was sent.
- No requests, database lookup, credential logging/storage, session, account creation or successful authentication. Existing CSP continues to block form submission and connections. A small notice requests sample details.
- This is an interaction prototype, not a security-reviewed authentication implementation. Real accounts, recovery, throttling and session handling remain future work.

## Reference patterns

- GOV.UK Password input: https://design-system.service.gov.uk/components/password-input/ (hidden by default, accessible visibility control, generic credential failure, password clearing).
- OWASP Authentication Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html (generic authentication failure without identifying whether an account exists).

## Verification

- Existing 48-route build and local link/asset/syntax checks pass.
- `node scripts/qa-auth.mjs` exercises the shipped interaction using inert DOM doubles: empty fields, show/hide, Caps Lock, busy/duplicate-submit states, universal rejection, password clearing, lifecycle cleanup and truthful recovery. No actual credentials or accounts are used.
- Browser checks cover login/recovery/home navigation at 320, 390 and 768px: no page/control overflow. Desktop layout visually reviewed.
- Browser empty-submit errors, visibility control and mobile account-link navigation were checked. Successful/non-empty simulated flows were tested offline, without entering credentials into a live browser.
