---
name: talos-commands
description: Reference for the `talos` CLI commands — app lifecycle, module/design/spa/admin/microservice/SDK/docker scaffolding, database migrations and seeds, workspace task running, health checks, releases, and issues.
---

# talos CLI Commands

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

> **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/` (e.g. once extracted into a shared package). Check both roots before assuming a path is missing; every `modules/<module>/...` path applies equally under `packages/<module>/...`.

Always run from the project root.

## Bootstrap
```bash
talos app:create [--name <name>] [--destination <path>]  # Scaffold a brand-new project (app + shared modules, deps, optional CI/CD)
talos app:init [--name <name>] [--destination <path>]     # (Re)write project config (biome, tsconfig, git, commit-msg hook, env, assistant skills)
talos commitlint:init                                     # Install a git commit-msg hook that lints commit messages (runs commitlint:check)
talos commitlint:check --file <path>                      # Lint a commit message file against the type(scope): Subject rules
```

`app:create` also generates Docker files and runs `app:init` (project config only) automatically.

```bash
talos install                          # bun install, but audits every resolved package against OSV.dev first (blocks on high/critical unless --force)
talos install --audit-level=critical   # Only block on critical findings (low|moderate|high|critical)
talos install --skip-audit             # Skip the audit and install directly
talos install --no-cache               # Bypass the cached audit result and re-query OSV.dev
talos install --force                  # Install anyway even if vulnerabilities were found
```

The audit result is cached against the lockfile's content hash (24h TTL), so unchanged dependencies skip the OSV.dev round trip on repeat installs.

```bash
talos update                           # bun update, but audits the resolved versions against OSV.dev before installing (blocks on high/critical unless --force)
talos update --deps=lodash,zod         # Update only the named dependencies, comma-separated
talos update --latest                  # Update ignoring the version range in package.json
talos update --audit-level=critical    # Only block on critical findings (low|moderate|high|critical)
talos update --skip-audit              # Skip the audit and update directly
talos update --no-cache                # Bypass the cached audit result and re-query OSV.dev
talos update --force                   # Update anyway even if vulnerabilities were found
```

`update` resolves the target dependency graph first (`bun update --lockfile-only`), audits it, then rolls package.json and the lockfile back to their pre-resolve state if it's blocked — so a blocked update never leaves versions bumped.

```bash
talos add --deps=lodash,zod            # bun add, but audits the resolved versions against OSV.dev before installing (blocks on high/critical unless --force)
talos add --deps=jest --dev            # Add to devDependencies
talos add --deps=left-pad --exact      # Add the exact version instead of a ^range
talos add --deps=lodash --audit-level=critical  # Only block on critical findings (low|moderate|high|critical)
talos add --deps=lodash --skip-audit   # Skip the audit and add directly
talos add --deps=lodash --no-cache     # Bypass the cached audit result and re-query OSV.dev
talos add --deps=lodash --force        # Add anyway even if vulnerabilities were found
```

`--deps` is required. Like `update`, `add` resolves first (`bun add --lockfile-only`), audits it, then rolls package.json and the lockfile back if it's blocked.

## Application
```bash
talos app:start                   # Start Docker services + all runnable modules with hot reload
talos app:start --modules=a,b     # Start only the modules named "a" and "b"
talos app:start --packages=a,b    # Alias for --modules
talos app:start --kill-ports      # Free the started modules' ports first, then launch
talos app:stop                    # Stop the app module's Docker stack (started for api/microservice modules)
talos app:stop --modules=a,b      # Stop the Docker stack when the named modules include an api/microservice
```

## Generators
```bash
talos module:create --name <name>        # Scaffold a module
talos module:remove --name <name>        # Remove a module + all references
talos design:create --name <name>        # Scaffold a design module (from @talosjs/design)
talos design:remove --name <name>        # Remove a design module + all references
talos spa:create --name <name> [--design <design>] [--target <api|microservice>]     # Scaffold a spa module (from @talosjs/spa); --target records the backend it calls
talos spa:remove --name <name>           # Remove a spa module + all references
talos admin:create --name <name> [--design <design>] [--target <api|microservice>]   # Scaffold an admin module (back-office dashboard SPA); --target records the backend it calls
talos admin:remove --name <name>         # Remove an admin module + all references
talos storybook:create --name <name>     # Scaffold a storybook module (component gallery for a design module)
talos storybook:remove --name <name>     # Remove a storybook module + all references
talos swagger:create --name <name> [--module <target>] [--design <design>] [--prefix <prefix>] [--force]  # Scaffold a swagger module (custom API explorer) and generate one route file per controller; on an existing module writes routes + spec only (--force reinstalls the explorer)
talos swagger:remove --name <name>       # Remove a swagger module + all references
talos microservice:create --name <name>  # Scaffold a microservice
talos microservice:remove --name <name>  # Remove a microservice + all references
talos sdk:create                         # Generate a browser SDK from module controllers
talos docker:create --name <service>     # Add a Docker service to docker-compose.yml

# Issues
talos issue:create --title <title> [--module <name>] [--priority <p>] [--label <l1,l2>] [--description <text>]  # YAML skeleton; <ID> is auto-generated, state is always Todo
talos issue:pull --id <id1>,<id2>,... [--module <name>] [--provider linear|github]   # Pull one or more issues as YAML (defaults to Linear; GitHub uses the gh CLI)
talos issue:push --id <id1>,<id2>,... [--provider linear|github]                     # Push one or more local issue YAMLs (create or update; defaults to Linear; GitHub uses the gh CLI)
talos issue:convert --destination <mod1>,<mod2>,...             # Bundle a module/package's issues/*.yml into a single issues.json (src/shared/ for spa|storybook|swagger|admin, otherwise src/)
talos issue:check [--module <mod1>,<mod2>,...] [--id <id1>,<id2>,...] [--strict] [--json]  # Validate every issue YAML against the issue conventions

# Marketing
talos marketing:create [--module <name>] [--title <title>] [--content <content>] \
  [--hashtag <tag>]... [--platform <platform>]... [--image <file.png>]... [--video <file.mp4>]... [--state <state>]
                                         # Create a marketing post resource under modules/<module>/marketing/<ID>/
```

`marketing:create` writes `modules/<module>/marketing/<ID>/<ID>.yml` (id, module, title, content, hashtags, images, videos, platforms, state) plus the post's `images/` and `videos/` folders. Media passed with `--image`/`--video` is copied in and renamed to 6 `a-f0-9` characters. Platforms are `X` (alias `twitter`), `Instagram`, `Facebook`, `LinkedIn`, `TikTok`, `Threads`, `WhatsApp`, `Telegram`, `Messenger`, `Discord`, `Reddit`, `Medium`; states are `Todo`, `In Review` (alias `in-review`) and `Published`. The `$marketing-create` skill wraps this command.

`issue:check` walks `modules/*/issues/*.yml` and `packages/*/issues/*.yml` and validates each file at four levels: **file integrity** (UTF-8, no BOM/CRLF/tab indentation, size cap, `<ID>.yml` naming), **YAML integrity** (parses, is a mapping, no duplicate top-level keys), **schema** (closed field set; `id` matches the filename, `module` the owning directory; exact-cased `state`/`priority`/`labels` vocabularies; `dod` checkbox and `testing` numbered-checkbox grammar; `branch`/`pr` shape) and **cross-file** rules (unique ids, resolvable dependencies, no self-dependency or cycle). Each finding prints as `SEVERITY <rule> <message>`; the command exits `1` on any error (or on any warning with `--strict`), and never edits a file. The `$issue-check` skill wraps this command.

Class generators share the form `talos <artifact>:create --name <Name> --module <name>`, where `<artifact>` is one of:
`ai:chat` (chat class), `ai:middleware` (chat middleware), `ai:skill` (chat skill — prompt + its tools), `ai:tool` (chat tool), `analytics` (handler), `cache` (handler), `command` (CLI/`ICommand`), `controller` (HTTP/WS), `cron` (job), `database` (adapter — also takes `--type <postgres|sqlite|redis>`, prompted for interactively when omitted), `entity` (TypeORM), `event` (pub/sub), `flag` (feature flag), `logger`, `mailer` (class + JSX template), `middleware` (HTTP/WS), `permission`, `queue` (BullMQ job queue), `rate-limit` (throttling strategy / `IRateLimiter`), `repository`, `service`, `spa:feature` (SPA feature slice), `storage`, `translation` (localized dictionary), `vector-database`.

The matching `/<artifact>-create` skills wrap these generators, complete the code + tests, and share the `talos-scaffold` workflow (run-from-root, option inference, module registration, lint/format, conventions).

## Custom commands
```bash
talos command:create --name <Name> --module <name>  # Scaffold a custom ICommand class
talos command:run <command-name> [args...]           # Run a custom command (matched by its getName()) across modules
```

`command:run` matches the `getName()` of every command in `modules/*/src/commands` and executes it via the module's `bin/command/run.ts`, forwarding extra args.

## Workflows
```bash
talos workflow:create --name <Name> --module <name>             # Scaffold a workflow (from @talosjs/workflow)
talos workflow:transition:create --name <Name> --module <name>  # Scaffold a workflow transition (one step)
```

A workflow orchestrates an ordered list of conditional, reversible transitions with automatic rollback on failure. Generate each step with `workflow:transition:create`, then list the transition classes in the workflow's `getTransitions()`. The `$workflow-create` and `$workflow-transition-create` skills wrap these.

## Database
```bash
talos migration:create --module <name>   # Generate a timestamped migration
talos migration:up [--drop] [--logs]     # Run pending migrations (--drop: drop DB first, --logs: show failing output)
talos migration:down [--version <v>] [--logs]  # Roll back the latest migration (or the one matching --version)
talos migration:up --modules=user,billing      # Only the named modules (also --packages=a,b); --drop takes no selection
talos migration:down --modules=user,billing    # Only the named modules (also --packages=a,b)
talos seed:create --module <name>        # Generate a seed YAML file
talos seed:run [--drop] [--logs]         # Run all seeds (--drop: re-run every seed, ignoring the cache; --logs: show failing output)
talos seed:run --modules=user,billing    # Only the named modules (also --packages=a,b)
```

## Workspace tasks
```bash
talos workspace:run --commands=build,lint,test                # Run scripts across every package and module, with caching
talos workspace:run --commands=build --modules=billing,user   # Only the named modules (also --packages=a,b)
talos workspace:run --commands=test --logs                    # Stream plain logs (use in CI/non-interactive runs)
talos workspace:run --commands=build --no-cache               # Ignore the task cache and re-run everything
talos e2e:run [--modules=a,b] [--logs] [--no-cache]          # Alias for workspace:run --commands=e2e — run the Playwright e2e suite
talos check --strict --logs                                  # Install, build, fmt, lint and test — the full gate
talos check --strict --modules=billing,user --logs           # Scope the gate to the named modules (also --packages=a,b)
talos build [--modules=a,b] [--logs] [--no-cache]            # Build every target in dependency order, several at once
talos fmt   [--modules=a,b] [--logs] [--no-cache]            # Format every target, all at once
talos lint  [--modules=a,b] [--logs] [--no-cache]            # Lint every module, several at once
talos build|fmt|lint --output=md                             # Also write var/outputs/talos_<command>.md for an agent to fix (also --output=json)
```

`workspace:run` runs each command as a group (all `build`, then all `lint`, …) in workspace dependency order. Targets whose package.json lacks the script are skipped silently; the first failure stops the run and prints its output. Results are cached in `var/cache/workspace/`, keyed by target file content, transitive workspace deps, script text, and root configs — a cache hit replays logs and restores output artifacts (`dist/` by default). Always pass `--logs` as an agent.

`build`, `fmt` and `lint` each run their targets in parallel — `build` starts a target the moment everything it imports has been built, `fmt` and `lint` are order-independent and so run flat out. Like `check`, all three take `--output=md|json`, which writes the same report to `var/outputs/talos_<command>.{md,json}` in the shape an AI agent is handed to fix what it lists; the console report and the exit status are unchanged by it.

`workspace:check` is shorthand for `workspace:run --commands=install,build,fmt,lint,test` — the full verification gate in that order, with the same caching, filtering (`--packages`/`--modules`), `--logs`, and `--no-cache` flags.

## Security
```bash
talos security:check                                    # Audit every dependency against OSV.dev, report by module/package (sorted by severity)
talos security:check --modules=billing,user             # Only the named modules (also --packages=a,b)
talos security:check --audit-level=high                 # Only report high/critical findings (low|moderate|high|critical)
talos security:check --issues                           # Create one YAML Security issue per vulnerability instead of printing
```

`security:check` walks the workspace, parses every lockfile it finds (`bun.lock`, `package-lock.json`, `Cargo.lock`, `requirements.txt`, `Pipfile.lock`, `poetry.lock`, `go.sum`, `Gemfile.lock`, `composer.lock`) and checks each resolved package against the **OSV.dev** online database — covering npm (bun/node/react/typescript), PyPI, crates.io, Go, RubyGems and Packagist. No local audit binary is required (only network access). Findings are grouped by module/package folder name and sorted by severity (critical→low), each citing the OSV advisory id, CVE aliases, patched versions and advisory URL. `--issues` writes each finding into the owning module's `issues/` folder (root findings → `modules/shared/issues/`) as a `Todo`, `Security`-labelled issue with priority mapped from severity. If OSV.dev is unreachable the command aborts. The `$security-check` skill wraps this command.

## Test coverage
```bash
talos coverage:check --logs                             # Run every module's suite with coverage, report per module (worst first)
talos coverage:check --logs --modules=billing,user      # Only the named modules (also --packages=a,b)
talos coverage:check --logs --threshold=80              # Judge against 80% instead of the default 90%
talos coverage:check --logs --concurrency=1             # Run the suites one at a time (default: cores, capped at 8)
talos coverage:check --logs --issues                    # Create one YAML issue per failing/under-covered module instead of printing
talos coverage:check --logs --output=md                 # Also write var/outputs/talos_coverage.md for an agent to fix (also --output=json)
```

`coverage:check` discovers every member of `modules/` and `packages/` and runs `bun test tests --coverage` in each, reading the coverage table bun prints (falling back to the module's `lcov.info`). Rust crates, Python distributions and modules without a `tests/` directory are skipped; a suite that passes without covering any code (a types-only package) is reported as *no code measured* and never averaged in. The report gives a module table (line/function rates, test tally), the least-covered files with their uncovered line ranges, the failing suites, and the workspace means. `--issues` files a `Bug`/`Urgent` issue per failing suite and a `Testing` issue (`High` when more than 25 points short, else `Medium`) per under-covered module, each carrying the rates and the thin files. The `$coverage-check` skill wraps this command.

## Project health
```bash
talos check --strict --logs                   # ALWAYS run it this way — every check, strict verdict, plain logs
talos check --logs --skip=workspace           # The fast checks only (no install/build/test)
talos check --logs --only=conventions,tests,docs  # Only the named checks
talos check --logs --e2e                      # Add the opt-in end-to-end suite
talos check --logs --modules=billing,user     # Scope every module-aware check to these targets (also --packages=a,b)
talos check --logs --audit-level=high         # Only surface high/critical vulnerabilities
talos check --logs --strict                   # Exit 1 when a check only reports warnings
talos check --logs --json                     # Machine-readable report for CI
```

**Always invoke it as `talos check --strict --logs`, never bare** — the other flags above narrow the run (`--only`, `--modules`, `--skip`), but `--strict` and `--logs` stay on so warnings fail the verdict and the workspace output stays readable.

`check` is the whole-project gate: it runs seventeen checks (plus the opt-in eighteenth) and prints one report with a status line per check, a detail block per non-passing check, and a single verdict line.

| Check | Runs | Fails when |
|---|---|---|
| `workspace` | `workspace:run --commands=install,build,fmt,lint,test` | a task exits non-zero |
| `structure` | module manifests and types, `package.json` names, root `workspaces` globs, `tsconfig.json` aliases | a manifest, name or alias target is missing or duplicated |
| `conventions` | DI decorator vs class-name suffix, direct `process.env` reads, exported `Type`/`I` naming, non-null assertions | a decorated class is misnamed or a source file reads `process.env` |
| `env` | each `.env.example.yml` against its `.env.yml` | the local file is missing or lacks a documented key |
| `dependencies` | one range per dependency, unpinned ranges, undeclared imports, unused packages | never — reported as warnings |
| `docker` | every compose file: unpinned images, services with no `image`/`build`, clashing host ports, missing `restart` | a service is undefined or two services share a host port |
| `migrations` | timestamp uniqueness and ordering, `up`/`down` presence, seed YAML validity | two migrations collide, a migration has no `up`, or a seed is invalid YAML |
| `accessibility` | Biome's `a11y` rules over every UI module's `src/` (`design`, `spa`, `admin`, `storybook`, `swagger`) | an enforced a11y rule errors |
| `translations` | `en` fallback, locale parity and `{{ placeholder }}` drift in every dictionary | a key has no `en` value |
| `tests` | a mirrored `.spec.ts` for every source file that declares a class or exported function | never — reported as warnings |
| `docs` | relative links in every markdown document | a link points at a file that does not exist |
| `security` | the OSV.dev dependency audit | a critical or high vulnerability is found |
| `secrets` | credential formats in the working tree, and `.env`/`.pem` files tracked by git | a credential is found outside a fixture, or a secret file is tracked |
| `git` | build output and dependency trees in the index, blobs over 2 MB, `.gitignore` coverage | `node_modules/`, `dist/`, `.next/` or `coverage/` is tracked |
| `issues` | the `issue:check` conventions | an issue file has an error |
| `commits` | conventional-commit rules over the unpushed commits (or the last 20) | never — reported as a warning |
| `hygiene` | conflict markers, focused/skipped tests, bare `TODO`/`FIXME` | a conflict marker or focused test is found |
| `e2e` | opt-in (`--e2e`) — `workspace:run --commands=e2e` | a suite exits non-zero |

Each check reuses the code of its dedicated command, so `check` can never disagree with `workspace:check`, `security:check` or `issue:check`. Check names accept aliases (`a11y`, `audit`, `deps`, `i18n`, `layout`, `naming`, `compose`, `seeds`, `specs`, `markdown`, `gitignore`, `commit`, `workspace`). Generated sources (`*.gen.ts`, `@generated` banners) are exempt from the convention rules, and only exported types and interfaces are held to the naming convention. A check with nothing to inspect (no UI module, no lockfile, no issue file, no dictionary, no `.env.example.yml`, no compose file, no migration, no git repo) reports as **skipped**, never as passed. The accessibility check reports violations of a11y rules the project disabled in `biome.jsonc` separately, as a non-failing "not enforced" note, so the real exposure stays visible without overriding the project's own config. Exit code is `1` on any failure (or any warning with `--strict`). The `$project-fix` skill wraps this command and fixes what it reports.

## Release
```bash
talos release:create   # Detect unreleased commits, bump versions, update changelogs, tag, push
```

## Publish
```bash
talos npm:publish                                  # Publish every package and module to npm (skips versions already on the registry)
talos npm:publish --packages=cli,command           # Only the named packages (also --modules=a,b)
talos npm:publish --access=restricted              # Publish with restricted registry access (default: public)
talos docker:publish                               # Build and push a Docker image for every package/module that has a Dockerfile
talos docker:publish --modules=billing,user        # Only the named modules (also --packages=a,b)
talos docker:publish --tag=edge                    # Override the image tag (default: package.json version, else latest)
```

## Storage
```bash
talos storage:push --provider=<cloudflare|bunny|s3> --from=<path> --destination=<bucket path>  # Upload a local file or folder to a bucket
talos storage:push --provider=cloudflare --from=modules/web/dist --destination=my-bucket/site  # R2: the first destination segment is the bucket
talos storage:push --provider=s3 --from=var/backup --destination=backups/2026-08 --zip         # Send one zip archive instead of the files
talos storage:pull --provider=<cloudflare|bunny|s3> --from=<bucket path> --destination=<folder> # Download a bucket path into a local folder
talos storage:pull --provider=s3 --from=backups/2026-08 --destination=var/restore --unzip       # Unpack each archive that comes down
```

`storage:push` reads `~/.talos/credentials/<provider>.yml` and uploads over HTTP — Cloudflare R2 and Amazon S3 through the S3 REST API signed with Signature Version 4, Bunny through its storage API. A folder uploads as one object per file, keyed by its path relative to the folder; a single file lands under `--destination` by its own name; `--zip` packs the source into one archive named after it (`dist/` → `dist.zip`). The bucket comes from the profile for `s3` (`bucket`) and `bunny` (`storageZone`), and from the **first segment of `--destination`** for `cloudflare`, whose profile only stores the account endpoint. Objects carry a `Content-Type` inferred from their extension, upload in parallel, and overwrite in place — a push never deletes. Any object that fails prints `<key>: HTTP <status>` and the run exits `1`. Missing options are prompted for, so pass them all in a script.

`storage:pull` is the mirror: it lists `--from` and writes every object under `--destination`, each keeping its path relative to the prefix, creating the folder if needed. A prefix that lists nothing is retried as a single object key, so a typo surfaces as a `404` instead of an empty success. `--unzip` unpacks each `.zip` into a folder named after it (`dist.zip` → `dist/`) rather than writing the archive. Keys arrive from the remote, so any key — or zip entry — that would climb out of `--destination` is skipped with a warning. Like the push it overwrites in place and never deletes, so it mirrors rather than syncs. The `$storage-push` and `$storage-pull` skills wrap these commands.

`npm:publish` packs each target with `bun pm pack` (so workspace deps resolve to real version ranges), then publishes the extracted copy with `npm`, reading the token from `~/.talos/credentials/npm.yml`. `docker:publish` logs in once with `~/.talos/credentials/docker.yml`, then for each target shipping a `Dockerfile` runs `docker build`/`docker push`, tagging `<username>/<name>:<tag>` (non-`docker.io` registries are prefixed). Both accept `--packages`/`--modules` (comma-separated; default all) and `--silent`. Run the matching `*:credentials:create` first.

## Credentials
```bash
talos credentials:create --provider=<provider>                                             # Save a provider token to ~/.talos/credentials/<provider>.yml
talos npm:credentials:create [--token <token>]                                             # Save an npm Granular Access Token to ~/.talos/credentials/npm.yml
talos docker:credentials:create [--registry <host>] [--username <user>] [--token <token>]  # Save a Docker registry access token to ~/.talos/credentials/docker.yml
```

`--provider` accepts `jira`, `linear`, `x`, `instagram`, `facebook`, `linkedin`, `tiktok`, `threads`, `whatsapp`, `telegram`, `messenger`, `discord`, `reddit`, `medium`, plus the three object stores `storage:push` uses — `cloudflare` (alias `r2`), `bunny`, `s3`. Pass whichever of `--base-url`, `--email`, `--token`, `--client-id`, `--client-secret`, `--client-key`, `--access-token`, `--app-id`, `--app-secret`, `--page-id`, `--phone-number-id`, `--application-id`, `--bot-token`, `--username`, `--password`, `--access-key`, `--secret-key`, `--endpoint`, `--region`, `--bucket`, `--storage-zone` that provider needs — run `talos credentials:create --help` for the full list, and `--silent` to skip the prompts.

Credentials are stored per-user under `~/.talos/credentials/*.yml` in a `profiles.default` block. Each command prompts (masked) for anything not passed as a flag and prints the URL where the token can be created.

There is no `talos *:secret:push`. Push a CI secret with the provider's own CLI/API — e.g. `gh secret set <NAME>` for GitHub Actions.

## Assistant & Shell setup
```bash
talos agent:skills:create  # Write AGENTS.md + skills/agents for the selected assistants (.claude, .codex, ...)
talos completion:zsh       # Install Zsh tab-completion for the talos commands (~/.zsh)
```
