# NOTORA Backend

This folder contains the Python API and server-side functionality for NOTORA. The main learning emphasis is backend engineering, relational data modeling, and AI systems.

## Current status

- `main.py` creates a FastAPI application.
- The current `GET /` route renders `templates/index.html` and serves files from `static/`.
- There is not yet a notes JSON API, database integration, authentication, or AI integration.
- A dependency manifest and repeatable setup instructions still need to be established before the backend run command is documented as project-supported.

## Learning path

We will implement each layer deliberately and learn the data flow from HTTP request to database and back.

1. **HTTP and API foundations:** resources, methods, status codes, JSON, route design, and API documentation.
2. **Notes API:** create, list, read, update, and delete notes; validation; error handling; and pagination.
3. **Database foundations:** relational modeling, keys, constraints, indexes, transactions, and query behavior.
4. **Persistence and migrations:** start with a local database, introduce a data-access layer, and evolve the schema safely.
5. **Testing:** API, service, and database tests; test fixtures; and confidence during schema changes.
6. **Security and reliability:** authentication, authorization, input boundaries, secrets, rate limits, logging, and failure handling.
7. **AI features:** model-provider boundaries, summarization, structured task extraction, timeouts, cost controls, and output validation.
8. **RAG:** chunking, embeddings, retrieval, citations or source references, evaluation, and protection against unsupported answers.
9. **Production engineering:** configuration, deployment, observability, backups, performance, and operational trade-offs.

## Planned domain concepts

The schema will be designed and revised as part of the database lessons; these are candidate concepts, not existing tables:

- Notes with title, content, timestamps, and eventually an owner.
- Tasks extracted from notes, with status and an optional due date.
- Tags associated with notes.
- Search and retrieval records for AI question answering, if the chosen design needs persisted chunks or embeddings.

## What senior-level backend and database work means here

We will go beyond making endpoints return data. We will examine data integrity, query plans, transaction boundaries, schema evolution, authorization, observability, resilience, and how to measure AI answer quality and cost. Design choices should be supported by requirements and trade-offs, not added just because a technology is fashionable.

## Study notes

See [Backend Learning Topics](../learning%20topics/backend/README.md) for concepts already inspected, lesson order, planned data concepts, and revision questions. The existing app serves HTML; the API and database topics remain future lessons.