# skeleton

A modular TypeScript/Bun application built on the **@talosjs** ecosystem. Everything lives under `modules/` — each module owns its controllers, services, repositories, entities, migrations, seeds, and issues.

> Framework documentation: [https://docs.talos.com](https://docs.talos.com)

## Prerequisites

- **[Bun](https://bun.sh)** (latest) — runtime, package manager, and test runner.
- **[Docker](https://www.docker.com/)** with Docker Compose — Postgres, Dragonfly, and the other backing services declared in `modules/app/docker-compose.yml`.
- **Talos CLI** — the `talos` binary that scaffolds, runs, and checks the project:

  ```bash
  # macOS / Linux
  curl -fsSL https://raw.githubusercontent.com/ooneex/talos/main/packages/cli/scripts/install.sh | bash

  # Windows
  powershell -c "irm https://raw.githubusercontent.com/ooneex/talos/main/packages/cli/scripts/install.ps1 | iex"
  ```

  The installer also creates an `oo` alias, so `oo app:start` and `talos app:start` are the same command. Check it with `talos version`, update it with `talos upgrade`.

## Getting started

```bash
bun install
```

Configuration lives in `modules/app/.env.yml` (git-ignored, generated from `.env.example.yml`). Fill in the values you need before the first start.

### Start

```bash
talos app:start
```

This runs every runnable module concurrently — `api` and `microservice` modules with hot reload (`bun --hot`), `spa`, `admin`, `storybook`, and `swagger` modules with their Vite dev server. When a backend module is in the selection, the Docker services in `modules/app/docker-compose.yml` are brought up first (`docker compose up -d`).

Narrow the run with `--modules` (alias: `--packages`), comma-separated:

```bash
talos app:start --modules=app,spa
```

### Stop

```bash
talos app:stop
```

Stops the Docker services `app:start` brought up. The same `--modules` / `--packages` filters apply.

## Modules

A module is a vertical slice of the app: one business domain, all of its layers, in one directory. Every module declares its kind in `modules/<name>/<name>.yml`:

| Type | What it is |
|---|---|
| `api` | The main HTTP app (`modules/app`) |
| `module` | A backend business domain — entities, repositories, services, controllers |
| `microservice` | A domain that also builds and deploys as a standalone service |
| `spa` / `admin` | TanStack Router + Query single-page apps |
| `design` | The design system consumed by the SPAs |
| `storybook` | Component gallery previewing a design module |
| `sdk` | Typed browser client generated from a backend's controllers |
| `swagger` | API explorer generated from a backend's controllers — documents every route and runs it against a live backend |

Guidelines that matter: name modules after domains (`user`, `billing`), not layers; never reach into another module's internals — go through its public index; register entities in `SharedModule` (the generators do this for you); read config through the injected `AppEnv`, never `process.env`.

```bash
talos module:create --name user     # also: spa:create, admin:create, design:create, microservice:create,
talos module:remove --name user     # storybook:create, sdk:create, swagger:create
```

A swagger module is generated from a target `api` or `microservice` module: the verb, path, version, roles, and declared `params`/`queries`/`payload` of every `@Route` come from the controllers, so they cannot drift, while the prose, examples, and error statuses stay hand-written in `src/features/<module>/<Name>.route.ts` and survive a re-run. It renders with the linked design module, publishes `public/openapi.json`, and signs in with Clerk so role-guarded routes are runnable — the documentation itself stays public.

```bash
talos swagger:create                                              # name "swagger", from the app module
talos swagger:create --name payment-docs --module payment --prefix gateway
```

Re-run the generator whenever a controller changes, pass the prefix the backend actually mounts (a wrong one makes every request 404), document every status a route answers with — not just the happy path — and give each field a realistic, safe example, since it seeds the try-it form.

## Migrations

Versioned schema changes in `modules/<name>/src/migrations/`, applied in timestamp order across every module.

```bash
talos migration:create --module user   # new timestamped migration + test
talos migration:up                     # apply pending migrations
talos migration:up --drop              # drop the database first
talos migration:down --version <id>    # roll back
```

One logical change per migration, always write the `down`, and never edit a migration that has already run in a shared environment — add a new one instead. Keep data out of them; that's what seeds are for.

## Seeds

Reference data and development fixtures in `modules/<name>/src/seeds/`, run in order across every module.

```bash
talos seed:create --name initial-roles --module user
talos seed:run
talos seed:run --drop                  # re-run every seed, ignoring the cache
talos seed:run --env=local
```

Write seeds so re-running them is safe (existence checks or `ON CONFLICT DO NOTHING`), keep values deterministic, and only seed a table after the migration that creates it.

## Working with issues

Issues are YAML files under `modules/<module>/issues/<ID>.yml`. They are the source of truth for what is being built, and they drive the whole day-to-day loop — planning, implementation, review, and merge all read and update the same file.

**States**, in order: `Backlog` → `Todo` → `Planned` → `In Progress` → `In Review` → `To Merge` → `Done` (plus `Canceled`). An issue carries `id`, `module`, `title`, `state`, `priority`, `labels`, `context`, `goal`, `dod` (checkbox outcomes), `testing` (numbered verification steps), `dependencies`, and — once implemented — `branch` and `pr`. The first label must be a change type (`Feature`, `Bug`, `Refactor`, …); it determines the branch and commit type.

### Daily loop

```
1. /issue-plan  <description | ID>   → creates and/or structures the issue: context, goal,
                                       dod, testing, labels. Lands it in `Planned`.
2. /issue-fix   <ID>                 → implements it on a `<type>/<ID>-<slug>` branch,
                                       runs fmt/lint/tests, satisfies the DoD.
3. /pr-review   <ID>                 → checks out the branch, runs `talos project:check
                                       --strict --logs` + the DoD and testing steps.
                                       Approves it into `To Merge`.
4. /pr-merge    <ID>                 → merges, re-verifies, deletes the branch, `Done`.
```

Around that loop:

- **Find work** — `/issue-found` audits a module and files one issue per finding. `talos security:check --issues` and `talos coverage:check --issues` do the same for CVEs and untested code.
- **Validate** — `talos issue:check --strict` lints every issue file against the schema, state machine, and dependency graph. Run it before pushing or converting.
- **Sync with Linear** — `talos issue:pull --id=OON-123 --module=user` and `talos issue:push --id=OON-123`. Needs `linear.api_key` (and optionally `linear.team_id`) in `modules/app/.env.yml`. Pushing creates the issue when it doesn't exist yet and renames the local file to the real identifier.
- **Ship to the app** — `talos issue:convert` bundles a module's issues into `issues.json`.

Commit issue YAMLs alongside the code that implements them, and keep `state` honest — the board and the repo should never disagree.

## Talos commands worth knowing

| Command | What it does |
|---|---|
| `talos app:start` / `app:stop` | Run or stop the app and its Docker services |
| `talos check` | Workspace gate: install → build → fmt → lint → tests with coverage |
| `talos project:check --strict --logs` | Full health check — structure, conventions, env, deps, docker, migrations, a11y, translations, tests, docs, security, secrets, git, issues |
| `talos fmt` / `lint` / `test` | Run one script across every module (`--modules=`, `--logs`) |
| `talos coverage:check` | Per-module line and function coverage (`--issues` to file findings) |
| `talos security:check` | Audit dependencies against OSV.dev (`--issues`) |
| `talos e2e:run` | Playwright end-to-end suite |
| `talos migration:up` / `seed:run` | Database lifecycle |
| `talos <artifact>:create` | Generators: `entity`, `repository`, `service`, `controller`, `middleware`, `cron`, `event`, `queue`, `workflow`, `mailer`, `cache`, `logger`, `storage`, `permission`, `flag`, `rate-limit`, `translation`, `react:component`, `spa:feature`, `ai:chat`, `ai:tool`, … |
| `talos command:create` / `command:run --id=<id>` | Custom project commands |
| `talos release:create` | Cut a release |
| `talos completion:zsh` (also `bash`, `fish`) | Shell completion |
| `talos upgrade` / `version` / `help` | CLI maintenance |

Every generator runs from the repository root and takes `--name` and `--module`.

## Skills worth knowing

Skills are task procedures for AI assistants, installed under `.claude/skills/` (and the equivalent folder for Codex, Cursor, Gemini, Zed, and others — see `AGENTS.md`). Invoke one with `/<name>`.

**Ship a change:** `issue-plan` → `issue-fix` → `pr-review` → `pr-merge`.

**Fix and verify:** `debug` (something is broken), `project-fix` (run every check and repair what it reports), `optimize` (conventions, duplication, dead code), `deslop` (clean the diff before committing), `coverage-check`, `security-check`, `e2e-run`.

**Build:** `module-create` for a whole domain, `<artifact>-create` for a single piece (`entity`, `service`, `controller`, `migration`, `seed`, `spa-feature`, `react-component`, …), `sdk-create`, `swagger-create`, `storybook-story-create`, `clerk-auth-setup`.

**Learn the conventions:** `talos-module`, `talos-spa`, `talos-design`, `talos-admin`, `talos-storybook`, `talos-swagger`, `talos-env`, `talos-packages`, `talos-architecture`, `talos-commands`, `optimize-conventions`, `optimize-testing`, `optimize-ui`.

**Maintain:** `database-migrate`, `translation-translate`, `project-update`, `design-update`, `agent-skills-update`.

For narrow, specialist work there are also agents in `.claude/agents/` — `<type>-issue-founder` and `<type>-issue-fixer` per module type, plus `convention-reviewer`, `code-optimizer`, `test-author`, `accessibility-fixer`, and the translation pair.
