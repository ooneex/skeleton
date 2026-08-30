---
name: issue-plan
description: Create or restructure local issue YAML into planned, labelled, dependency-aware work, optionally split into ordered sub-issues.
---

# Issue Plan

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — never ask questions.** On any choice, pick the recommended option and proceed.

Plan one or more issues across one or more modules. Each input is **either** an existing issue (ID/path) **or** a free-form description; output is a planned issue restructured into `context` / `goal` / `dod` / `testing` / `dependencies`, labelled, with state and priority set, optionally split into ordered, self-contained sub-issues (same structure).

**Global rules:**
- `<module>` = `modules/<module>/` **or** `packages/<module>/` — check both roots.
- Run all commands from the root of the project.
- **Never invent facts** — only restructure/clarify what's in the issue. If the description is missing/empty, tell the user and stop.

## Workflow

### Plan Mode First

Start with a read-only planning phase: resolve targets, inspect issue files and module configs, and decide restructuring, labels, and splitting. Record that plan before making changes, including any module that step 0b must scaffold. Then execute the approved workflow; do not mix exploratory reads with speculative writes.

### 0. Resolve Targets and Mode

Build a target list, each tagged:
- **Plan mode** — an existing ID (e.g. `OON-123456`) or `.yml` path. ID without a module → glob `modules/*/issues/<ID>.yml`, plan each match. → step 1.
- **Create mode** — a free-form description with no existing issue. → step 0a.

Splitting input into targets:
- Multiple IDs/paths → one plan-mode target each.
- A description covering **distinct, unrelated work — especially across modules** → one create-mode target per piece (e.g. "org create API + billing page" → a backend + a spa issue). Keep related work as one target; step 4 decides splitting.
- When unsure, prefer fewer targets and let steps 4–5 break them down.
- Anything not a recognizable ID or existing path is a description (create mode).

Process targets independently — one failing (missing file, empty description) skips only that target; continue and report skips in step 7. If nothing resolves, tell the user and stop.

### 0a. Create Mode — Scaffold First

Per create-mode target, derive fields from its slice of the description:

| Field | Default | Derive |
|-------|---------|--------|
| `title` | required | Concise, action-oriented (verb + noun). Use the user's wording; never invent. |
| `module` | `shared` | Named explicitly by the user → use it verbatim; if it doesn't exist, **create it** (step 0b). Otherwise match domain nouns to an existing module under `modules/`/`packages/` (e.g. "user profile" → `user`); an inferred module that doesn't exist falls back to `shared` — say so, never scaffold on a guess. |
| `priority` | inferred (step 3) | Infer from description; honor any stated priority. |
| `labels` | `[]` | Suggest from description (step 3 vocabulary). |
| `description` | `null` | The user's text as-is. |

`state` is **always** `Todo` at creation. Planning moves it to `Planned`.

```bash
talos issue:create \
  --title="<title>" --module=<module> --priority="<priority>" \
  [--label="<label1>,<label2>"] [--description="<description>"]
```

Writes a skeleton to `modules/<module>/issues/<ID>.yml` (`<ID>` auto-generated). Note `<ID>`/`<module>`, continue to step 1.

### 0b. Create an Explicitly Requested Module That Doesn't Exist

Trigger — **both** must hold, otherwise skip this step:
- The user **names the module explicitly** ("in the `billing` module", "add a `checkout` spa"), rather than it being inferred from domain nouns.
- Neither `modules/<module>/` nor `packages/<module>/` exists.

Scaffold it **before** `talos issue:create`, so the issue lands in a real module. Pick the generator from the module kind the request describes; a backend domain module is the default when nothing points elsewhere:

```bash
talos module:create --name=<module> --destination=<app|api-or-microservice module>  # backend domain module (default)
talos microservice:create --name=<module>                                           # standalone service
talos spa:create --name=<module> [--design=<design>] [--target=<api|microservice>]   # front-end SPA
talos admin:create --name=<module> [--design=<design>] [--target=<api|microservice>] # back-office SPA
talos design:create --name=<module>                                                 # design system
talos storybook:create --name=<module>                                              # component gallery
talos swagger:create --name=<module> [--module=<target>]                            # API explorer
```

Only the module skeleton — this step never fills in artifacts (entities, routes, components); that work is what the issue plans. Then continue to step 0a's `talos issue:create` with the new `<module>`, and read its fresh `<module>.yml` `type` in step 1 as usual. Report each module created in step 7; if the generator fails, fall back to `shared`, note it, and keep going.

### 1. Locate the Issue File and Module Type

Plan mode: use the resolved ID/path (if not found, record the exact path checked, skip, continue). Create mode: use the file from 0a. Read `modules/<module>/issues/<ID>.yml` (default module `shared`).

Only plannable when `state` is exactly `Todo` (create-mode always is). Any other state → skip, note the skip and current state for step 7, continue.

Read `modules/<module>/<module>.yml` `type` — decides the `goal`'s technical vocabulary (see **Technical Structure by Module Type**):
- `"module"`/`"api"`/`"microservice"` (or none) → backend → `### Data Model`.
- `"spa"` / `"storybook"` → `### Front-End Structure`.
- `"design"` → `### Design System Structure`.

### 2. Restructure the Parent Issue

Replace `description` with the **same five fields sub-issues use**:
- `context` — background and why the issue exists.
- `goal` — concrete work, incl. **Technical Notes** (constraints/hints) and the type-matched subsection when applicable.
- `dod` — acceptance criteria as checkboxes (`- [ ]`), all required.
- `testing` — ordered checkbox list (`1. [ ]`, …) a reviewer follows to verify end-to-end, exercising every `dod` item (see **How to Test**).
- `dependencies` — issue IDs to complete first (usually `[]`; scan real prerequisites in step 3a).

Rules:
- Preserve all factual info; keep fields concise and actionable.
- `dod` items are checkboxes, never prose. For data models, add indented sub-checkboxes per field: `  - [ ] \`fieldName\` — <description>`.
- `dod` descriptions are plain-English outcomes — no implementation syntax. Backend: `` `type` — b2b | school | internal `` (not `ENUM(...)`); `` `createdAt` — Created date `` (not `@CreateDateColumn`); `` `packs` — One organization has many packs `` (not `@OneToMany`). SPA/design: `` Profile page renders the user's avatar and name `` (not component paths).
- Use the entity name, not an ID suffix: `` `address` — User has one address `` (not `addressId`).
- Implementation specifics (decorators, paths, hooks) appear only in `goal`'s technical subsection.
- Applies only when **not** split — when split, the parent is deleted (step 5).

### 3. Extract Labels, Set State and Priority

**Module** — preserve the existing `module` field; give every sub-issue the parent's `module`. Never drop it when rewriting YAML.

**Labels** — short (1–3 words), Title Case (uppercase for acronyms). Deduplicate against existing YAML labels. Vocabulary (exact casing):
- **Change-type** — `Feature`, `Enhancement`, `Bug`, `Security`, `Hotfix`, `Performance`, `Refactor`, `Cleanup`, `Architecture`, `Testing`, `Documentation`, `Build`, `Dependencies`, `CI`, `Style`, `Improvement`, `Chore`, `Maintenance`, `Revert`. `Breaking Change` is a modifier.
- **Area** — `Database`, `API`, `UI`, `SPA`, `Design`, `Infrastructure`.

**Always ≥1 change-type label, listed first** — `$issue-fix` maps it to the branch type (`Feature`→`feat/…`, `Bug`→`fix/…`, `Refactor`→`refactor/…`); area-only falls back to `chore/…`. Add area labels when helpful. Leave `branch` unset.

**State** — always `Planned` (every sub-issue when split, else the parent). Valid: `Todo`, `Planned`, `In Progress`, `Done`.

**Priority** — always set/confirm; infer rather than ask, a stated priority overrides:
- `Urgent` — outages, security vulns, data loss, broken builds, blockers.
- `High` — important bugs/features users await, regressions, time-sensitive.
- `Medium` — standard features/improvements, non-blocking bugs (fallback).
- `Low` — nice-to-haves, polish, refactors, docs, chores.

### 3a. Scan Existing Issues for Dependencies

Scan **every issue in the project**, not just the modules in this batch — a prerequisite often lives in another module (the API issue a SPA issue waits on, the entity a migration extends). From the root of the project:

```bash
bun -e 'for (const f of new Bun.Glob("{modules,packages}/*/issues/*.yml").scanSync(".")) console.log(f)'
```

Read each candidate's `id`, `module`, `state`, `title`, and `goal`. Batch the reads — grep titles/states across the set first, then open in full only those plausibly related to the issue being planned.

- Wire a dependency only when this issue **genuinely can't be implemented until the other completes**. Add the prerequisite's `id`.
- **Skip `Done` issues** — only `Todo`/`Planned`/`In Progress` can be prerequisites.
- Cross-module is fine — reference the ID regardless of location.
- Also check the reverse direction: if an existing `Todo`/`Planned` issue can't proceed until *this* one lands, add this issue's `id` to that issue's `dependencies` and note the edit in step 7.
- Never invent a dependency; keep the graph acyclic (no self-dependency, no edge back into a chain that already reaches this issue).

Apply to the parent (step 2) and each sub-issue (step 5), on top of intra-batch wiring.

### 4. Check Whether Splitting Is Needed

Split when the issue spans multiple unrelated concerns, can't be done in one focused session, or has several independent criteria that could ship separately. Skip if already small and focused.

### 5. Plan the Sub-Issues (if needed)

Break into 3–7 small, self-contained, independently implementable sub-issues reading as an ordered guide. For each:
- Generate an ID `XXX-000000` (3 uppercase letters + 6 digits).
- Write a new YAML to the same `modules/<module>/issues/`.
- Inherit `priority`/`labels` from the parent; set `state: "Planned"`.
- Order by implementation sequence via `dependencies` (sub-issue IDs, `[]` when none).
- Use the same five fields scoped to the sub-issue, `context` also noting how it fits the larger plan.

`dependencies` is what makes the split shippable: `issue-fix` turns a dependency chain into a [stacked PR](https://docs.github.com/en/pull-requests/get-started/about-stacked-prs) chain — one small PR per sub-issue, each targeting the one below, reviewable and mergeable on its own without waiting for the rest. So split along that grain: put foundations (shared types, schema, migrations) in the earliest sub-issues and what builds on them after, and give each sub-issue an honest `dependencies` list. Leave genuinely independent sub-issues at `[]` — they ship as separate PRs instead of being chained for nothing.

When implementation detail is needed, `goal` includes the type-matched subsection. Backend `### Data Model` lists each relation with the exact owning field, decorator, and inverse/FK/join owner:
```
- `EntityA.fieldName` → `@OneToMany(() => EntityB, (b) => b.a)` — one A has many Bs
- `EntityB.fieldName` → `@ManyToOne(() => EntityA, (a) => a.bs)` — many Bs belong to one A
- `EntityA.fieldName` → `@ManyToMany(() => EntityB)` + `@JoinTable()` — pivot owned by A
- `EntityA.fieldName` → `@OneToOne(() => EntityB)` + `@JoinColumn()` — FK on A
```
For spa use `### Front-End Structure`, for design `### Design System Structure`, naming concrete files/folders.

After writing all sub-issues, **delete the parent file** — but first confirm every piece of the parent's intent is carried into ≥1 sub-issue's `context`/`goal`/`dod`. Never leave the plan with neither parent nor sub-issues. List each created sub-issue (ID + title).

Sub-issue YAML:
```yaml
id: "<generated-id>"
module: "<module>"
title: "<action-oriented title: verb + noun>"
state: "Planned"
priority: "<parent priority>"
labels:
  - "<label>"
context: |
  <2–3 sentences scoped to this sub-issue>
goal: |
  <What this sub-issue achieves>

  ## Technical Notes
  <Optional — omit if not applicable>

  ### Data Model | Front-End Structure | Design System Structure
  <Type-matched subsection — omit if not applicable>
dod: |
  - [ ] <Condition 1>
  - [ ] <…>
testing: |
  1. [ ] <First step — command or route/flow to exercise>
  2. [ ] <Next step and expected result>
dependencies:
  - "<id of a sub-issue to complete first>"
```

### 6. Save Changes

- **Split:** write all sub-issue files, then `rm modules/<module>/issues/<ID>.yml`. Confirm each written and the parent removed, with relative paths.
- **Not split:** rewrite the parent YAML with the five fields (replacing `description`) plus new labels. Confirm with the relative path.

### 6a. Validate the Written YAML

Every file this skill writes must survive the validator. Run it on the batch from the root of the project:

```bash
talos issue:check --id=<ID1>,<ID2>,...
```

Fix everything it reports and re-run until clean (exit `0`). It catches exactly the mistakes planning makes: a `state`/`priority`/`label` with the wrong casing, a missing change-type label or one not listed first, `dod` lines that are prose instead of `- [ ]` checkboxes, `testing` steps not numbered sequentially from 1, a `description` left behind next to the planned fields, an `id` that no longer matches its filename after a rename, and — critically for step 3a/5 — a `dependencies` entry pointing at a non-existent issue or closing a cycle. Never plan an issue "done" while the check still errors.

### 7. Confirm the Batch

Report a batch summary. Per issue: `id`, `title`, module (flagging any module scaffolded in step 0b), mode (created vs. planned-in-place), final `priority`/`labels`, and whether split (listing sub-issue IDs/titles). Then list skipped/unplannable targets (state not `Todo` + its state; file not found + exact path; ambiguous grouping).

A not-split parent uses the identical structure (`id`/`module`/`title`/`state`/`priority`/`labels` + five fields), preserving any existing `comments`:
```yaml
comments:
  - author: "Alice"
    message: "Some comment"
```

## How to Test

`testing` is an **ordered checkbox list** (`1. [ ]`, …) of concrete steps proving the change works end-to-end. Where `dod` states *what must be true*, `testing` states *how to prove it*.
- Write runnable steps in implementation order — command / route / input — each with its **expected result**. Prefer project tooling (`talos check --strict --logs`, `talos app:start`, a specific `curl`/route, `talos e2e:run` only for front-end module types).
- Cover every `dod` item, including meaningful edge/error cases.
- Match the module type: **backend** (`module`/`api`/`microservice`, or none) tests endpoints/services/migrations directly — unit/integration tests (`bun:test`) and `curl`/route calls, **never Playwright/`talos e2e:run`**; SPA/design/storybook tests rendered routes and interactions (`talos app:start` + browser flow, `talos e2e:run` when a spec exists).
- Keep self-contained; omit only when nothing is observable (pure chore).

```yaml
testing: |
  1. [ ] Run `talos check --strict --logs` from the root — lint, types, tests pass.
  2. [ ] Start with `talos app:start` and open `/users/new`.
  3. [ ] Submit a duplicate email — rejected with 409 and inline error shows.
```

## Technical Structure by Module Type

`goal`'s technical subsection follows the module's conventions (step 1's `type`). Use exactly one; omit for issues with no structural component.

### Backend (`type: "module"`, `"api"`, `"microservice"`, or none) — `### Data Model`

Module owns controllers, services, repositories, entities, migrations, seeds, and constraints under `src/`. Name the validation rules the work needs as `src/constraints/` artefacts — `Assert<Name>` classes for route `params`/`payload`/`queries` and `assert<Subject><Rule>` guards for the business rules services enforce — reusing `@talosjs/validation/constraints/*` where one already covers the rule. List TypeORM relations with the exact owning field, decorator, and inverse/FK/join owner (see step 5 block). Reference services/repositories/controllers/DI by `@talosjs` conventions; entities register in `SharedModule`.

When a new entity or column lands, check whether it needs an index — foreign keys, fields used in `WHERE`/`ORDER BY`/lookups, and fields with a uniqueness constraint. List each with its `@Index()`/`@Column({ unique: true })` decorator in `### Data Model`, and add a matching `dod` checkbox (`- [ ] \`fieldName\` — indexed for <lookup/uniqueness reason>`).

### SPA (`type: "spa"`) — `### Front-End Structure`

Front-end SPA (TanStack Router + Query), **not** registered into `AppModule`/`SharedModule`. Vertical slices — name concrete files/folders:
- `src/routes/<kebab>.tsx` — file-based route; thin, delegates UI to features and data to services.
- `src/features/<feature>/` — self-contained slice owning `assets/`, `components/`, `hooks/` (data/API/UI state), `layouts/`, `services/` (only layer talking to backend), `store/`, `styles/`, `types/`, `utils/`. Must not import another feature's internals — promote shared code to `src/shared/`.
- `src/shared/<sub-layer>/` — the only place ≥2 features import in common.

For a new feature, `talos spa:feature:create --name <Name> --module <module>` (`$spa-feature-create`) scaffolds route, layouts (`features/<feature>/layouts/`), and example hooks (`useGet<Name>`, `useUpdate<Name>`). Describe the feature, route path, layouts, and hooks — hooks as `useGet<Name>`/`useUpdate<Name>`, components/layouts in PascalCase.

### Storybook (`type: "storybook"`) — `### Front-End Structure`

Component gallery (spa-flavour, TanStack Router) previewing a **design module's** components/icons, **not** registered into `AppModule`/`SharedModule`. Every preview is a story `meta` importing through the design alias. Name concrete files/folders:
- `src/features/<component>/<Name>.stories.tsx` — the only thing under `features/`; each exports `meta satisfies Meta<typeof Component>`. Compound sub-components are sibling `<Name><Sub>.stories.tsx` (title `"<Name>.<Sub>"`, same `meta.group`); icons share `features/icons/` as `<Name>Icon.stories.tsx`. Author with `$storybook-story-create` — no `talos` generator.
- `src/shared/` — gallery engine (`story/types.ts`, `story/registry.ts`, `components/Canvas.tsx`, `Controls.tsx`, `Sidebar.tsx`, `CommandPalette.tsx`); touch only when discovery/preview logic changes.
- `vite.config.ts` — the design alias(es) (`@module/design` → `../design/src`); import through the alias, never relative cross-module paths.

### Design (`type: "design"`) — `### Design System Structure`

Design system (reusable UI primitives), **not** registered into `AppModule`/`SharedModule`. Organized by asset kind — name concrete files/folders:
- `src/components/<component>/` — one folder per component grouping its variants (e.g. `button/` → `Button.tsx`, `ButtonSave.tsx`). Compose existing primitives.
- `src/hooks/` — generic presentation hooks (state, DOM, events); no data-fetching.
- `src/icons/` — SVGs in `fill/` + `outline/`, grouped by category and size (`sm`/`md`/`lg`); never inline SVG.
- `src/inspirations/` — reference UI screenshots (`<category>/<slug>.webp` + `<slug>.yml`); consult before designing, never imported or edited.
- `src/fonts/` — bundled web fonts with `@font-face` CSS; no CDNs.
- `src/styles/` — global stylesheets (`app.css`, `brand.css`, `typography.css`); prefer shared styles + scoped classes.
- `src/utils/` — small pure presentation helpers (`cn`, `staleChunk`); no business logic.
