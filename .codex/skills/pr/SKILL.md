---
name: pr
description: Push the current branch and open or update a conventional GitHub pull request, including stacked-PR base handling.
---

# Create Pull Request

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

> **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/` (e.g. once extracted into a shared package). Check both roots before assuming a path is missing.

Open a pull request for the current branch. **Run every command from the root of the project.** Requires the GitHub CLI (`gh`) installed and authenticated (`gh auth status`).

## Workflow

1. **Current branch** — `git rev-parse --abbrev-ref HEAD`. If it is the repo's default branch, create a feature branch first and move the work to it.
2. **Base branch** — usually `main` (`git remote show origin` to confirm the default). If the branch belongs to a [stack](#stacked-branches), the base is the branch **below** it instead.
3. **Sync** — ensure `git status --porcelain` is clean. Commit any uncommitted changes yourself using the `commit` skill's module-grouping, type, and subject rules (`commit` is user-invoked only — do not invoke it as a tool).
4. **Push** — push using **only** the `gh` cli (never `git push`/`git pull` or ssh/http), or `gh stack push` for a stack branch. Use `gh auth switch` to find the active account. Never force-push unless the user explicitly asks.
5. **Analyze** — review `git log <base>..<branch>` and `git diff <base>...<branch>` for scope.
6. **Open** — `gh pr create --base <base>` with a conventional title and structured body.
7. **Report** — print the PR URL returned by `gh`.

## Title

`type(scope): Subject` — same `type`/`scope` rules as the `commit` skill. Single module → that module's scope; spans several → dominant scope or `common`. Subject: sentence-case, imperative, no trailing period, max 100 chars. Single-commit branch → reuse that commit's subject.

## Body

Factual to the diff — describe only what it changes; never invent testing that was not performed.

```markdown
## Summary

- What this PR does and why.

## Changes

- Notable changes grouped by module/package.

## Testing

- Commands run (e.g. `talos check --strict --logs`, `talos test --modules=<module>`) and their result.
```

Example:

```bash
gh pr create \
  --base main \
  --head feature/user-auth \
  --title "feat(user): Add authentication service" \
  --body "$(cat <<'EOF'
## Summary

- Add `AuthService` with login/logout and session handling.

## Changes

- `modules/user/` — new `AuthService`, wired into the user module.
- `modules/user/tests/` — coverage for the auth flow.

## Testing

- `talos check --strict --logs` — passing
- `talos test --modules=user` — passing
EOF
)"
```

## Stacked branches

When the branch builds on another unmerged branch rather than on main, open its PR as a layer of a [stacked PR](https://docs.github.com/en/pull-requests/get-started/about-stacked-prs) chain so reviewers see only that layer's diff and each layer can merge on its own.

Detect it with `gh stack view --short` (needs `gh extension install github/gh-stack`; if the extension or the feature is unavailable, target main and note the dependency in the body). The branch is a layer when `gh stack view` lists it, or when its commits sit on top of another open PR's head.

- **Base** — the branch directly below it in the stack; main for the bottom layer.
- **Scope** — `git log <base>..<branch>` / `git diff <base>...<branch>` describes only this layer. Open the body with its position and the PR it builds on, e.g. `Layer 2 of 3 — stacked on #123.`
- **Link** — once two or more layers have PRs, `gh stack sync` links them into a stack on GitHub. Without local tracking, `gh stack link <bottom-branch> … <top-branch>` does the same in one shot, pushing branches and fixing any mis-targeted base.
- **Rebasing** — `gh stack rebase` / `gh stack sync` only. Never hand-rebase or force-push a stack.

## Special Cases

- **Draft work** — add `--draft` if the branch is clearly incomplete.
- **Existing PR** — if `gh pr view` shows one, update with `gh pr edit` instead of duplicating.
- **No remote / no `gh`** — report that the PR cannot be created and stop; do not attempt an alternative.

## Trailers & Conventions

- Do not add any `Co-Authored-By` or tool-attribution trailer to the title or body.
- Apply all coding conventions from the `optimize` skill.
