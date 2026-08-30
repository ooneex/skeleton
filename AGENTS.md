# AGENTS.md

Router for AI coding assistants. Every capability below ships as a **skill** (a task procedure) or an **agent** (a narrow specialist). Load the one that matches the task instead of improvising — this file stays small on purpose.

## Project

This project is a modular TypeScript/Bun backend on the **@talosjs** ecosystem. Code lives in independent modules under `modules/`, each owning its controllers, services, repositories, entities, migrations, and seeds.

## CLI first

Reach for the `talos` or `bun` CLI before doing the same work by hand — it is faster, deterministic, and costs a fraction of the tokens. `talos <artifact>:create` scaffolds files; `talos check --strict` (plus `fmt`, `lint`, `test`, `project:check`, `issue:check`, `coverage:check`, `security:check`, `e2e:run`) verifies them; a single `rg` / `git` / `ls` beats reading files one by one. `talos help` and `talos <command> --help` list what exists — check there first, and write a manual procedure only when no command covers it. Package manager is `bun`/`bunx` only, never `npm`, `npx`, `yarn`, or `pnpm`.

## How to reach a skill or an agent

This file is shared by every assistant; the same skills and agents are installed under a different layout for each. Find yours:

| Assistant | Skills | Agents |
|---|---|---|
| Claude | `.claude/skills/<name>/SKILL.md` — auto-activate, or `/<name>` | `.claude/agents/<name>.md` — real sub-agents, dispatch with the Task tool |
| Codex | `.codex/skills/<name>/SKILL.md` (exposed at `.agents/skills/`) — invoke with `$<name>` | `.codex/agents/<name>.toml` — executable project custom agents |
| Zed | `.agents/skills/<name>/SKILL.md` | same folder, agents installed as skills |
| Cursor | `/<name>` (`.cursor/commands`) | `/<name>` — same command list |
| Gemini | `/<name>` (`.gemini/commands`) | `/agents/<name>` |
| Windsurf | `/<name>` (`.windsurf/workflows`) | `/<name>` — same workflow list |
| Cline | `.clinerules/workflows/<name>.md` | same workflows folder |
| Continue | `/<name>` (`.continue/prompts`) | `/<name>` — same prompt list |
| Roo Code | `/<name>` (`.roo/commands`) | custom modes in `.roomodes` |
| Junie | `.junie/skills/<name>.md` — read on demand | `.junie/agents/<name>.md` — read on demand |
| GitHub Copilot | `.github/skills/<name>/SKILL.md` — auto-activate | agent profiles in `.github/agents/<name>.agent.md` |

Claude, Codex, and Roo run agents as separate actors. For the other assistants, an agent is a document to follow in the current session.

## Routing

### To learn how something works → reference skill

| Question | Skill |
|---|---|
| Which @talosjs package? | `talos-packages` |
| Event / queue / workflow / cron / real-time? | `talos-architecture` |
| Which `talos` CLI command? | `talos-commands` |
| Backend module layout, DI, exceptions | `talos-module` |
| Front-end layout | `talos-design`, `talos-spa`, `talos-admin`, `talos-storybook`, `talos-swagger` |
| Env vars | `talos-env` |
| Code style / test style / UI craft | `optimize-conventions`, `optimize-testing`, `optimize-ui` |
| Generator mechanics (shared by every `*-create`) | `talos-scaffold` |
| Business logic of a domain topic | `explain-topic` — investigates it and writes `topics/TOPIC-<NNN>.md` |
| What a pull request actually changes | `explain-diff` — explains the diff and writes `prs/PR-<id>.md` |

### To create something → generator skill

- Whole module: `module-create` — scaffolds it and completes the first vertical slice.
- One artefact: `<artifact>-create` where artifact is `ai-chat`, `ai-middleware`, `ai-skill`, `ai-tool`, `analytics`, `cache`, `command`, `controller`, `cron`, `database`, `e2e`, `entity`, `event`, `flag`, `logger`, `mailer`, `middleware`, `migration`, `permission`, `queue`, `rate-limit`, `react-component`, `repository`, `seed`, `service`, `spa-feature`, `storage`, `translation`, `vector-database`, `workflow`, `workflow-transition`.
- Also `sdk-create` (typed browser SDK from controllers), `swagger-create` (API explorer from controllers, with prose, field docs, examples and error statuses), `storybook-story-create`, `marketing-create`, `clerk-auth-setup`.

Every generator runs from the repo root and follows `talos-scaffold`.

### To change or verify code → workflow skill

| Task | Skill |
|---|---|
| Something is broken | `debug` |
| Enforce conventions in a module | `optimize` |
| Clean the working diff before committing | `deslop` |
| Make prose read as human-written | `humanize` |
| Migrations / seeds / schema | `database-migrate` |
| Run the Playwright suite | `e2e-run` |
| Translate dictionaries | `translation-translate` |
| Full health check, then fix everything | `project-fix` (always `talos project:check --strict --logs`) |
| Coverage report | `coverage-check` |
| Move content to or from a bucket | `storage-push`, `storage-pull` |
| Dependency CVE audit | `security-check` |
| Pull upstream scaffold / design / assistant config | `project-update`, `design-update`, `agent-skills-update` |

### To ship → `commit` → `pr` → `pr-review` → `pr-merge`

Work that builds on unmerged work ships as a [stacked PR](https://docs.github.com/en/pull-requests/get-started/about-stacked-prs) chain — one small PR per layer, each targeting the branch below, reviewed and merged bottom-up. Requires `gh extension install github/gh-stack`; rebase only with `gh stack rebase` / `gh stack sync`.

### Issues (YAML under `modules/<module>/issues/`)

`issue-found` (audit) → `issue-plan` (structure) → `issue-fix` (implement + PR) → `issue-check` (validate) → `issue-convert` (bundle to JSON). Sync with Linear via `issue-pull` / `issue-push`. Issues linked by `dependencies` become the layers of one stack; unrelated ones get their own PR.

## Agents

Skills dispatch these; reach for one directly only when the task is exactly its scope.

- **Audit a module**, report only: `<type>-issue-founder` for `module`, `api`, `microservice`, `spa`, `design`, `storybook`.
- **Implement one planned issue**: `<type>-issue-fixer`, same six types. Pick by the issue's `type` field — untyped means `module`.
- **Review a working diff** against conventions + Clean Architecture: `convention-reviewer`.
- **Narrow fixes**: `code-optimizer` (quality, no behaviour change), `test-author` (tests only), `accessibility-fixer` (one UI module), `translation-extractor` (hardcoded text → dictionary), `translation-translator` (fill locales), `marketing-post-writer` (post copy).
