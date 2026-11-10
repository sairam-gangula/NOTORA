# Frontend Project Guide

## Responsibility

The Expo/React Native client owns the mobile experience: capturing and displaying notes, collecting user input, calling the backend, and presenting loading, error, and AI-result states. Business rules and provider secrets belong on the backend, not in the app.

## Current setup

- Expo SDK `~58.0.23`, React `19.3.0`, and React Native `0.88.1` are recorded in `frontend/package.json`.
- `index.js` registers `App.js`; `App.js` is currently the starter screen.
- The app has not yet implemented navigation, notes, API calls, or AI interactions.
- Follow `frontend/AGENTS.md` for Expo-specific project conventions and version-matched documentation before changing Expo APIs.

## Target screen flow

1. Notes home: search, note list, create action, loading/empty/error states.
2. Note editor/detail: create or edit title and body; save or delete with appropriate feedback.
3. AI actions: summarize or extract tasks, review results, and explicitly save selected results.
4. Ask my notes: enter a question, see an answer with source notes, and handle no-relevant-result or service-failure cases.

## State-management decisions to learn

- **Local component state:** transient UI state such as an open menu or an unsaved text field.
- **TanStack Query:** server state such as notes and AI requests: fetching, caching, stale data, mutations, invalidation, and retry policy.
- **Redux Toolkit:** learn reducers, actions, selectors, and middleware; use it for genuinely shared client-side state if the app needs it (for example, cross-screen draft/workflow state). We will not copy the same server data into Redux and TanStack Query without a specific reason.
- **Learning exercise:** implement a small isolated Redux Toolkit flow to understand Redux, then compare it with TanStack Query. The app architecture should use each tool only for the job it fits.

## Engineering topics

Mobile layout and safe areas, navigation, keyboard behavior, accessibility, platform differences, forms, networking, state boundaries, error handling, testing, performance, offline behavior, release builds, and monitoring. The sequenced exercises are in [Frontend Learning](../KB%20learning/frontend/README.md).