# Requirements

These are the initial requirements for learning and building the project. We will refine them as we discover constraints; they are not claims about features already implemented.

## MVP functional requirements

- Create a note with a title and body.
- View a list of the user's notes and open one note.
- Edit and delete a note with clear confirmation for destructive actions.
- Search notes by title and body text.
- Preserve notes across app restarts using backend persistence.
- Show loading, empty, success, and error states for network-backed screens.

## AI requirements

- Summarize a selected note and return a concise summary plus key points.
- Extract suggested tasks as structured data; the user reviews and saves them.
- Later, answer a question using relevant saved notes and indicate which notes informed the answer.
- Treat AI output as untrusted input: validate its structure, handle refusal or malformed output, and do not execute actions without user confirmation.
- Keep provider credentials on the server. Do not ship secret API keys in the mobile app.
- Define retention, privacy, and deletion behavior before sending user notes to an external model provider.

## Initial quality requirements

- **Data integrity:** validate inputs and enforce database constraints; handle concurrent edits deliberately.
- **Security:** users must only access their own data once accounts are introduced; secrets and personal notes must not leak through logs or client bundles.
- **Reliability:** provide useful errors and timeouts; retry only operations that are safe to retry.
- **Accessibility:** support screen readers, adequate touch targets, readable contrast, and keyboard navigation where applicable.
- **Maintainability:** separate UI, API, domain behavior, persistence, and AI-provider concerns enough to test them independently.
- **Testing:** test important user-visible behavior, API contracts, data rules, and AI output handling.
- **Operations:** make configuration explicit and plan for migrations, backups, logs, metrics, and deployment before calling the system production-ready.

## Acceptance principles

- A note remains available after restarting the app once persistence is implemented.
- Invalid input receives a clear validation response and does not corrupt stored data.
- AI failures do not prevent normal note CRUD from working.
- AI-generated tasks and answers are visibly distinguishable from user-authored content.
- Every feature has a focused verification step and a documented limitation.

## Explicitly out of the first MVP

Real-time collaboration, note sharing, rich-text editing, offline conflict resolution, and multi-provider AI routing are not initial requirements. We may revisit them after the core system works and there is a concrete reason.