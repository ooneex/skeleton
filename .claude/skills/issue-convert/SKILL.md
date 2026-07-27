---
name: issue-convert
description: Bundle a module or package's local issue YAML files into a single issues.json with talos issue:convert, inferring the destination modules/packages from the user's request. Reads modules/<module>/issues/*.yml (or the packages/ equivalent) and writes src/shared/issues.json for spa|storybook|swagger|admin modules, otherwise src/issues.json.
when_to_use: Use when the user wants to compile or export a module's YAML issues into a single issues.json for the app to consume. Triggers on requests like "convert the user module issues", "bundle issues.json for spa and admin", or "regenerate issues.json".
model: sonnet
effort: low
argument-hint: [module ...]
---

# Issue Convert

> **Run autonomously — never ask the user questions.** On any choice, pick the recommended option and proceed.

**Resolve** the destination modules/packages from the user's request, then **convert** each one's `issues/*.yml` files into a single `issues.json` with `talos issue:convert`. The command only reads and bundles the existing YAML — it never edits, plans, or publishes issues.

**Rules throughout:**
- **Module location:** `<module>` = `modules/<module>/` or `packages/<module>/`. The command checks `modules/` first, then `packages/`.
- **Run every command from the monorepo root.**
- **Output location depends on the module `type`** (read from `<module>/<module>.yml`):
  - `spa`, `storybook`, `swagger`, `admin` → `<module>/src/shared/issues.json`
  - everything else → `<module>/src/issues.json`
- **The result is a JSON array** of the parsed YAML issue objects, sorted by file name for deterministic output. Missing directories are created as needed.

## 1. Resolve the destinations

Infer the target modules/packages from whatever the user provides — no flags required:

- **Explicit names** — one or more module/package names (repeated, comma-separated, or listed), e.g. "convert `user` and `product`".
- **Free-form reference** — resolve to the module the user names; if none is recognizable, glob `modules/*/issues/` (and the `packages/` equivalent) to find the folder they describe.
- **No destination named** — omit `--destination` entirely; the command then converts **every** module/package that owns an `issues/` directory.

Collect the names into a single de-duplicated list.

## 2. Validate before converting

`issue:convert` **silently skips** any YAML it cannot parse, so a broken file disappears from `issues.json` without failing the run. Validate each destination first, from the monorepo root:

```bash
talos issue:check --module=<module1>,<module2>,...
```

Fix every error before converting — a skipped file is a missing issue in the bundle, and nothing downstream will tell you. Warnings do not block the conversion. If the check reports a module has no `issues/` directory, note it and drop that destination.

## 3. Convert the issues

Convert the whole batch in one call — `--destination` accepts a comma-separated list:

```bash
talos issue:convert [--destination=<module1>,<module2>,...]
```

For each destination the command:
- Locates the folder under `modules/` (then `packages/`); reports an error if it exists in neither.
- Reads every `*.yml` file in `<module>/issues/`, parsing each into a JSON object (invalid or unreadable files are skipped with a warning).
- Reads the module `type` from `<module>/<module>.yml` (defaults to `module` when absent) to choose the output path.
- Writes the bundled array to `src/shared/issues.json` (`spa`/`storybook`/`swagger`/`admin`) or `src/issues.json` (all other types).

The command reports `<path> created successfully (<n> issues)` per destination, warns when a destination has no `issues/` directory, and exits non-zero if any destination fails (not found, or a write error).

## 4. Confirm

Report a batch summary. Per destination: the module name, its resolved `type`, the written `issues.json` path, and the number of issues bundled. Then list any destinations that were skipped (no `issues/` directory) or failed (not found in `modules/` or `packages/`, or a write error), and, if the run stopped early, why. Flag any mismatch between the issue count in the bundle and the number of `*.yml` files in the module's `issues/` directory — that gap is a silently skipped file.
