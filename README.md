# My Portfolio

Personal portfolio implemented with Vue 3, TypeScript, Vite and Tailwind CSS. Single-page sections layout, responsive, light/dark theme, ES/EN i18n and accessible-first UI components.

---

## Features

- Vue 3 (Composition API, `<script setup>`)
- TypeScript
- Vite dev + build
- Tailwind CSS v3 with custom tokens and `darkMode: 'class'`
- Light / Dark theme toggle with persistence (`localStorage` key `theme`)
- Internationalization (Vue I18n) with ES/EN JSON messages and persisted selection (`localStorage` key `lang`)
- Sections-based single-page layout (no router used at runtime)
- Reusable UI atoms: `ThemeToggle`, `LanguageSelector`, `SocialMedia`, `HamburgerIcon`
- Mocks and simple services for content (`src/mocks`, `src/services`)

---

## Quick Links

- Entry: [src/main.ts](src/main.ts)
- Translations: [src/locales/es.json](src/locales/es.json), [src/locales/en.json](src/locales/en.json)
- Services data (mocks): [src/mocks/services.json](src/mocks/services.json)
- Services component: [src/components/sections/ServicesSection.vue](src/components/sections/ServicesSection.vue)
- Experience component: [src/components/sections/ExperienceSection.vue](src/components/sections/ExperienceSection.vue)
- Theme toggle: [src/components/ui/ThemeToggle.vue](src/components/ui/ThemeToggle.vue)
- Language toggle: [src/components/ui/LanguageSelector.vue](src/components/ui/LanguageSelector.vue)
- Tailwind config: [tailwind.config.js](tailwind.config.js)
- Vite config: [vite.config.ts](vite.config.ts)
- Package metadata: [package.json](package.json)

---

## Tech Stack

- Vue 3 + TypeScript + Vite
- Tailwind CSS, PostCSS, Autoprefixer
- vue-i18n (v9) for localization

> Note: `vue-router` is present in `package.json` but there is no router setup or usage in the current codebase.

---

## Project Structure (relevant)

```
src/
├─ main.ts
├─ App.vue
├─ assets/
├─ components/
│  ├─ sections/
│  └─ ui/
├─ locales/
│  ├─ es.json
│  └─ en.json
├─ mocks/
└─ services/
```

---

## Setup

Prerequisites: Node 18+ recommended

Install dependencies:

```bash
npm install
```

Development server:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## How i18n is implemented

- Translations are JSON files under `src/locales/` and are imported in `src/main.ts` and passed to `createI18n`.
- `createI18n` is configured with `legacy: false` (Composition API mode). Initial locale is read from `localStorage.getItem('lang') || 'es'` with fallback to `'en'`.
- Templates use `$t()` for scalar strings and `$tm()` (message-typed access) for arrays/objects used directly in templates (see Services and Experience sections).
- To add a language or update copy:
  - Edit both `src/locales/es.json` and `src/locales/en.json`, keeping the same key structure.
  - For large translation sets consider switching to dynamic imports to reduce initial bundle size.

---

## Theme & Persistence

- Theme uses Tailwind class-based dark mode. On startup `main.ts` toggles the `dark` class on `<html>` based on `localStorage.theme` or OS preference.
- The `ThemeToggle` component updates `localStorage.theme` and toggles the `dark` class.
- Optional improvement: Add a minimal inline script in `index.html` to set the initial theme before CSS loads to avoid FOUC.

---

## Components & Patterns

- Sections are small, focused components in `src/components/sections/`.
- UI atoms live in `src/components/ui/` and are intentionally minimal and reusable.
- Data for lists (projects, services) can come from `src/mocks/*.json` or be wired to real APIs via `src/services/*Api.ts`.
- Use `$tm('path.to.array')` in templates when rendering arrays stored in translation files.

---

## Development notes & suggestions

- Remove unused dependency `vue-router` from `package.json` if routing won't be introduced.
- Keep translations in sync between `es.json` and `en.json`. Use the same keys and structure.
- Consider converting locales to lazy-loaded modules if the number/size of translations grows.
- Add basic linting/CI for `npm run build` and lint checks on PRs.
- There are no automated tests configured — consider adding unit tests for critical components and a basic visual regression or E2E check.

---

## Accessibility

- Components include `aria-label` where relevant and use `focus-visible` rings.
- Continue adding semantic roles and aria attributes for interactive widgets as the app evolves.

---

## Deployment

- Any static host for SPAs works (Vercel, Netlify, GitHub Pages, Azure Static Web Apps). Build output in `dist/`.
- For SEO and social sharing, add meta tags and Open Graph tags in `index.html`, and consider adding `robots.txt` and `sitemap.xml` to `public/`.

---

## How to extend

- Add a new section: create `src/components/sections/MySection.vue` and import it into `App.vue`.
- Add new language: add `src/locales/<lang>.json` and include it in `main.ts` messages (or implement dynamic import).
- Replace mocks with a real backend: implement API wrappers in `src/services/` and update the components to call them.

---

## License & Author

© 2026 Lucio Tzikas. All rights reserved.
