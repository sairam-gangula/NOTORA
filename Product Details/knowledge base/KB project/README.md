# Project: AI Notes App

## Purpose

Build a useful notes app while learning full-stack engineering from the mobile UI through the API and database to production-minded AI features. The main learning emphasis is backend, database, and applied AI; the frontend should be efficient to build while still teaching mobile-specific engineering.

## Current baseline

- **Frontend:** Expo and React Native are installed in `frontend/`. It is still the Expo starter screen; no notes UI or backend connection has been built.
- **Backend:** `backend/main.py` starts a FastAPI app that currently serves an HTML template and static assets. It does not yet expose a notes API.
- **Database:** no application database or schema has been implemented.
- **AI:** no model integration, embeddings, or RAG pipeline has been implemented.

## Product direction

The app helps a person capture notes and later understand and act on them. AI should augment normal note-taking, with results that can be inspected, edited, and dismissed rather than silently changing user data.

## Planned delivery phases

1. Working notes experience: create, list, view, edit, delete, and search notes.
2. Backend and persistence: expose a validated API and store notes in a relational database.
3. First AI features: summarize a note and extract suggested tasks with structured, validated output.
4. Knowledge features: tags and question answering over the user's own notes using retrieval (RAG).
5. Production readiness: authentication, ownership boundaries, tests, security, observability, deployment, and operational safeguards.

Requirements and boundaries are in [Requirements](requirements.md). Product-specific frontend and backend responsibilities are in [Frontend](frontend.md) and [Backend](backend.md). Learning tasks live in [KB learning](../KB%20learning/README.md).