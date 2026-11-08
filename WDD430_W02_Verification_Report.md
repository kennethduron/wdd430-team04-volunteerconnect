# WDD 430 W02 Verification Report

**Repository:** [kennethduron/wdd430-team04-volunteerconnect](https://github.com/kennethduron/wdd430-team04-volunteerconnect)  
**Project board:** [WDD 430 Team 04 — VolunteerConnect](https://github.com/users/kennethduron/projects/3)  
**Report date:** November 8, 2026

## Rubric evidence and status

| Criterion                                                                                      | Evidence                                                                                                                                                                                                                                                                                                                                        | Status                                                                                              |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Team meeting summary: actual attendees, meeting leader, and project selection rationale        | The preparation log records that no synchronous meeting or vote is documented. It does not invent attendees or a leader. VolunteerConnect is identified as Kenneth's provisional proposal, not a team selection.                                                                                                                                | **Incomplete** — Team 04 must hold/document the meeting and choose a proposal together.             |
| Public project repository and setup                                                            | [Public repository](https://github.com/kennethduron/wdd430-team04-volunteerconnect); Next.js App Router, TypeScript, Tailwind, ESLint, Prettier, README, contributor workflow, responsive proposal page.                                                                                                                                        | **Prepared** — verify whether the course requires further team-authored setup after the team meets. |
| GitHub Project Board with at least seven real project issues                                   | [Board](https://github.com/users/kennethduron/projects/3); 13 open repository issues were confirmed and linked to the board.                                                                                                                                                                                                                    | **Pass, based on recorded verification**                                                            |
| Specification created with Spec-Kit and made accessible                                        | [Specification on the PR branch](https://github.com/kennethduron/wdd430-team04-volunteerconnect/blob/docs/volunteerconnect-spec/specs/001-volunteerconnect-mvp/spec.md); official Spec-Kit initializer and generated workflow were used. [PR #14](https://github.com/kennethduron/wdd430-team04-volunteerconnect/pull/14) is open and unmerged. | **Prepared; team approval pending**                                                                 |
| Team constitution and project direction                                                        | Draft constitution and feature specification record unresolved decisions and remain provisional.                                                                                                                                                                                                                                                | **Incomplete** — Team review and ratification required.                                             |
| Code review of assigned teammate Kelvin Gonzalez                                               | [Issue #1](https://github.com/Kelvingonzalezm/wdd430-portfolio/issues/1) is authored by `kennethduron`; its title begins with `should-fix:` and it explains the issue, impact, and suggested correction.                                                                                                                                        | **Pass, based on recorded verification**                                                            |
| Deployed portfolio checks: requirements, responsive behavior, links, endpoint, Lighthouse, CSS | [Kelvin's site](https://wdd430-portfolio-wheat-gamma.vercel.app/). Saved responsive and Lighthouse audits are dated Nov. 1, 2026. Current read-only checks on Nov. 8 confirmed `/`, `/about`, `/api/hello`, and external GitHub links. CSS Overview was not run; prior CSS Coverage was not treated as equivalent.                              | **Partial** — CSS Overview remains unverified; existing contrast findings are recorded.             |
| Submission report and academic integrity                                                       | `WDD430_W02_Team_Submission.md` contains the four required sections and an eight-bullet code review. It does not claim a meeting, consensus, teammate work, or new Lighthouse/responsive tests.                                                                                                                                                 | **Prepared; not submitted to Canvas**                                                               |

## Repository and collaboration checks

- Local repository root: `C:\Users\user\OneDrive\Documentos\Kenneth\cse341\wdd430-team04-volunteerconnect`.
- Remote: `https://github.com/kennethduron/wdd430-team04-volunteerconnect.git`.
- Working branch at report preparation: `docs/volunteerconnect-spec`.
- Initial repository commit: `3e1ab4f` (`chore: initialize VolunteerConnect proposal`).
- Specification commit: `2835e2496cf67f174ddbc74f57c62f0d46717262` (`docs: specify VolunteerConnect MVP for team review`).
- Pull Request #14 targets `main`, is open and unmerged, and requires at least one approval under the recorded branch protection. No successful reviewer request is recorded. Kelvin's collaborator invitation was pending in the last confirmed check; Virginia's GitHub username was not confirmed.
- `main` was confirmed protected with required pull requests, one approval, and force pushes disabled in the last successful GitHub API check.
- The board has 13 open issues; issue assignment and project selection remain for Team 04 to decide.

## Local quality checks

The initialized application passed `npm ci`, `npm run format`, `npm run lint`, `npm run typecheck`, and `npm run build` in the recorded local verification. `git diff --check` passed. A secret-pattern review found no committed credentials; `.env.local` was absent and `.env.example` contains only a template. These checks validate the scaffold and proposal page, not an implemented VolunteerConnect backend.

## Remaining dependencies

1. Team 04 must hold and document its actual meeting, attendees, leader, project selection, and rationale.
2. Teammates must review and ratify or revise the project proposal, constitution, specification, and issue priorities.
3. Kelvin must accept the pending repository collaborator invitation before GitHub can record a review request; PR #14 must receive the required teammate approval before it can be merged.
4. Confirm Virginia's GitHub username before sending any invitation, if the team wants one.
5. Run Chrome DevTools CSS Overview on Kelvin's deployed site, or clearly leave that specific check unverified.
6. Review the live Lighthouse and responsive evidence if the course expects fresh results; the values included in the submission are dated prior audits.
7. The report has not been submitted to Canvas. Canvas submission and personal reflections remain Kenneth's responsibility.
