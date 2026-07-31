---
name: marketing-create
description: Create one or more marketing post resources inside a module — scaffold each post with talos marketing:create, then write the copy, hashtags, and platform list into modules/<module>/marketing/<ID>/<ID>.yml and file its images/videos under the a-f0-9 naming rule.
when_to_use: Use when the user wants a social/marketing post for a module — drafting a launch announcement, a feature post, a campaign across several platforms, or attaching images/videos to an existing post. Triggers on "create a marketing post", "announce this feature on LinkedIn and X", or "add a marketing resource for <module>".
model: opus
effort: medium
allowed-tools: Bash(talos marketing:create *), Bash(talos check *), Read, Edit, Write, Grep, Glob
argument-hint: '[description] [--module=<module>] [--platform=<platform>]'
---

# Marketing Create

> **Run autonomously — do not ask the user questions.** On any choice, pick the recommended option and proceed.

Create a marketing post resource per module. Each post is a self-contained folder holding its copy and its media.

- **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/` (once extracted into a shared package). Check both roots; every `modules/<module>/...` path applies equally under `packages/<module>/...`.
- **Run every command from the monorepo root.**
- **Never invent product facts.** Copy is written from the user's description, the module's README, and its source — nothing else.

## Resource structure

```
modules/<module>/
  marketing/
    ABC-123456/            # post id — 3 letters (A-F) + 6 digits
      images/              # .png files, named with 6 a-f0-9 characters (e.g. a3f9c1.png)
      videos/              # .mp4 files, named with 6 a-f0-9 characters (e.g. 0b7e42.mp4)
      ABC-123456.yml       # the post itself
```

`ABC-123456.yml`:

```yaml
id: "ABC-123456"
module: "user"
title: "Passwordless sign-in is live"
content: |
  Signing in no longer needs a password — request a code, paste it, done.
hashtags:
  - "auth"
  - "passwordless"
images:
  - "a3f9c1.png"
videos:
  - "0b7e42.mp4"
platforms:
  - "X"
  - "LinkedIn"
state: "Todo"
```

| Field | Rule |
|-------|------|
| `id` | Set by the generator; matches the folder name and the file name. Never edit it. |
| `module` | The owning module — matches the directory the post lives in. |
| `title` | Short, concrete, no trailing period. |
| `content` | The post body, as a YAML literal block (`\|`). |
| `hashtags` | Bare tags, no leading `#`, lowercase, no spaces. |
| `images` / `videos` | File **names only** (not paths), each present in the sibling `images/`/`videos/` folder. |
| `platforms` | Any of `X`, `Instagram`, `Facebook`, `LinkedIn`, `TikTok`, `Threads`, `WhatsApp`, `Telegram`, `Messenger`, `Discord`, `Reddit`, `Medium`. `twitter` is accepted as an alias of `X`. |
| `state` | `Todo`, `In Review` or `Published` — new posts are always `Todo`. |

## Steps

### 1. Infer the options

| Option | Default | Derive |
|--------|---------|--------|
| `--module` | `shared` | Match the subject to a module under `modules/`. Verify it exists; otherwise use `shared` and say so. |
| `--title` | required | From the user's description — verb + noun, no hype. |
| `--content` | required | The post body (step 3). |
| `--hashtag` | none | Repeatable. 2–5 tags drawn from the product vocabulary. |
| `--platform` | `X` | Repeatable. Every platform the user named; default to `X` when unspecified. |
| `--image` / `--video` | none | Repeatable path to an existing `.png` / `.mp4` — copied into the post and renamed automatically. |
| `--state` | `Todo` | Leave at the default. |

**One post per platform voice.** If the platforms want materially different copy (a 280-character X post vs a long-form Medium article), create one post per voice rather than one post listing every platform.

### 2. Scaffold the post

```bash
talos marketing:create \
  --module=<module> --title="<title>" --content="<content>" \
  [--hashtag=<tag>]... [--platform=<platform>]... \
  [--image=<path>]... [--video=<path>]...
```

The command creates the post folder, its `images/` and `videos/` folders, and writes the YAML. Media passed with `--image`/`--video` is copied in and renamed to 6 `a-f0-9` characters — **never name media by hand**; re-run the command or copy the name it produced.

### 3. Write the copy

Read the module's `README.md` and the source behind the change, then write `content` for the target platforms:

- **Lead with the change**, not the preamble — the first line has to stand alone.
- **Concrete over abstract**: what a user can now do, in their words.
- **Platform length**: X ≤ 280 characters including hashtags; Threads/Instagram short with the payoff up front; LinkedIn 2–4 short paragraphs; Medium long-form with headings; Reddit plain and non-promotional.
- **No emoji walls, no hype adjectives, no "we're excited to announce".** Apply the `humanize` skill to the draft before saving it.
- Hashtags go in the `hashtags` list, not inside `content` — the publisher appends them per platform.

Rewrite `content` in the YAML if the generated body needs work.

### 4. Attach the media

- Images are `.png`, videos `.mp4` — the command rejects anything else.
- To add media to an existing post, copy the file into `images/`/`videos/` under a fresh 6-character `a-f0-9` name and add that name to the matching list in the YAML.
- Every name in `images`/`videos` must exist on disk, and every file on disk must be listed. Delete the `.gitkeep` from a media folder once it holds a real file.

### 5. Verify

```bash
talos check
```

Confirm the folder name, the file name and the `id` all match, and that the YAML parses.
