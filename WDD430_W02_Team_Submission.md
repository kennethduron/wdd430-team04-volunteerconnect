# WDD 430 — Week 02 Team Project and Code Review Reports

## Team Meeting Summary

I reviewed the available Team 04 project records while preparing this submission. The records do not document a synchronous team meeting, its attendees, or a meeting leader, so I cannot report those facts or claim that the team selected a project by consensus. I prepared VolunteerConnect as an individual proposal for the team to consider: it would help community organizations publish volunteer opportunities and help volunteers discover, apply for, and manage participation in service activities. The intended audience is community organizations, nonprofits, students, and people interested in volunteering. The proposal's intended value is to bring opportunity discovery, applications, and follow-up into one flow; the team still needs to compare it with the members' Week 01 proposals and make the actual selection together.

## Project Setup

The public Team 04 preparation repository is [kennethduron/wdd430-team04-volunteerconnect](https://github.com/kennethduron/wdd430-team04-volunteerconnect). Its linked [GitHub Project Board](https://github.com/users/kennethduron/projects/3) contains 13 open issues associated with the repository. The repository contains a Next.js App Router starter using TypeScript, Tailwind CSS, ESLint, and Prettier, together with a README, contributor workflow, and an initial responsive proposal page. The `main` branch is protected by a pull request requirement and at least one approval; force pushes are disabled. These are preparation resources. The team has not yet confirmed the project choice or assigned the issues.

## Project Specification Document

The [VolunteerConnect MVP specification](https://github.com/kennethduron/wdd430-team04-volunteerconnect/blob/docs/volunteerconnect-spec/specs/001-volunteerconnect-mvp/spec.md) is available for review in [open Pull Request #14](https://github.com/kennethduron/wdd430-team04-volunteerconnect/pull/14). It includes user stories, acceptance scenarios, functional requirements, entities, proposed API endpoints, technical decisions, MVP priorities, risks, and assumptions. It is explicitly an individual draft pending team review.

I initialized the repository with the official GitHub Spec-Kit initializer and used its generated Codex workflow to prepare the constitution and feature specification. The workflow produced a structured, checkable draft; recording the unresolved team decisions as assumptions made the document useful without implying approval. The constitution and specification still require review and ratification by Team 04.

## W02 Team: Code Review Report

I reviewed [Issue #1, “should-fix: Improve dark-mode text contrast”](https://github.com/Kelvingonzalezm/wdd430-portfolio/issues/1) in [Kelvin's deployed portfolio](https://wdd430-portfolio-wheat-gamma.vercel.app/). The issue was created by `kennethduron` and describes the contrast problem, its impact, and a recommended correction. The course's severity convention is represented by the `should-fix:` title prefix.

- The portfolio has a home page with project cards that provide project titles, descriptions, technologies, and links, plus an About route. These observations were checked against the repository source and the deployed site.
- The previously recorded responsive audit, dated November 1, 2026, checked 320, 375, 768, 1024, and 1440 pixel widths and reported no horizontal overflow; navigation to the About page worked at each tested width. I am reporting the dated audit rather than claiming a new run for this submission.
- Internal navigation to `/about` returned HTTP 200. The home page returned HTTP 200. The current read-only checks also confirmed the external project links resolve to the intended GitHub repositories.
- The deployed `/api/hello` endpoint returned HTTP 200 with `application/json` and the body `{"message":"Hello from Next.js API!"}`.
- The saved Lighthouse Mobile report from November 1, 2026 recorded Performance 100, Accessibility 93, Best Practices 100, and SEO 80. These are the recorded report values, not a new Lighthouse run.
- A saved computed-color audit found low contrast in dark-mode introductory text (1.92:1) and a project-card heading against its light card background (1.12:1). These results support the recommendation in Issue #1 to choose text and surface colors with adequate contrast in each theme.
- Chrome DevTools CSS Overview was not run. The available prior artifact was CSS Coverage, which measures stylesheet usage and is not a substitute for CSS Overview's color and contrast inspection.
- A concrete strength is the reusable project-card presentation, which gives visitors the information and destination link for each showcased project in a consistent format.
- A practical improvement is to correct the dark-mode and card text colors, then verify contrast for normal and large text in both themes. The live home page also returned without a detectable HTML `<title>` in the current response inspection, so adding and checking descriptive page metadata would improve browser and search presentation.
