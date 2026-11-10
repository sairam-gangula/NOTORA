# Backend Learning Topics

Focus: APIs, data modeling, persistence, and AI. This is the project's main learning emphasis.

## Covered / inspected so far

These are observations of the current code, not a completed backend lesson.

- **FastAPI app:** `backend/main.py` creates the application with `FastAPI()` and stores it in `app`.
- **Route registration:** `@app.get("/")` registers a handler for HTTP GET requests to the root path.
- **Request object:** `read_item` receives a `Request`, which the template renderer needs to build the response context.
- **HTML response:** `HTMLResponse` declares the response media type, and `TemplateResponse` renders `templates/index.html`.
- **Static files:** `StaticFiles` exposes the `static` directory under the `/static` URL path.
- **Current boundary:** the backend currently serves an HTML page. It does not yet expose a notes JSON API or connect to a database.

## Next lessons

1. **HTTP and REST:** request methods, paths, status codes, JSON request/response bodies, and resource-oriented routes.
2. **Notes CRUD:** create, read, update, and delete notes through FastAPI endpoints.
3. **Validation:** define request and response schemas, validate input, and return useful errors.
4. **Database fundamentals:** tables, rows, primary keys, foreign keys, constraints, and relationships.
5. **Persistence:** connect SQLite first, use a database library, and learn transactions and migrations.
6. **Testing:** test API behavior and database changes with focused tests.
7. **AI features:** add summarization and structured task extraction behind backend services.
8. **RAG:** chunk notes, create embeddings, retrieve relevant passages, and answer questions grounded in retrieved notes.
9. **Production concerns:** secrets, authentication, user ownership, rate limits, logging, and deployment.

## Planned data concepts

- **Notes:** note identifier, title, content, created time, updated time, and later an owner identifier.
- **Tasks:** task identifier, source note, title, status, and optional due date.
- **Tags:** tag identifier and name, with a many-to-many relationship between notes and tags if tags are shared.
- **RAG chunks:** source note, chunk text, and embedding metadata. We will choose storage after learning the retrieval requirements.

These are learning targets, not existing database tables. We will refine the schema before implementing persistence.

## Revision prompts

- What is the difference between a route handler and the response it returns?
- Why should an API return JSON rather than rendered HTML to the mobile app?
- Which HTTP method would create a note? Which would update or delete one?
- Why do request schemas and database models serve different purposes?
- How do primary and foreign keys connect a task to its source note?
- In RAG, what is retrieved before the language model writes an answer, and why?

## Keep learning notes

After each lesson, record the endpoint or module involved, the data flow, one example request and response, and an experiment to try. Mark a topic covered only after you can explain and modify it yourself.