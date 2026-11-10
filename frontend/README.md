# NOTORA Frontend

This folder contains the Expo and React Native mobile client for NOTORA. The goal is to learn the mobile platform while using your React experience to move quickly through familiar component concepts.

## Current status

- Expo and React Native are installed.
- `index.js` registers `App.tsx` as the application root.
- TypeScript is enabled with Expo's base configuration and strict checking.
- `App.tsx` renders the first Home dashboard screen.
- The Home screen uses typed sample notes and reminders; navigation and backend data are not implemented yet.
- The NOTORA mobile client is not connected to the backend yet.

## Run the app

From this directory:

```bash
npm start
```

Use the Expo CLI prompts to open the app on a device, emulator, or supported web target. Available scripts are listed in `package.json`.

## Learning path

We will build in small, explainable steps. Frontend lessons focus on the mobile differences rather than re-teaching React fundamentals.

1. **Foundation and Home:** design tokens, safe areas, typed mock data, and reusable dashboard components.
2. **Navigation:** introduce the app's primary tabs and screen structure.
3. **Notes experience:** list and detail screens, local state, search, and CRUD interactions.
4. **Mobile interaction:** keyboard handling, touch targets, accessibility, and loading, empty, and error states.
5. **Backend integration:** connect screens to API data and cover request lifecycle and resilient UI updates.
6. **AI workflows:** trigger summary and task extraction; present results and failures clearly.
7. **Quality and scale:** component and integration tests, performance profiling, offline behavior, release builds, and monitoring.

## What senior-level frontend means here

The target is not only to make screens. We will practice making deliberate trade-offs around architecture, accessibility, performance, app lifecycle, network failure, maintainability, testing, and release safety. We will compare options and explain why a choice fits this app.

Run `npm run typecheck` to check TypeScript files without emitting build output.

## Study notes

See [Frontend Learning Topics](../learning%20topics/frontend/README.md) for concepts already inspected, lesson order, and revision questions. Topics move to covered only after we have worked through and practiced them.