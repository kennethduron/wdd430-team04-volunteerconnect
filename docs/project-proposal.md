# VolunteerConnect — Provisional Team 04 Proposal

**Prepared by:** Kenneth Duron (`kennethduron`)  
**Prepared:** 2026-11-08  
**Status:** Individual proposal for team discussion; not selected by a team vote.

## Description

VolunteerConnect is a web application proposal for community organizations to publish volunteer opportunities and for volunteers to discover, apply for, and manage participation in service activities. It is intended to make the path from finding a local service opportunity to coordinating participation easier to follow. The application would support community organizations, nonprofits, students, and individuals interested in volunteering.

## Problem or Need

Volunteer opportunities and participation details can be scattered across separate channels, making discovery, application, and follow-up difficult for both volunteers and organizations.

## Proposed MVP features

1. Volunteer and organization registration, sign-in, and profiles.
2. Organization-owned opportunity creation, editing, and closing.
3. Opportunity browsing, search, and filtering.
4. Volunteer applications with a visible application status.
5. Responsive dashboards with validation, loading states, and clear errors.

## Proposed technical direction

- Next.js App Router, TypeScript strict mode, and Tailwind CSS.
- PostgreSQL hosted by Supabase for relational user, organization, opportunity, and application data.
- Auth.js v5 for session-based authentication.
- GitHub for issue tracking, feature branches, and pull request review.
- Vercel or an equivalent host for a later deployment.

These are planning choices only. No database, authentication provider, hosting service, paid plan, or production credential has been configured. The team should confirm or revise the choices before implementation.

## Discussion and approval status

No synchronous meeting or team vote is recorded as of the preparation date. VolunteerConnect is Kenneth's provisional proposal and must not be presented as a team consensus. The next team meeting should review the problem, MVP scope, data model, and technical direction before the proposal is treated as selected.
