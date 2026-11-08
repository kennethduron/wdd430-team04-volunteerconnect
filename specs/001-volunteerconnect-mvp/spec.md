# Feature Specification: VolunteerConnect MVP

**Feature Branch**: `docs/volunteerconnect-spec`

**Created**: 2026-11-08

**Status**: Draft — individual proposal; awaiting team review

**Input**: Kenneth Duron's provisional VolunteerConnect proposal supplied for WDD 430 Team 04. This document does not record a team vote or consensus.

## User Scenarios & Testing

### User Story 1 - Discover an Opportunity (Priority: P1)

A visitor can browse open volunteer opportunities, narrow the list by cause, location, and date, and read the details of a relevant opportunity.

**Why this priority**: Discovery is the first user value and can be delivered without organization dashboards or application tracking.

**Independent Test**: Seed multiple open and closed opportunities, search by each supported filter, and verify that the results and detail page describe the selected open opportunity.

**Acceptance Scenarios**:

1. **Given** open opportunities exist, **When** a visitor opens the opportunity list, **Then** the visitor sees a paginated list of open opportunities with title, organization, location, date, and a detail link.
2. **Given** opportunities differ by cause, location, or date, **When** a visitor applies one or more filters, **Then** only matching open opportunities are shown and the active filters are visible.
3. **Given** a filter has no matches, **When** it is applied, **Then** the page shows a clear empty state and a way to clear filters.

---

### User Story 2 - Publish and Manage Opportunities (Priority: P1)

An authenticated organization manager can create, review, update, and close opportunities owned by that organization.

**Why this priority**: Opportunity discovery depends on organizations being able to publish accurate service needs.

**Independent Test**: Sign in as an organization manager, create an opportunity, reload it from the public list, update it, and close it; verify that another organization's manager cannot change it.

**Acceptance Scenarios**:

1. **Given** a signed-in organization manager with a complete organization profile, **When** the manager submits valid opportunity details, **Then** the opportunity is saved as open and appears in discovery.
2. **Given** the manager owns an open opportunity, **When** the manager edits valid details, **Then** the saved details are updated and shown to visitors.
3. **Given** an opportunity has received applications, **When** its owner closes it, **Then** new applications are prevented and existing applications remain available to the organization.
4. **Given** a different organization manager requests a change to the opportunity, **When** authorization is checked, **Then** the request is denied and the saved opportunity is unchanged.

---

### User Story 3 - Apply and Follow Status (Priority: P1)

An authenticated volunteer can submit one application to an open opportunity and review its current status.

**Why this priority**: An application completes the primary path from opportunity discovery to participation.

**Independent Test**: Sign in as a volunteer, apply to an open opportunity, verify the confirmation and status, then attempt a duplicate application and verify it is prevented.

**Acceptance Scenarios**:

1. **Given** an eligible volunteer views an open opportunity, **When** the volunteer submits a valid application, **Then** one application is recorded and a confirmation with its initial status is shown.
2. **Given** the volunteer has already applied, **When** the volunteer submits the same application again, **Then** the system prevents a duplicate and explains that an application already exists.
3. **Given** an opportunity is closed or full, **When** a volunteer attempts to apply, **Then** the application is rejected and no record is created.
4. **Given** an organization updates an application's status, **When** the volunteer views their applications, **Then** the current status and last update are displayed.

---

### User Story 4 - Maintain Profiles and Coordinate Applicants (Priority: P2)

Volunteers can maintain a profile, organization managers can maintain their organization's public profile, and managers can review applications submitted to their own opportunities and update their status.

**Why this priority**: Profiles and applicant management improve coordination after the core discovery and application flows work.

**Independent Test**: Update a volunteer profile and verify it persists; create or update an organization profile and check its public view; then review an owned opportunity's applicants and update one status.

**Acceptance Scenarios**:

1. **Given** a volunteer is signed in, **When** the volunteer saves valid profile details, **Then** the profile is updated and the volunteer can review it later.
2. **Given** an organization manager owns an opportunity with applications, **When** the manager opens its applicant list, **Then** only applications for that organization's opportunities are returned.
3. **Given** an organization manager is authorized for an application, **When** the manager selects an allowed status, **Then** the status and update time are saved and visible to the volunteer.
4. **Given** an organization manager creates or updates their own organization profile, **When** valid details are saved, **Then** the active public profile shows those details and a different manager cannot change them.
5. **Given** an organization has opportunities or application history, **When** its manager deactivates the profile, **Then** it is removed from active public discovery while related records remain preserved.

### Edge Cases

- Empty search results show a helpful message and a clear-filter action.
- Closed, expired, or full opportunities cannot receive new applications.
- Repeated requests cannot create duplicate applications for the same volunteer and opportunity.
- Invalid dates, missing required text, and values outside documented limits are rejected with field-level guidance.
- A user who is signed out, has the wrong role, or does not own a resource cannot access or modify protected data.
- Closing an opportunity or deactivating an organization preserves application history.
- If a record is removed between loading a form and submitting it, the user receives a not-found response and the page refreshes its state.
- Public pages do not expose volunteer contact details, private application messages, or internal status notes.

## Requirements

### Functional Requirements

- **FR-001**: The system MUST allow visitors to browse open volunteer opportunities and view their public details without creating an account.
- **FR-002**: The system MUST allow visitors to search and filter opportunities by cause, location, and date, and MUST identify when no results match.
- **FR-003**: The system MUST allow an authenticated organization manager to create, read, update, and close opportunities owned by that organization.
- **FR-004**: The system MUST prevent an organization manager from changing another organization's profile or opportunities.
- **FR-005**: The system MUST allow an authenticated volunteer to maintain their own profile and submit an application to an open opportunity.
- **FR-006**: The system MUST prevent more than one active application from the same volunteer for the same opportunity.
- **FR-007**: The system MUST allow authorized organization managers to list applicants for their opportunities and update application status to `submitted`, `under_review`, `accepted`, or `declined`.
- **FR-008**: The system MUST show volunteers the latest status of their applications and a confirmation after submission.
- **FR-009**: The system MUST validate required fields, formats, allowed status transitions, and resource ownership before saving changes.
- **FR-010**: The system MUST preserve an application's history when an opportunity is closed or an organization is deactivated.
- **FR-011**: The system MUST provide responsive layouts, keyboard-operable navigation, labeled form controls, visible focus, loading feedback, and understandable error messages.
- **FR-012**: The system MUST keep authentication secrets, private contact details, and application messages out of public responses and client-visible configuration.
- **FR-013**: The system MUST let an organization deactivate its profile without deleting records needed to preserve application history.

### Key Entities

- **User**: An authenticated account with an identity, email, role, and sign-in state.
- **Volunteer Profile**: A volunteer's display name, interests, skills, and general availability, owned by that volunteer.
- **Organization**: A community organization with a public profile and one or more authorized manager accounts.
- **Opportunity**: A service activity published by an organization, with a title, description, cause, location, dates, capacity, and open/closed state.
- **Application**: A volunteer's submission for one opportunity, with a message, status, timestamps, and a relationship to its volunteer and opportunity.

## Success Criteria

### Measurable Outcomes

- **SC-001**: In a usability check, at least 9 of 10 first-time participants can find an opportunity matching a stated cause and location within 3 minutes.
- **SC-002**: In a usability check, at least 9 of 10 organization managers can publish a complete opportunity within 5 minutes.
- **SC-003**: In 100 repeated-application test attempts, no volunteer-opportunity pair creates more than one application.
- **SC-004**: At least 9 of 10 test volunteers can submit an eligible application and locate its current status within 3 minutes.
- **SC-005**: All unauthorized cross-organization update and applicant-list test cases are denied without changing or exposing protected records.
- **SC-006**: The main discovery, organization-management, and application flows remain usable at 320-pixel mobile width and at desktop width without horizontal page scrolling.

## Assumptions

- Visitors may browse opportunities without an account; applying or managing content requires authentication.
- A user selects either volunteer or organization-manager access during onboarding; a single account may not change organization ownership without an explicit team-approved flow.
- Organizations control their own public descriptions and opportunity content; no external organization verification is included in the MVP.
- An opportunity with application history is closed or archived rather than hard-deleted.
- An application begins as `submitted`; only an authorized manager may move it to `under_review`, `accepted`, or `declined`.
- The first release is English-language and does not include payments, real-time messaging, automated background notifications, or volunteer-hour certification.
- Data retention, provider selection, and production policies must be reviewed before the application handles real personal data.

## Project Overview and Technical Appendix

This appendix is separated from the user-focused requirements because it records the course-requested architecture and implementation direction. All choices below remain provisional until Team 04 reviews them.

### Project title, description, purpose, and audience

**VolunteerConnect** is a proposed web application for community organizations to publish volunteer opportunities and for volunteers to discover, apply for, and manage participation. It addresses the difficulty of coordinating discovery, applications, and follow-up across disconnected channels. The intended audience is community organizations, nonprofits, students, and individuals seeking service opportunities.

### User roles

- **Visitor**: Browse public organization and open-opportunity information.
- **Volunteer**: Maintain a profile, apply, and follow application status.
- **Organization manager**: Manage their organization profile and opportunities, and review applications for opportunities they own.

### Technical requirements and decisions

- **Framework**: Next.js App Router, with server-rendered pages by default and client components only for browser interactions that require them.
- **Language**: TypeScript strict mode for components, application contracts, and server routes.
- **Styling**: Tailwind CSS with a documented color palette, type scale, spacing, and reusable components.
- **Database**: PostgreSQL managed by Supabase is the proposed relational store; no Supabase project is created by this specification.
- **Authentication**: Auth.js v5 is proposed because it is open source and can use the application's database/session model; the final adapter and sign-in providers remain team decisions.
- **Repository and workflow**: GitHub issues, `feature/*` branches, pull requests, and at least one teammate review before merge.
- **Hosting**: Vercel or equivalent after the team reviews the deployment and environment-variable plan; no service or paid plan is created here.
- **Quality**: ESLint, Prettier, TypeScript checks, automated tests for access rules and core journeys, and accessibility/responsive checks.

### Conceptual data model

- **User**: `id`, `email`, `role`, `createdAt`; authentication credentials and session tokens are not public profile fields.
- **VolunteerProfile**: `userId`, `displayName`, `interests[]`, `skills[]`, `availability`, `updatedAt`.
- **Organization**: `id`, `name`, `description`, `location`, `ownerUserIds[]`, `status`, `createdAt`, `updatedAt`.
- **Opportunity**: `id`, `organizationId`, `title`, `description`, `cause`, `location`, `remote`, `startsAt`, `endsAt`, `capacity`, `status`, `createdAt`, `updatedAt`.
- **Application**: `id`, `opportunityId`, `volunteerUserId`, `message`, `status`, `submittedAt`, `updatedAt`; the pair `(opportunityId, volunteerUserId)` is unique.

### Proposed API endpoints

All protected routes require a valid server-side session and role/ownership authorization. Input errors return field-level validation feedback; unexpected failures return safe generic messages without stack traces or secrets.

| Method   | Endpoint                               | Purpose                                                                    |
| -------- | -------------------------------------- | -------------------------------------------------------------------------- |
| GET      | `/api/organizations`                   | Browse public active organizations                                         |
| GET      | `/api/organizations/{id}`              | Read one public organization profile                                       |
| POST     | `/api/organizations`                   | Create an organization profile for an authorized manager                   |
| PATCH    | `/api/organizations/{id}`              | Update an owned organization profile                                       |
| DELETE   | `/api/organizations/{id}`              | Deactivate an owned organization while preserving history                  |
| GET      | `/api/opportunities`                   | Browse open opportunities, with cause/location/date filters and pagination |
| GET      | `/api/opportunities/{id}`              | Read one public opportunity                                                |
| POST     | `/api/opportunities`                   | Create an opportunity for an organization the manager owns                 |
| PATCH    | `/api/opportunities/{id}`              | Update an owned opportunity                                                |
| DELETE   | `/api/opportunities/{id}`              | Close/archive an owned opportunity; preserve applications                  |
| GET      | `/api/volunteers/me/profile`           | Read the signed-in volunteer's profile                                     |
| PUT      | `/api/volunteers/me/profile`           | Create or update the signed-in volunteer's profile                         |
| POST     | `/api/opportunities/{id}/applications` | Apply once to an open opportunity                                          |
| GET      | `/api/volunteers/me/applications`      | List the signed-in volunteer's applications and statuses                   |
| GET      | `/api/organizations/me/applications`   | List applications for opportunities owned by the manager                   |
| PATCH    | `/api/applications/{id}/status`        | Update an application status for an authorized owner                       |
| GET/POST | `/api/auth/*`                          | Auth.js sign-in, sign-out, and session endpoints                           |

### MVP scope and priorities

- **P0**: Public opportunity list/detail; organization profile and opportunity CRUD; secure registration/sign-in and role ownership; volunteer apply-once flow; application status view; responsive navigation and forms.
- **P1**: Opportunity filters and pagination; manager applicant review/status updates; volunteer profile editing; accessibility and automated test coverage.
- **P2**: Notifications, saved opportunities, advanced reporting, volunteer-hour verification, messaging, and richer organization verification.

### Risks and assumptions

- **Personal data and authorization**: Profile and application details require server-side ownership checks and minimal public exposure.
- **Organization ownership**: The MVP assumes a manager is authorized to represent an organization; verification policy is not yet decided.
- **Opportunity lifecycle**: Closing rather than deleting protects application history but requires clear status and archive behavior.
- **Scope**: Authentication, CRUD for two core models, discovery, applications, and dashboards may exceed a single short iteration; P0 must be kept small and reviewed with the course schedule.
- **Platform choices**: Supabase and Auth.js are proposals, not configured services or account commitments.
- **Team approval**: The project name, scope, architecture, and this specification remain draft until reviewed by Team 04.
