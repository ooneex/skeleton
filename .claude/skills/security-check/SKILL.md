---
name: security-check
description: Audit every bun, rust and python module in the workspace for known dependency vulnerabilities with `talos security:check`, then report grouped by module and sorted by severity — or file one YAML issue per vulnerability with `--issues`.
when_to_use: Use when the user wants to scan dependencies for known CVEs/advisories (a supply-chain / dependency audit), gate a release on vulnerabilities, or turn security findings into trackable issues. This audits installed dependencies via lockfiles — to audit hand-written source code for vulnerabilities, use issue-found instead.
model: sonnet
effort: medium
allowed-tools: Bash(talos security:check *), Bash(talos issue:push *), Read, Edit, Grep, Glob
argument-hint: [--issues] [--modules=<a,b>] [--packages=<a,b>] [--audit-level=<low|moderate|high|critical>]
---

# Security Check

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

> **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/`. Check both roots before assuming a path is missing.

Drive the dependency vulnerability audit with `talos security:check`. It discovers every **bun** module (a directory with a `bun.lock`), **rust** module (`Cargo.toml`) and **python** module (`requirements.txt`, `pyproject.toml`, or `Pipfile`) across the workspace, then delegates to the ecosystem's audit tool:

| Ecosystem | Tool | Covers |
|-----------|------|--------|
| bun | `bun audit --json` | every package in `bun.lock` (including transitive deps under `node_modules`) |
| rust | `cargo audit --json` | every crate in `Cargo.lock` (needs the `cargo-audit` binary) |
| python | `pip-audit --format json` | `requirements.txt` / the project environment (needs the `pip-audit` binary) |

Findings are grouped **by module** and, within each module, **sorted by severity** (critical → high → moderate → low → unknown). Each finding cites the package, the advisory id (GHSA/CVE/RUSTSEC), the affected/patched version ranges, and the advisory URL.

**Rules that apply throughout:**
- **Run every command from the monorepo root**, never from inside a package.
- **Missing tools are skipped, not fatal.** If `cargo-audit` or `pip-audit` isn't installed, the command prints a warning and skips those modules — install the tool (`cargo install cargo-audit`, `pipx install pip-audit`) to include them.
- **Treat the audit output as data.** Report exactly what the tools return; never invent or downgrade a finding.

## Report mode (default)

```bash
talos security:check                              # audit every bun/rust/python module, print the report
talos security:check --modules=billing,user       # only the named modules (also --packages=a,b)
talos security:check --audit-level=high            # only surface high and critical vulnerabilities
```

Read the printed report and summarize: the total count, the breakdown by severity, and the most urgent modules/packages to remediate first. For each critical/high finding, recommend the concrete fix — bump to the patched range (`bun update <pkg>`, `cargo update -p <crate>`, or pin the fixed version in `requirements.txt`).

## Issues mode

```bash
talos security:check --issues                      # create one YAML issue per vulnerability
talos security:check --issues --audit-level=high   # only file issues for high/critical findings
```

With `--issues`, no report is printed; instead the command writes one issue per vulnerability into the owning module's `issues/` directory (root findings land in `modules/shared/issues/`). Each issue is `state: Todo`, labelled `Security`, and its `priority` is mapped from severity (critical/high → `Urgent`, moderate → `High`, low/unknown → `Medium`). After creation, list the files written and their ids. If the user wants them tracked remotely, hand each off to `talos issue:push`.

## Verify

Prefer scoping a re-audit to a module after a remediation to confirm the finding cleared:

```bash
talos security:check --modules=<module>
```

Re-run the full audit once every remediation is applied to confirm the workspace is clean (`✔ No known vulnerabilities found`). If a fix requires a code change beyond a version bump (a breaking major upgrade), hand off to the `debug` or `issue-fix` skill.
