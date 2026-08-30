---
name: storage-push
description: Upload a local file or folder to a Cloudflare R2, Bunny or S3 bucket with `talos storage:push` — resolving the provider credentials, the destination path, and whether the content ships as individual objects or one zip archive.
---

# Storage Push

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

> **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/`. Check both roots before assuming a path is missing.

Push local content to object storage with one command:

```bash
talos storage:push --provider=<cloudflare|bunny|s3> --from=<path> --destination=<bucket path> [--zip]
```

Every option it does not get is prompted for, so **always pass all four** — an agent has no terminal to answer with.

| Option | What it takes |
|---|---|
| `--provider` | `cloudflare` (alias `r2`), `bunny`, or `s3` |
| `--from` | a local file or folder, relative to the repo root (or `--cwd`) |
| `--destination` | the path inside the bucket the content lands under |
| `--zip` | send one archive instead of the individual files |
| `--silent` | no progress rows, no summary — for CI |

## 1. Check the credentials before pushing

The command reads `~/.talos/credentials/<provider>.yml`, the profile `talos credentials:create` writes. It stops with `No <provider> credentials found` when the file is absent, and names the missing field when the profile is incomplete.

```bash
talos credentials:create --provider=cloudflare  # accessKey, secretKey, endpoint, region
talos credentials:create --provider=bunny       # storageZone, accessKey, region
talos credentials:create --provider=s3          # accessKey, secretKey, bucket, region
```

Creating a profile prompts for secrets, so it is the user's job — **never invent credentials or pass secrets on the command line as an agent.** If the profile is missing, stop and tell the user which command to run.

## 2. Work out the destination

`--destination` is the path *inside* the bucket; leading and trailing slashes are ignored. **Which bucket it targets depends on the provider:**

| Provider | Bucket comes from | `--destination` example | Object URL path |
|---|---|---|---|
| `s3` | the profile's `bucket` | `assets/2026` | `https://<bucket>.s3.<region>.amazonaws.com/assets/2026/…` |
| `cloudflare` | **the first segment of `--destination`** | `my-bucket/assets/2026` | `<endpoint>/my-bucket/assets/2026/…` |
| `bunny` | the profile's `storageZone` | `assets/2026` | `https://<region>.storage.bunnycdn.com/<zone>/assets/2026/…` |

The R2 profile stores only the account endpoint, which is why the bucket rides on the destination there. A bare `--destination=/` on `cloudflare` is rejected with a message saying so.

R2 objects are signed against region `auto` whatever jurisdiction the profile records, and S3 buckets are addressed virtual-hosted — neither is something to configure.

## 3. Choose the shape: files or archive

- **Folder, no `--zip`** — every file under it is uploaded, keyed by its path relative to the folder. `--from=modules/web/dist --destination=site` puts `dist/assets/app.css` at `site/assets/app.css`. This is what a CDN bucket wants: the objects stay individually addressable and cacheable.
- **Single file** — lands at `<destination>/<file name>`.
- **`--zip`** — the whole source is packed into one archive named after it (`dist/` → `dist.zip`, `index.html` → `index.html.zip`) and pushed as a single object. Use it for release bundles and backups, never for a site meant to be served: nothing behind a CDN will unpack it.

The archive is built in memory, so prefer the plain form for large trees.

Each object is sent with a `Content-Type` inferred from its extension (`.css` → `text/css`, `.zip` → `application/zip`, unknown → `application/octet-stream`), and objects upload in parallel with a progress row per run.

## 4. Push, then read the result

```bash
talos storage:push --provider=cloudflare --from=modules/web/dist --destination=web-assets/site
talos storage:push --provider=s3 --from=var/backup --destination=backups/2026-08 --zip
```

Build before pushing anything generated — `talos build --modules=<module> --logs` — so the bucket does not get a stale `dist/`.

A push exits `0` only when every object landed. On failure it prints one line per object (`<key>: HTTP 403 <body>`) and the `N pushed, M failed` summary, then exits `1`. Read the status before retrying:

| Status | What it means | Do |
|---|---|---|
| `403` | the profile's key lacks write access to that bucket, or the endpoint/bucket pair is wrong | check the destination bucket name, then hand it back to the user — a re-run will not fix it |
| `404` | the bucket does not exist at that endpoint | fix `--destination` (R2) or the profile's `bucket`/`storageZone` |
| `401` | the stored key is wrong or revoked | the user re-runs `talos credentials:create --provider=<provider>` |
| a network error | transient | re-run; the push is idempotent, objects are overwritten in place |

**A push overwrites objects at the same key and never deletes.** Removing a file locally does not remove it from the bucket, so a re-pushed site keeps its orphans — say so rather than silently leaving stale objects behind.

## Related

`storage-create` generates an in-app `Storage` adapter for reading and writing objects at runtime — a different job from this one-off upload. `talos-commands` lists every CLI command, and `credentials:create` (see the Credentials section there) is what fills the profiles this skill reads.
