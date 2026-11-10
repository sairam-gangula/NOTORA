# Frontend Learning Topics

Focus: learn the mobile platform and React Native patterns without spending time re-learning React basics you already know.

## Inspected and implemented so far

The Home screen is an initial implementation reference, not a lesson marked complete until you can explain and modify it yourself.

- **TypeScript setup:** `App.tsx` is the JSX application component; `tsconfig.json` extends Expo's base config with strict checking. `npm run typecheck` checks the project without generating output.
- **Expo project scaffold:** Expo provides the development tooling and runs the React Native app. Current package versions are Expo `~58.0.23` and React Native `0.88.1`.
- **Dependencies:** `react` provides component and state primitives; `react-native` provides native UI components; `expo-status-bar` controls the status bar; `react-native-safe-area-context` is installed for safe-area-aware layouts.
- **App bootstrap:** `index.js` calls Expo's `registerRootComponent(App)`. It registers `App` as the root so Expo Go and native builds can launch the same component.
- **Theme tokens:** `src/theme/tokens.ts` centralizes the sand/terracotta palette, spacing scale, and radii used by the Home screen.
- **Typed mock data:** `src/features/home/data/mockData.ts` defines the note and reminder shapes and sample content.
- **Reusable components:** `NoteCard` and `SectionHeader` keep repeated Home UI in focused files.
- **Safe areas:** `App.tsx` provides the safe-area context, and `HomeScreen.tsx` keeps content clear of the top device inset.
- **Home screen:** `src/features/home/screens/HomeScreen.tsx` composes greeting, search affordance, quick actions, reminder preview, pinned notes, and recent notes. These are currently visual placeholders backed by local sample data; they are not yet interactive.
- **Run scripts:** `npm start` starts Expo; the Android, iOS, and web scripts select a target platform.

## Next lessons

1. Learner checkpoint: review the Home implementation, trace props and data, then refine it or fix one visual issue yourself.
2. Learn Expo Router and implement the primary tab navigation.
3. Build the notes list and editor, using local state for the first create/edit/delete workflow.
4. Add search and keyboard-aware behavior.
5. Replace sample data with API requests; cover loading, empty, and error states.
6. Add AI actions to the note view after the backend endpoints exist.

## Revision prompts

- Trace how execution gets from `index.js` through `App.tsx` to `HomeScreen`.
- Why are the mock data types separate from the visual `NoteCard` component?
- Which values in `tokens.ts` are design decisions, and how does centralizing them help a future theme change?
- Why does a mobile app need to account for the safe area and software keyboard?
- What should the screen show while a backend request is loading or fails?

## Keep learning notes

For each new lesson, add the concept, the file where it appears, a brief explanation in your own words, and one question or experiment to revisit. Do not mark an item covered just because generated code contains it.