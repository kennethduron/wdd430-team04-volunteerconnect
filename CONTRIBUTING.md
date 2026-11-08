# Contributing

Thanks for helping shape VolunteerConnect. The project proposal is provisional; discuss changes to the product direction with the team before treating them as agreed requirements.

## Workflow

1. Find or create a GitHub Issue that describes the work and its acceptance criteria.
2. Branch from an up-to-date `main` using `feature/<issue-slug>`, `fix/<issue-slug>`, or `docs/<topic>`.
3. Keep the change focused and avoid committing credentials, `.env` files, generated build output, or unrelated project files.
4. Run `npm run lint`, `npm run typecheck`, and `npm run build`.
5. Open a pull request to `main`, link the issue, explain the change, and record the checks you ran.
6. Request review from a teammate. Address feedback and wait for the required approval before merging.

## Review expectations

Reviewers should check correctness, accessibility, responsive behavior, validation, error handling, and whether the change matches the issue. Keep feedback respectful, specific, and actionable. Do not approve your own pull request.

## Code conventions

- Use TypeScript strict typing; avoid `any` unless a documented boundary requires it.
- Prefer small, reusable components and server components unless client-side interactivity is needed.
- Use semantic HTML and visible keyboard focus.
- Keep user-facing errors clear and never reveal server secrets or stack traces.
- Format with Prettier and use Tailwind utility classes consistently.
