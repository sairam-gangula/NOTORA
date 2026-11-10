# Backend Project Guide

## Responsibility

The backend owns the API contract, authorization, validation, durable data, domain rules, and calls to AI providers. The mobile app communicates with it over HTTP using JSON; provider credentials remain server-side.

## Current setup

- `backend/main.py` creates a FastAPI application.
- `GET /` currently renders an HTML template and the app serves static assets.
- There is no notes JSON API, database integration, authentication, or AI integration yet.
- A dependency manifest and repeatable setup procedure still need to be established.

## Target service areas

- **Notes API:** CRUD, search, validation, pagination, and ownership checks once authentication is added.
- **Persistence:** relational storage for notes, tasks, and tags, with constraints and versioned schema migrations.
- **AI services:** summary and task extraction first; note question answering with retrieval later. Isolate provider-specific code behind a small boundary so domain behavior can be tested without provider calls.
- **Operational concerns:** configuration, safe secrets, logs and metrics, timeouts, rate limits, backups, and deployable migrations.

## Candidate API contract

We will design and document request/response models before implementing routes. Candidate resources include:

- `GET /api/notes`, `POST /api/notes`
- `GET /api/notes/{note_id}`, `PATCH /api/notes/{note_id}`, `DELETE /api/notes/{note_id}`
- `POST /api/notes/{note_id}/summary`
- `POST /api/notes/{note_id}/tasks/extract`
- Later: `POST /api/assistant/ask`

These paths are proposals, not existing routes. Authentication, pagination, filtering, and error formats will be settled as part of the API design lesson.

## Database direction

Learn relational modeling and SQL against a local database first, then evaluate PostgreSQL for deployment. We will decide on the ORM, migration tool, and vector storage only when we understand the data and operational needs; RAG does not automatically require a separate vector database at the start.

Follow the sequence in [Backend Learning](../KB%20learning/backend/README.md).