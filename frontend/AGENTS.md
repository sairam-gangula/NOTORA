# Frontend Agent Instructions

These instructions apply to files under `frontend/`. Keep backend-specific guidance in `backend/AGENTS.md` so each folder has its own scoped instructions.

## Project context

- Product: NOTORA, a notes and productivity app. The MVP scope is in `../Product Details/Notora -MVP Feature Scope`.
- Visual reference: `../Product Details/Figma/Notora Productivity App Showcase.png`. This is a showcase image, not an editable Figma file.
- Frontend stack: Expo SDK 58, React Native, and strict TypeScript.
- Keep code readable and organize it by feature. Put route screens in `src/app/`, feature-specific UI/data in `src/features/<feature>/`, and shared design tokens in `src/theme/`.
- The learner already knows React, TypeScript, Flexbox, React Native basics, forms, and API/async basics. Skip introductory explanations of these.
- Work screen by screen. Before unfamiliar senior-level topics, pause with a focused task so the learner can implement and explain the concept. Do not generate the whole app at once.

## Learning session checkpoint — 2026-11-10

- The first Home dashboard is implemented in `src/features/home/screens/HomeScreen.tsx` with reusable components, typed mock data, and shared theme tokens.
- Home currently shows sample greeting, search affordance, quick actions, reminder preview, pinned notes, and recent notes. The controls are visual placeholders; navigation and backend data are not connected.
- `App.tsx` mounts Home and provides safe-area context.
- TypeScript check, ESLint, and Android Expo export passed after the Home screen was added.
- Next: stop before navigation implementation and coach the learner through Expo Router. Their task is to create tabs for Home, AI, Tasks, Calendar, and More, plus a Notes placeholder route. Keep Home working; do not build the Notes feature yet.
- After reviewing the learner's navigation work, continue screen by screen with Notes list/editor, search, AI task review, tasks, reminders, then backend integration and quality topics.

## Expo has changed — do not trust your training data

Expo ships breaking changes every SDK release. APIs you remember are likely renamed, moved, or removed. Before writing any code that touches an Expo, EAS, or React Native API:

1. Read the major version of the `expo` package in `package.json`.
2. Fetch the official Expo docs for the installed SDK. If the matching versioned URL is unavailable, use the current official guide and verify API compatibility with the installed package.
3. For anything else, fetch https://docs.expo.dev/llms.txt — an index of all Expo docs with corrections to common LLM misconceptions. Follow its links to the specific page you need; never answer from memory.

## Commands

Use `bunx` instead of `npx` if the project uses bun (`bun.lock` present).

```bash
npx expo install <package>  # ALWAYS use instead of npm/yarn/pnpm/bun add — resolves SDK-compatible versions
npx expo start              # start the dev server
npx expo lint               # lint
npx tsc --noEmit            # typecheck
npx expo-doctor             # diagnose dependency and config issues
npx expo install --fix      # fix incompatible package versions
```

Run lint and typecheck before declaring any task done.

## Navigation & Routing

- Use **Expo Router** for all navigation. Routes live in `src/app/` — every file there is a screen, `_layout.tsx` files define navigators. Keep non-route code (components, hooks, utils) outside `src/app/`.
- Import `Link`, `router`, and `useLocalSearchParams` from `expo-router`.
- Docs: https://docs.expo.dev/router/introduction.md

## Building with EAS

Use EAS to build, sign, and submit the app in the cloud (`eas build`, `eas submit`) and to ship over-the-air updates (`eas update`) — no local Xcode or Android Studio required. Run EAS CLI as `bunx eas-cli <command>` in Bun projects, or `npx eas-cli@latest <command>` otherwise; substitute that for bare `eas` in docs examples.
Docs: https://docs.expo.dev/eas/index.md

## Rules

- If `ios/` and `android/` directories do not exist, they are generated (Continuous Native Generation). Never create or edit them by hand — configure native behavior in `app.json` and config plugins.
- Expo Go only includes its bundled native modules. After adding a library with native code, the app needs a development build: `npx expo run:ios|android` locally, or `eas build --profile development`.
- Prefer recommended Expo modules over third-party libraries, and check your available skills before adding dependencies. Docs: https://docs.expo.dev/versions/latest/index.md
