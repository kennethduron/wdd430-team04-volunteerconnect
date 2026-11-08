# VolunteerConnect Constitution

## Core Principles

### I. User Value and Focused MVP
Every feature MUST serve a documented need for volunteers or community organizations. The MVP MUST prioritize finding opportunities, managing opportunities, and applying to volunteer; ideas outside that path belong in a later backlog unless the team approves a scope change.

### II. Accessible, Responsive Experience
Every user-facing flow MUST use semantic HTML, keyboard-operable controls, visible focus, clear labels, and layouts that work on mobile and desktop. Contrast and interaction states MUST be checked before review.

### III. Typed, Reusable Architecture
The application MUST use the Next.js App Router and strict TypeScript. Shared behavior and visual patterns MUST use reusable components where that improves consistency; client components MUST be limited to interactions that need browser state.

### IV. Secure Data and Explicit Boundaries
Data access and authorization MUST be enforced on the server. Inputs MUST be validated at route boundaries, errors MUST be safe for users, and secrets MUST stay in local or hosting environment configuration and out of Git, logs, and client bundles.

### V. Verifiable Quality
Changes MUST include appropriate checks for their behavior. Before a pull request requests review, lint, TypeScript checks, and a production build MUST pass; features that change important user journeys MUST include automated tests or a documented reason and manual verification plan.

## Technical Constraints

The planned stack is Next.js App Router, strict TypeScript, and Tailwind CSS. PostgreSQL managed by Supabase is the proposed data store, and Auth.js v5 is the proposed authentication library. These are planning decisions, not configured services; the team must confirm them before production integrations. No paid resource or third-party credential may be added without explicit team and account-owner approval.

## Development Workflow

Work MUST be tracked in GitHub Issues with testable acceptance criteria. Contributors MUST use short-lived `feature/*`, `fix/*`, or `docs/*` branches and submit pull requests to `main`. Pull requests MUST describe scope, link relevant issues, and record checks. At least one teammate MUST review each pull request, and authors MUST address required feedback before merging. Force pushes to `main` are prohibited.

## Governance

This document is a proposed baseline prepared by Kenneth Duron for Team 04 discussion. It has not been ratified by a synchronous meeting or team vote and MUST NOT be represented as a consensus decision. The team may adopt or amend it through a reviewed pull request after discussing the change; the amendment must explain its impact and update the semantic version and dates. Reviewers should check requirements and evidence against these principles. Until ratification, technical choices described here remain proposals.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): pending team review | **Last Amended**: 2026-11-08
