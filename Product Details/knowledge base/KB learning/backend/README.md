# Backend and Database Learning Path

## Starting point

The current FastAPI app serves an HTML template. The notes API, application database, tests, authentication, and AI integration have not been implemented. The sequence below builds these from first principles and grows toward production and senior-level topics.

## Step-by-step milestones

### 1. Python service foundations

- Learn virtual environments, dependency manifests, imports, type hints, exceptions, configuration, and application startup.
- **You build:** a repeatable backend setup and health endpoint.
- **Checkpoint:** another person can install declared dependencies and start the service from documented instructions.

### 2. HTTP and API contracts

- Learn HTTP methods, resource paths, status codes, JSON, headers, idempotency, and OpenAPI.
- **You build:** one read-only notes endpoint with explicit request/response models and documented error behavior.
- **Checkpoint:** use the API docs or an HTTP client to inspect request, response, and status code.

### 3. CRUD and validation

- Learn create/read/update/delete semantics, schema validation, boundary validation, error responses, pagination, and filtering.
- **You build:** in-memory note CRUD first, then replace storage without changing the public contract unnecessarily.
- **Checkpoint:** invalid input is rejected predictably; missing resources return a suitable status; repeated delete behavior is defined.

### 4. Relational data and SQL

- Learn entities, rows, primary/foreign keys, nullability, unique/check constraints, joins, normalization, and indexes.
- **You build:** sketch notes/tasks/tags relationships, write SQL queries, and explain the trade-offs before choosing an ORM.
- **Checkpoint:** defend the schema against duplicate or orphaned records and demonstrate a join.

### 5. Persistence, transactions, migrations

- Learn connection/session lifecycle, transaction boundaries, commit/rollback, isolation basics, schema migrations, and seed/test data.
- **You build:** persist notes locally, add a versioned migration, and test that data survives restart.
- **Checkpoint:** explain what happens if a multi-step write fails halfway through and how rollback protects integrity.

### 6. Architecture and automated tests

- Learn separation of transport, application/domain logic, persistence, and external services without over-layering a small app.
- **You build:** focused API and database tests, fixtures, and one service test with a controlled external-service boundary.
- **Checkpoint:** tests exercise behavior and failure cases rather than only asserting internal mock calls.

### 7. Authentication, authorization, and security

- Learn identity versus permissions, password/session/token concepts, per-user ownership, input threat boundaries, secret management, CORS, and common API risks.
- **You build:** an ownership rule and tests proving one user cannot read or modify another user's note.
- **Checkpoint:** access control is enforced on the server for every data path, not merely hidden in the UI.

### 8. Reliability and operational behavior

- Learn timeouts, retries, idempotency keys, rate limiting, background jobs, caching, structured logs, metrics, tracing, and graceful degradation.
- **You build:** bounded timeouts and useful observability around one slow external call.
- **Checkpoint:** distinguish a transient failure from a permanent error and show how duplicate requests are handled.

### 9. Database performance and concurrency

- Learn query plans, index selection, N+1 queries, lock contention, isolation levels, optimistic concurrency, connection pools, backups, and restore drills.
- **You build:** measure one query, improve it only with evidence, and simulate concurrent edits.
- **Checkpoint:** state the consistency guarantee and show evidence for a performance change.

### 10. AI application engineering

- Learn model APIs, structured outputs, prompt/version management, output validation, provider abstraction, token/cost budgets, privacy, timeouts, and evaluation.
- **You build:** a summary endpoint, then task extraction with validated structured output and a review-before-save flow.
- **Checkpoint:** malformed or unavailable model output cannot corrupt notes; measure quality and cost with a small evaluation set.

### 11. RAG and information retrieval

- Learn chunking, embeddings, similarity search, metadata filters, retrieval quality, context construction, source attribution, and grounded-answer evaluation.
- **You build:** retrieve relevant note passages for a question and return an answer with source-note references.
- **Checkpoint:** test answerable, unanswerable, and misleading-context questions; do not claim sources support what they do not.

### 12. System design and delivery

- Learn capacity assumptions, bottleneck analysis, service boundaries, queues, deployment, CI/CD, migrations during deploys, incident response, and cost/security trade-offs.
- **You build:** a small system-design note for the app and a repeatable deployment/rollback checklist.
- **Checkpoint:** justify the simplest design that meets stated needs and identify what evidence would trigger a redesign.

## Senior backend knowledge map

Across the milestones, build depth in API and domain design; Python runtime behavior; SQL and data integrity; concurrency and performance; security and privacy; testing; distributed-systems failure modes; observability and operations; system design; and responsible AI evaluation. Senior-level work is demonstrated through sound decisions and clear reasoning, not by adopting every tool listed here.

## Progress log

Add a dated entry after each lesson: implementation task, data/control flow understood, command or test result, trade-off discussed, and open questions. Move a milestone to complete only when you can explain it, change it, and verify it independently.