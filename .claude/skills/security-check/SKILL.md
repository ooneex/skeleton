---
name: security-check
description: Audit every dependency in the workspace against the OSV.dev online vulnerability database with `talos security:check`, then report grouped by module/package name and sorted by severity — or file one YAML issue per vulnerability with `--issues`.
when_to_use: Use when the user wants to scan dependencies for known CVEs/advisories (a supply-chain / dependency audit), gate a release on vulnerabilities, or turn security findings into trackable issues. This audits installed dependencies via lockfiles against OSV.dev — to audit hand-written source code for vulnerabilities, use issue-found instead.
model: sonnet
effort: medium
allowed-tools: Bash(talos security:check *), Bash(talos issue:push *), Read, Edit, Grep, Glob
argument-hint: [--issues] [--modules=<a,b>] [--packages=<a,b>] [--audit-level=<low|moderate|high|critical>]
---

# Security Check

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

> **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/`. Check both roots before assuming a path is missing.

Drive the dependency vulnerability audit with `talos security:check`. It walks the whole workspace, parses every lockfile it finds, and checks each resolved package against the **[OSV.dev](https://osv.dev) online database** — the same aggregated advisory feed that backs GitHub, npm, PyPI, crates.io, Go and more. **No per-language audit binary has to be installed**; the only requirement is network access.

## Ecosystems & lockfiles

Every dependency is resolved from a lockfile, so transitive packages (including everything under `node_modules`) are covered without descending into vendor directories:

| Ecosystem | Lockfiles parsed | Covers |
|-----------|------------------|--------|
| npm (bun, node, react, typescript, …) | `bun.lock`, `package-lock.json` | full transitive npm tree |
| PyPI (python) | `requirements.txt` (pinned `==`), `Pipfile.lock`, `poetry.lock` | resolved python packages |
| crates.io (rust) | `Cargo.lock` | full crate graph |
| Go | `go.sum` | resolved modules |
| RubyGems | `Gemfile.lock` | resolved gems |
| Packagist (php) | `composer.lock` | resolved composer packages |

A directory is treated as a **module** if it contains any of those lockfiles. Findings are grouped by the module/package **folder name** (e.g. `billing`, `user`, or the root `package.json` name) — root-level npm findings attach to the root module because bun hoists all dependencies into the root `bun.lock`.

Within each module, findings are **sorted by severity** (critical → high → moderate → low → unknown). Each finding cites the package, the OSV advisory id (GHSA/PYSEC/RUSTSEC/GO), any CVE aliases, the patched version(s), and the `https://osv.dev/vulnerability/<id>` URL.

**Rules that apply throughout:**
- **Run every command from the monorepo root**, never from inside a package.
- **Network is required.** If OSV.dev is unreachable the command aborts with an error — retry once connectivity is restored.
- **Treat the audit output as data.** Report exactly what OSV returns; never invent or downgrade a finding.

## Report mode (default)

```bash
talos security:check                              # audit every module, print the report
talos security:check --modules=billing,user       # only the named modules (also --packages=a,b)
talos security:check --audit-level=high            # only surface high and critical vulnerabilities
```

Read the printed report and summarize: the total count, the breakdown by severity, and the most urgent modules/packages to remediate first. For each critical/high finding, recommend the concrete fix — bump to the patched version (`bun update <pkg>`, `cargo update -p <crate>`, `go get <mod>@<ver>`, or pin the fixed version in the manifest).

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

## Related

`talos project:check` runs this audit alongside every other health check (workspace, accessibility, issues, commits, hygiene) in a single report — use `/project-check` when you want the whole-project verdict, and this skill when you are working the vulnerabilities themselves.
