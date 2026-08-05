---
name: storage-pull
description: Download a Cloudflare R2, Bunny or S3 bucket path into a local folder with `talos storage:pull` — resolving the provider credentials, listing the prefix, and optionally unpacking the zip archives that come down.
when_to_use: Use when the user wants to bring remote object storage down to disk — fetching uploaded assets or media to work on, restoring a release archive or backup, inspecting what is actually deployed in a bucket, or mirroring a prefix locally. This is the mirror of `storage-push`; use `storage-create` when the need is an in-app storage adapter rather than a one-off download.
model: sonnet
effort: medium
allowed-tools: Bash(talos storage:pull *), Bash(talos credentials:create *), Bash(ls *), Read, Grep, Glob
argument-hint: '[--provider=<cloudflare|bunny|s3>] [--from=<bucket/path>] [--destination=<folder>] [--unzip]'
---

# Storage Pull

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

> **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/`. Check both roots before assuming a path is missing.

Bring remote content down with one command:

```bash
talos storage:pull --provider=<cloudflare|bunny|s3> --from=<bucket path> --destination=<folder> [--unzip]
```

Every option it does not get is prompted for, so **always pass all four** — an agent has no terminal to answer with.

| Option | What it takes |
|---|---|
| `--provider` | `cloudflare` (alias `r2`), `bunny`, or `s3` |
| `--from` | the path inside the bucket to pull |
| `--destination` | a local folder, relative to the repo root (or `--cwd`); created if missing |
| `--unzip` | unpack each `.zip` that comes down instead of writing it as a file |
| `--silent` | no progress rows, no summary — for CI |

## 1. Check the credentials before pulling

The command reads `~/.talos/credentials/<provider>.yml`, the same profile `storage:push` uses. It stops with `No <provider> credentials found` when the file is absent, and names the missing field when the profile is incomplete.

```bash
talos credentials:create --provider=cloudflare  # accessKey, secretKey, endpoint, region
talos credentials:create --provider=bunny       # storageZone, accessKey, region
talos credentials:create --provider=s3          # accessKey, secretKey, bucket, region
```

Creating a profile prompts for secrets, so it is the user's job — **never invent credentials or pass secrets on the command line as an agent.** If the profile is missing, stop and tell the user which command to run.

## 2. Work out what `--from` points at

`--from` is the path *inside* the bucket; leading and trailing slashes are ignored. **Which bucket it reads depends on the provider** — the same rule `storage-push` follows:

| Provider | Bucket comes from | `--from` example |
|---|---|---|
| `s3` | the profile's `bucket` | `assets/2026` |
| `cloudflare` | **the first segment of `--from`** | `my-bucket/assets/2026` |
| `bunny` | the profile's `storageZone` | `assets/2026` |

A bare `--from=/` on `cloudflare` is rejected, because no bucket can be read from it.

The path may be a **prefix** (a folder: everything under it comes down, each object keeping its path relative to the prefix) or **one object's exact key** (only that object, written under `--destination` by its own name). The run lists the prefix first; when the listing is empty it falls back to fetching the path as a single key, so a typo'd prefix surfaces as a `404` on that key rather than as an empty success.

## 3. Decide about `--unzip`

- **Without it**, a `.zip` object is written to disk as a `.zip` file — right when the archive is the artefact (a release bundle to keep, a backup to store).
- **With it**, each archive is unpacked into a folder named after it and the `.zip` itself is not kept: `releases/dist.zip` becomes `<destination>/dist/…`. This round-trips `storage:push --zip`, which named the archive after the folder it packed.

Objects that are not archives are unaffected either way, so `--unzip` is safe on a mixed prefix.

## 4. Pull, then read the result

```bash
talos storage:pull --provider=cloudflare --from=my-bucket/site --destination=var/site
talos storage:pull --provider=s3 --from=backups/2026-08 --destination=var/restore --unzip
```

A pull exits `0` only when every object landed. On failure it prints one line per object (`<key>: HTTP 404 <body>`) and the `N pulled, M failed` summary, then exits `1`.

| Status | What it means | Do |
|---|---|---|
| `403` | the profile's key cannot read that bucket | check the bucket in `--from`, then hand it back to the user |
| `404` | nothing is listed under the prefix and it is not an object key either | fix `--from`; list what is really there before retrying |
| `401` | the stored key is wrong or revoked | the user re-runs `talos credentials:create --provider=<provider>` |
| a network error | transient | re-run; a pull only writes files, so repeating it is safe |

**A pull overwrites local files at the same path and never deletes.** It is not a sync: a file that exists locally but no longer exists in the bucket stays where it is. Pull into a fresh folder when the question is "what is actually in the bucket".

Object keys arrive from the remote, so any key that would climb out of `--destination` is skipped with a warning rather than written, and the same guard drops `..` entries inside an archive. If a run reports skipped objects, say so — it means the bucket holds keys that do not map to safe local paths.

## Related

`storage-push` is the other direction, and shares the credentials, the bucket-path rule, and the archive naming. `talos-commands` lists every CLI command; `storage-create` generates the in-app `Storage` adapter for runtime reads and writes.
