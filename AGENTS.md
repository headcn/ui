# AGENTS.md

## Project

This repo is `headcn/ui`: a shadcn-inspired React UI component system built on top of `@headlessui/react`.

The goal is to provide:

- copyable, editable components
- shadcn-like CLI + registry architecture
- `components.json` support
- Tailwind-first styling
- accessible behavior powered by Headless UI

Headless UI is unstyled and exposes state through render props/data attributes, so components in this repo must provide the visual/styling layer while preserving Headless UI accessibility behavior.

## Current component coverage

Implemented:

- Button
- Checkbox
- Combobox
- Fieldset
- Input
- Listbox
- Radio Group
- Textarea

Missing / planned:

- Dropdown Menu
- Disclosure
- Dialog
- Popover
- Tabs
- Transition
- Select
- Switch

Use Headless UI React docs as the source of truth for APIs and accessibility behavior.

## Design principles

1. Follow shadcn-style architecture.
   - Components are copied into user apps, not hidden inside an opaque package.
   - Code should be readable, editable, and idiomatic.
   - Prefer composition over configuration-heavy APIs.

2. Use Headless UI primitives.
   - Import primitives from `@headlessui/react`.
   - Do not replace Headless UI behavior with custom keyboard/focus logic unless absolutely necessary.
   - Preserve accessibility semantics.

3. Tailwind-first styling.
   - Use Tailwind classes.
   - Use `cn(...)` for className merging.
   - Support user-provided `className`.
   - Prefer Headless UI `data-*` attributes for state styling.

4. Match existing repo conventions.
   - Before adding a component, inspect nearby implemented components.
   - Follow existing file names, exports, class patterns, registry format, docs format, and tests.

## Component rules

When creating or editing a component:

- Use TypeScript.
- Use React `forwardRef` where appropriate.
- Export all public subcomponents.
- Preserve native props where possible.
- Keep APIs close to Headless UI naming unless the repo already has a different convention.
- Add `"use client"` when the component requires client interactivity.
- Do not over-abstract.
- Do not introduce new dependencies unless clearly justified.
- Do not hardcode app-specific copy, icons, routes, or business logic.
- Use accessible defaults.
- Ensure keyboard interaction is delegated to Headless UI.

## Styling rules

- Use `cn()` for conditional class names.
- Keep default styling consistent with existing components.
- Use `data-[state]`, `data-focus`, `data-hover`, `data-open`, `data-checked`, `data-disabled`, etc. where Headless UI exposes them.
- Do not use Radix-specific attributes like `data-state="open"` unless this repo already maps them intentionally.
- Avoid global CSS unless the component pattern requires it.
- Do not add animation libraries for basic transitions.

## Registry / CLI rules

When adding a component, update every required registry/CLI artifact used by the repo.

Likely files to inspect:

- registry files
- component metadata
- CLI add/init logic
- docs navigation
- examples
- package exports
- tests

The component should be installable through the same path as existing components.

## Quality checklist

Before finishing a task, verify:

- Typecheck passes.
- Lint passes.
- Build passes.
- Component exports are correct.
- Registry entry exists.
- Docs/example exists.
- Component works with keyboard navigation.
- `className` overrides work.
- Disabled/error/focus/open/checked states are styled where relevant.
- No Radix imports were added.

## Commands

Use the repo’s package manager. Detect it from lockfiles.

Common commands to try:

- `pnpm install`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
- `pnpm test`

Do not invent scripts. Check `package.json` first.

## Pull request expectations

Every component PR should include:

- component implementation
- registry metadata
- docs/example
- export updates
- validation notes

Use concise PR summaries:

- What component was added/changed
- Which Headless UI primitives it wraps
- Which commands passed
