# Sprint 5 Verification and release readiness

**Status:** Planned. No implementation started by these documents.

**Primary work items:** 2. Owners: development for implementation and evidence; Andy/Roger for business facts and release decisions. No fixed duration or dates are committed.

## Outcome

Prove the complete current scope works and prepare a concrete release for owner review.

## Scope

Run full G15 regression and final G16 measurement definition/disabled-adapter checks. Audit the complete 132-item register and deferred work. Prepare final PR/release notes, evidence, rollback record and handover. Merge/production release is conditional on owner approval of the concrete release, not authorised by these planning documents.

## Dependencies and early preparation

Sprints 1–4 complete with evidence or explicit named exclusions. Fix defects in the owning sprint task and repeat affected checks. Do not reactivate G11 or portal/backend work to achieve a green release status.


## Work items

Each ID has one primary sprint assignment. The full source specification and its page acceptance criteria remain binding; early contributions are not duplicate task completion.

### G15

- [ ] Complete journey and accessibility verification — L effort  |  Dependencies All changed components Build Run the regression matrix in this plan against local build and deployed preview. Cover initial content, navigation, focus, validation, images, redirects, contact context and 320-pixel layouts. Done when Check evidence identifies environment, branch and commit. Actual device and assistive-technology limits are stated. No blocker is hidden by a successful static build.

### G16

- [ ] Establish conversion measurement — M effort  |  Dependencies D08 G14; G11 only for future delivery events Build Define funding/service route selection and email-link clicks for the current release, with synthetic checks or a disabled adapter. Defer form delivery and qualified-lead integration. Exclude credentials, personal details and free text from analytics. Done when Event definitions distinguish a click from an email received or funding secured. Permitted collection and tooling are documented before activation. No conversion-uplift claim or target is invented.

## Acceptance criteria

No unexplained missing task, broken route, clipped content or falsely successful send/login. Current email links work; credentials and form contents are not transmitted. Sitemap/indexing choice is deliberate. PR identifies exact reviewed head, limitations and rollback deployment. Release execution waits for the recorded owner go-ahead.

## Verification and evidence

Complete build/content/link/redirect regression; responsive and keyboard/accessibility checks; guide/brief evidence; deployed smoke checks; measurement payload audit; identify actual-device/assistive-tech limits. Deployment success alone is not functional evidence.

## Review checkpoint

Deliver a reviewable release with preview URLs, final task register, validation, known limits and rollback steps. After explicit approval, merge and verify production; record any resulting defects and recovery.

## Boundaries

Keep the existing branch and approved brand/assets. Forms, authenticated login, password recovery delivery and document-platform setup remain deferred. No customer outreach, real credentials or transaction data in tests. Do not mark a task complete without implementing commit and evidence.

## References

- [Sprint index and task register](README.md)
- [Complete implementation specification](implementation-specification.md)
- [Deferred operations](deferred-operations.md)

## Mandatory sprint closeout gate

A sprint must not be marked Complete or Closed until its development write-up is committed and the following checks pass. Keep the record in [closeouts](closeouts/) as `sprint-NN.md`, using the [closeout template](closeout-template.md).

- [ ] Every assigned task has a final status, implementing commit, evidence and any remaining action. Never silently carry incomplete work into the next sprint.
- [ ] Explain what changed and why, including relevant source files, content schemas, routes, shared components and behaviour. Record material decisions and deviations from the agreed specification.
- [ ] Record the exact tested code commit, branch, environment and preview URLs. If the closeout is a later documentation-only commit, distinguish it from the tested code commit.
- [ ] Record checks actually run, their results and evidence. Identify unrun checks, pre-existing failures, browser/device/assistive-technology limits and relevant mobile/desktop screenshots. Do not infer functional success from deployment alone.
- [ ] Document known defects, deferred work, risks and follow-up task/owner. Any change to agreed scope must have an explicit reason and decision; unrelated deferred integrations remain excluded.
- [ ] Update the master task register and affected architecture, content, route or operating documentation so the next sprint can continue without this conversation.
- [ ] Record the checkpoint demonstration and Andy's review status accurately as Not requested, Pending, Accepted or Changes requested. Engineering completion does not imply owner acceptance.
- [ ] Provide handover notes and rollback/recovery guidance where relevant. No new credentials or customer information in documentation.

**Pass rule:** required current-scope acceptance checks pass and the closeout evidence is complete, or each exception has an explicit recorded disposition and owner. Unresolved blockers mean the sprint remains In progress or Blocked. The next sprint may perform independent preparation, but dependent implementation must not assume an unmet acceptance condition is satisfied. Owner release approval remains a separate gate before merge/production release.
