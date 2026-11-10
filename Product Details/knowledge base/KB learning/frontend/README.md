# Frontend Learning Path

## Starting point

Expo, React Native, and strict TypeScript checking are set up, and the app still displays the starter screen. You already know React, so the path emphasizes TypeScript in app code, mobile-specific behavior, and deliberate state/network architecture. No topic below is marked completed merely because the package exists.

## Step-by-step milestones

### 1. Mobile foundations

- Learn typed component props, the entry point, native components, layout, safe areas, keyboard, touch interaction, and platform differences.
- **You build:** a static notes-list screen from a provided sketch, using a small reusable note-row component.
- **Checkpoint:** explain how the app starts and why a web `div` is not used for a native screen.

### 2. UI state and note editing

- Learn props, local state, controlled inputs, form validation, and component boundaries.
- **You build:** add, edit, and delete notes in temporary in-memory state.
- **Checkpoint:** trace a user action from input event through state update to rendered output; identify what is lost on restart.

### 3. Navigation and mobile workflows

- Learn route parameters, screen lifecycle, keyboard avoidance, safe-area layout, accessibility, and confirmation for destructive actions.
- **You build:** list-to-detail navigation and an editor flow.
- **Checkpoint:** explain how a selected note is identified without passing fragile duplicated objects everywhere.

### 4. Redux Toolkit fundamentals

- Learn store, slice, action, reducer, selector, immutable update semantics, and Redux DevTools concepts.
- **You build:** a small isolated shared-UI-state exercise (for example, selected filter or draft workflow), then inspect the state transitions.
- **Checkpoint:** explain when shared client state is justified and why a reducer should be predictable.

### 5. TanStack Query fundamentals

- Learn query keys, fetching, caching, stale data, loading/error states, mutations, invalidation, and cancellation/retry trade-offs.
- **You build:** fetch the notes list from the API and create or update a note with a mutation.
- **Checkpoint:** trace request -> response -> cache -> UI and explain how a mutation refreshes affected data.

### 6. Choose state boundaries

- Compare local component state, Redux Toolkit, and TanStack Query. Learn why server state and client state have different lifecycles.
- **You build:** keep notes and AI responses in the query layer, transient editor fields locally, and use Redux only for a demonstrated cross-screen client-state need.
- **Checkpoint:** no accidental competing source of truth for the same notes.

### 7. AI interaction and resilient UX

- Learn async workflows, long-running requests, cancellation, retry policy, and presenting generated content safely.
- **You build:** summarize a note, extract suggested tasks, and let the user review before saving.
- **Checkpoint:** normal note workflows still work if the AI service fails or returns invalid data.

### 8. Production quality

- Learn accessibility checks, component/integration testing, performance profiling, offline limitations, configuration, and release process.
- **You build:** focused tests and a documented release checklist for the note flows.
- **Checkpoint:** describe what the tests cover, what remains untested, and how a regression would be detected.

## Concepts to revisit

Flexbox differs in some details from browser CSS; native input and keyboard behavior matters; query cache is not a general-purpose global store; Redux is not automatically needed for all state; mobile network and lifecycle failures are normal conditions to design for.

## Progress log

Add a dated entry after each lesson: task attempted, concepts understood, verification result, and questions still open. Move milestones to complete only after you can modify and explain the behavior yourself.