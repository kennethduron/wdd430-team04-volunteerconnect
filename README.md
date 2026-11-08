# VolunteerConnect

VolunteerConnect is a **provisional WDD 430 Team 04 project proposal**. It explores a web application that helps community organizations publish volunteer opportunities and helps volunteers discover, apply for, and manage participation in service activities. The proposal has not been approved by a team meeting or vote.

## Purpose and audience

The proposed audience is community organizations, nonprofit groups, students, and individuals interested in volunteering. The product aims to make it easier to move from finding an opportunity to coordinating participation and tracking an application.

## WDD 430 planning links

- Public repository: <https://github.com/kennethduron/wdd430-team04-volunteerconnect>
- Team planning board (13 issues): <https://github.com/users/kennethduron/projects/3>
- Individual proposal: [`docs/project-proposal.md`](docs/project-proposal.md)
- Team preparation log: [`docs/team-activity-log.md`](docs/team-activity-log.md)
- Project specification: [`specs/001-volunteerconnect-mvp/spec.md`](specs/001-volunteerconnect-mvp/spec.md)

## Planned capabilities

- Register and authenticate volunteers and organizations.
- Maintain volunteer and organization profiles.
- Create, read, update, and remove volunteer opportunities.
- Search and filter opportunities.
- Apply for an opportunity and track its status.
- Provide responsive dashboards, form validation, loading states, and clear error messages.

The current MVP should prioritize organization and opportunity management, opportunity discovery, and the volunteer application flow. Features outside that path belong in a later backlog.

## Technology decisions for planning

- **Next.js App Router** for server and client routes in one full-stack application.
- **TypeScript strict mode** for typed components, domain models, and route contracts.
- **Tailwind CSS** for a consistent responsive design system.
- **PostgreSQL on Supabase** as the planned relational data store for users, organizations, opportunities, and applications. This is a design decision only; no Supabase project or paid service has been created.
- **Auth.js v5** is the planned authentication approach because it is an open-source option that can integrate with the application and its database. Final adapter and provider choices remain implementation decisions for the team.
- **GitHub** for issues, feature branches, pull requests, and review.
- **Vercel or equivalent** for a later deployment; no production service is configured in this setup phase.

## Team

The currently identified Team 04 members are:

- Kenneth Duron (`kennethduron`) — preparing this initial project setup.
- Virginia Rocha Guzman — team member; no project contribution is attributed here.
- Kelvin Gonzalez — team member; no project contribution is attributed here.

This README does not assert that a synchronous meeting occurred, that a leader was elected, or that the proposal received team consensus.

## Local setup

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Quality checks:

```bash
npm run lint
npm run typecheck
npm run build
```

Copy `.env.example` to `.env.local` only when local environment variables are introduced. Never commit `.env.local` or real credentials.

## Initial structure

```text
src/app/          Next.js App Router pages, layout, and global styles
public/           Static assets
.specify/         Spec-Kit project memory and specification artifacts
specs/            Feature specification and quality checklist
docs/             Proposal and factual preparation record
```

## Git workflow

- `main` is the stable branch.
- Create short-lived branches named `feature/<issue-slug>`, `fix/<issue-slug>`, or `docs/<topic>`.
- Open a pull request targeting `main`; describe the change, link its issue, and include verification results.
- Request at least one teammate review. Do not merge your own change until the required review is recorded and repository rules allow the merge.
- Run lint, TypeScript, and build checks before requesting review.

## W02 status

The public repository was initialized with Next.js, TypeScript, Tailwind CSS, App Router, ESLint, and Prettier. It includes a responsive proposal landing page and a public board with 13 issues, including the required collective review and kickoff task. The project direction, meeting facts, constitution, and specification remain provisional until the team reviews them; no synchronous meeting or vote is claimed.

## Deployment and API documentation

No database, authentication provider, or deployment service is configured yet. The proposal records Supabase PostgreSQL, Auth.js v5, and Vercel as provisional choices. The planned API endpoints and data model are documented in the project specification; implementation documentation must be updated when the team approves the design.

## Week 03 next steps

1. Review and approve or revise the project proposal and MVP scope as a team.
2. Confirm the database and authentication decisions and document the final data model.
3. Use the project board to prioritize issues and assign work by agreement.
4. Build the organization and opportunity CRUD path on reviewed feature branches.
5. Add validation, tests, accessibility checks, and deployment configuration without committing secrets.
