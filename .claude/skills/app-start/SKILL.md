---
name: app-start
description: Bootstrap and start this Talos project locally, installing missing Bun, Docker, GitHub CLI, and Talos CLI prerequisites before launching all or selected modules.
---

# Start the Application

> **Package manager: `bun` and `bunx` only.** Never use `npm`, `npx`, `yarn`, or `pnpm`.

> **CLI first.** Use the project's `talos` commands for dependency installation and application startup. Run every project command from the repository root.

Start the local development application and leave it running with its logs visible. Carry through any module selection the user supplied (`--modules` or `--packages`). Do not add `--kill-ports` unless the user requested it: that option may terminate an unrelated local process.

## 1. Check host prerequisites

Check each tool independently with `command -v`; a failing version command or unavailable Docker daemon does not mean the binary is missing. Do not reinstall or upgrade a tool that is already present.

Required tools:

- `bun` — Bun runtime and package manager.
- `docker` plus `docker compose` — backing services from `modules/app/docker-compose.yml`.
- `gh` — GitHub CLI required by project shipping and GitHub issue workflows.
- `talos` — the project CLI used to install dependencies and start the app.

When a tool is missing, install it with the platform's official package or installer. Prefer Homebrew when it is already available on macOS:

```bash
brew install bun
brew install --cask docker
brew install gh
```

On Linux, install Docker Engine with its Compose plugin and install `gh` from the distribution's official GitHub CLI package. Install Bun through a configured system package manager when one provides it. If no trusted package source is configured, stop and direct the user to Bun's official installation documentation; never download a remote script and pipe it into a shell.

If `command -v talos` fails, stop and direct the user to the official [Talos installation guide](https://docs.talosjs.com/getting-started/create-app#step-1-install-the-cli). Do not fetch and execute an installer script at runtime. Continue only after the user installs Talos and `command -v talos` succeeds.

Restart or refresh the current shell so its updated `PATH` is active, then verify the installation with both `talos help` and `talos version`. The installer also creates the `oo` alias and shell completions. Do not run `talos upgrade` when the CLI is already installed; application startup must not upgrade working host tools. If an installation needs unavailable administrator access or interactive OS approval, report that exact requirement instead of pretending the prerequisite is ready.

## 2. Make Docker ready

Verify both `docker compose version` and `docker info`. If Docker Desktop is installed on macOS but its daemon is unavailable, launch it with `open -a Docker`, then poll `docker info` in short intervals for at most two minutes. On Linux, start the installed Docker service with the platform service manager when permitted. A timeout is a startup failure; include the last Docker error in the report.

## 3. Bootstrap the project

From the repository root:

1. Run `talos install` so workspace dependencies are present and security-audited. Do not bypass an audit failure with `--force` unless the user explicitly authorizes it.
2. For every `.env.template` found in a module, copy it to a sibling `.env` when that destination is missing.
3. For every `.env.template.yml` found in a module, copy it to a sibling `.env.yml` when that destination is missing.
4. Confirm `modules/app/.env.yml` exists. If it is still missing and `modules/app/.env.example.yml` exists, copy the example once.

Never overwrite an existing environment file. Report placeholder values that prevent startup without printing secrets or environment-file contents.

## 4. Start and observe

Run the requested form of the canonical command:

```bash
talos app:start
talos app:start --modules=app,spa
```

Keep the foreground process attached and read its output until the selected modules are listening or a concrete failure appears. Report the started modules and URLs printed by Talos. If startup fails, identify the failing prerequisite or module and show the relevant error; do not change application code unless the user also asked for a repair.

Tell the user that the application remains running and that `talos app:stop` stops the Docker services after the foreground process is ended.
