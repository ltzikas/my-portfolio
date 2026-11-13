# my-portfolio Constitution

## Core Principles

### I. Architecture and Technology

The project MUST preserve Vue 3 with Composition API, TypeScript, Vite, Tailwind CSS v3,
Vue I18n, and its responsive, section-based single-page architecture. New or modified
components MUST follow existing conventions, favor `<script setup lang="ts">`, and reuse
focused components and composables where useful. Changes MUST use the simplest
maintainable solution and minimize the affected surface.

Dependencies, frameworks, runtime routing, or backend infrastructure MUST NOT be added
without documented justification in the feature plan, including simpler alternatives
and maintenance impact, and maintainer approval before implementation. Existing unused
dependencies do not justify activating new architecture.

### II. User Experience and Accessibility

New or changed interfaces MUST remain usable on desktop, tablet, and mobile, in both
light and dark themes. Theme initialization, switching, and persistence MUST remain
consistent across components and reloads.

Accessibility MUST be an acceptance requirement for affected interfaces. Use semantic
HTML and native controls, meaningful accessible names, visible keyboard focus, and
appropriate ARIA where native semantics are insufficient. Interactive elements,
navigation, and dialogs MUST support keyboard operation and appropriate focus behavior.
Validation MUST cover the affected interactions, responsive layouts, and both themes.

### III. Internationalization

Spanish and English MUST remain supported through Vue I18n. New or changed user-facing
text, including accessible labels, validation messages, and feedback, MUST use locale
messages rather than hardcoded language-specific copy. Locale files MUST retain matching
key structures, including keys within collection items; translation changes MUST update
both locales together.

Changes MUST preserve language selection and reload persistence through the `lang`
localStorage key, the initial Spanish default, and English fallback unless an approved
specification explicitly changes that behavior. Affected flows MUST be verified in both
languages, including missing-key and untranslated-copy checks.

### IV. Code Quality and Testing

Changes MUST follow the implementation's conventions, keep components focused, and
separate presentation, reusable behavior, and external-service concerns. Unrelated
refactoring and speculative abstractions MUST remain outside the change.

Changes MUST pass `npm run build` before merge, with the result recorded in the pull
request. A successful Vite build MUST NOT be represented as proof of type checking,
linting, automated testing, or accessibility compliance.

Testing effort MUST be proportional to the scope, complexity, business impact, and
regression risk of the change. TDD is optional and SHOULD be used when it provides clear
value, particularly for complex logic, regression bugs, or well-defined behavioral
contracts; it MUST NOT be mandatory for every feature.

Tests SHOULD verify observable behavior and acceptance criteria rather than implementation
details, because behavior-focused tests remain useful through safe refactoring. Redundant,
trivial, brittle, or duplicated tests MUST be avoided. Purely cosmetic changes, static
content updates, and straightforward localization changes do not automatically require
new automated tests; appropriate manual checks and existing build or validation commands
may be sufficient.

Critical behavior, complex logic, validation rules, and external integrations SHOULD
receive focused automated tests when practical because failures in these areas carry
higher user or regression risk. Each feature plan MUST document and justify its testing
approach from actual risk, state the relevant validation and verified available tooling,
and MUST NOT generate arbitrary test quantities or coverage targets. New testing
dependencies or frameworks MUST be justified by a concrete testing need.

Where automation is deferred, the plan or pull request MUST record the reason and
reproducible manual checks; manual evidence does not establish automated coverage. No
existing validation capability may be asserted without repository evidence. Acceptance
criteria MUST have recorded validation results before integration.

### V. Deployment and Operational Stability

Azure Static Web Apps MUST remain the production hosting platform. The application MUST
remain at the repository root, with `app_location: "/"`, Vite output `dist`, and workflow
`output_location: "dist"`, unless an approved specification explicitly changes them.

Changes MUST protect the existing GitHub Actions build, deployment, and pull-request
preview lifecycle, including required environment configuration and service integrations.
Production deployment changes MUST NOT enter through unrelated feature work. Any planned
operational change MUST document its justification, validation, and rollback approach.
Existing production behavior MUST remain stable unless an approved specification
explicitly changes it.

### VI. Spec-Driven Development Governance

Every new feature or significant improvement MUST have a bounded specification with
explicit scope and measurable acceptance criteria. Work MUST follow
Specify → Clarify → Plan → Tasks → Analyze → Implement. Clarify MUST resolve material
ambiguities or record that none remain; Analyze MUST check artifact consistency before
implementation.

Requirements and acceptance criteria MUST be traceable through the plan and task IDs to
implementation and validation evidence. Scope expansion or unrelated refactoring MUST
be excluded or handled in a separate specification. Integration into `main` MUST use
feature branches and reviewed pull requests. Architecture and operational documentation
MUST be updated when the corresponding implementation changes.

## Brownfield Baseline

The following are existing implementation constraints, verified at adoption; the
workflow and review obligations above are newly adopted governance, not claims of prior
compliance:

- `package.json`, `vite.config.ts`, `tailwind.config.js`, `src/main.ts`, and `src/App.vue`
  establish the stack and root application layout. `vue-router` is installed but is not
  configured or used at runtime; no router or repository-hosted backend is required.
- Tailwind uses class-based dark mode. `theme` in localStorage selects light/dark mode;
  initialization uses the operating-system preference when no saved choice exists.
- Vue I18n uses Composition API mode, `src/locales/es.json` and `en.json`, persisted
  `lang`, default `es`, and fallback `en`. Locale key structures match at adoption.
- Contact submission already uses an external Azure Function endpoint through
  `VITE_FORM_ENDPOINT`, with a mailto fallback. The development proxy in Vite is also
  existing configuration; preserving a static frontend does not remove this integration.
- `.github/workflows/azure-static-web-apps-victorious-forest-07ba1d910.yml` builds and
  deploys the root application to Azure Static Web Apps, with `api_location: ""` and
  `dist` output, on main pushes and the configured pull-request events.
- Available npm scripts are `dev`, `build` (`vite build`), and `preview`. No automated
  test suite, test script, lint script, or dedicated type-check script is configured.
  ESLint packages and an empty `.eslintrc.json` do not establish a working lint gate.
- Existing hardcoded accessible labels and mailto copy demonstrate localization debt;
  accessibility compliance has not been established by an audit. These rules govern
  affected work prospectively; existing debt MUST be recorded when relevant and MUST NOT
  trigger an unrelated rewrite. The README's generic hosting and extension suggestions
  are not authorization to change production architecture.

The implementation is the source of truth for current behavior. This constitution
governs future decisions; adopting it does not authorize application or deployment work.

## Development Workflow and Review Gates

1. **Specify and Clarify:** Bound the change, record exclusions, resolve uncertainties,
   and define measurable acceptance criteria, including applicable responsive,
   accessibility, theme, locale, and operational behavior.
2. **Plan:** Complete the Constitution Check before research and repeat it after design.
   Identify affected files, baseline behavior, dependency or architecture justification,
   documentation impact, and validation using verified or explicitly proposed tools.
3. **Tasks and Analyze:** Link tasks to requirements and acceptance criteria, include
   validation work, and resolve material inconsistencies or constitutional violations
   before implementation. Generic template examples MUST be adapted to the brownfield
   repository rather than treated as requirements to initialize new infrastructure.
4. **Implement and review:** Stay within the approved scope; record build results,
   applicable automated/manual validation, and documentation updates. The pull request
   MUST demonstrate compliance with all six principles. Maintainer review MUST confirm
   acceptance criteria and any explicitly approved behavior or operational changes
   before merge into `main`.

## Governance

This constitution takes precedence over conflicting project templates, generated
artifacts, and informal practices. Templates MUST be interpreted against these rules;
their examples do not grant exceptions. Plans and pull requests MUST document compliance
or identify a conflict before implementation proceeds.

Amendments MUST be proposed through a reviewed pull request stating the reason, affected
principles, compatibility impact, and any migration or template/documentation follow-up.
The project maintainer MUST approve amendments and any explicitly permitted architectural
or operational departure. A departure that contradicts a mandatory rule MUST amend this
constitution before conflicting implementation; documenting a violation alone does not
waive it.

Versions follow semantic versioning: MAJOR for incompatible principle removals or
redefinitions; MINOR for added principles or materially expanded obligations; PATCH for
non-semantic clarifications and corrections. Amendments MUST update the version and Last
Amended date and review dependent Spec Kit artifacts for consistency. The original
Ratified date MUST remain unchanged. Version 1.0.0 is the first ratified constitution,
not an application release version.

**Version**: 1.0.0 | **Ratified**: 2026-11-13 | **Last Amended**: 2026-11-13
