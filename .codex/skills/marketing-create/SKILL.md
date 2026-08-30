---
name: marketing-create
description: Create one or more marketing post resources inside a module — infer the media the request calls for, render it with Remotion, then scaffold the post with talos marketing:create and write the copy, hashtags, and platform list into modules/<module>/marketing/<ID>/<ID>.yml with its images/videos filed under the a-f0-9 naming rule.
when_to_use: Use when the user wants a social/marketing post for a module — drafting a launch announcement, a feature post, a campaign across several platforms, or producing/attaching the images and videos that go with one. Triggers on "create a marketing post", "announce this feature on LinkedIn and X", "make a reel for <module>", or "add a marketing resource for <module>".
model: opus
effort: medium
allowed-tools: Bash(talos marketing:create *), Bash(talos check *), Bash(bunx remotion *), Bash(bun add *), Bash(bun -e *), Read, Edit, Write, Grep, Glob
argument-hint: '[description] [--module=<module>] [--platform=<platform>]'
---

# Marketing Create

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** On any choice, pick the recommended option and proceed.

Create a marketing post resource per module. Each post is a self-contained folder holding its copy and its media, and the media is **generated with Remotion** — see `references/remotion-studio.md` for the studio and the render commands.

- **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/` (once extracted into a shared package). Check both roots; every `modules/<module>/...` path applies equally under `packages/<module>/...`.
- **Run every command from the root of the project.**
- **Never invent product facts.** Copy and media are built from the user's description, the module's README, and its source — nothing else.

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
| `--content` | required | The post body (step 2). |
| `--hashtag` | none | Repeatable. 2–5 tags drawn from the product vocabulary. |
| `--platform` | `X` | Repeatable. Every platform the user named; default to `X` when unspecified. |
| `--image` / `--video` | none | Repeatable path to the `.png` / `.mp4` rendered in step 4 — copied into the post and renamed automatically. |
| `--state` | `Todo` | Leave at the default. |

**One post per platform voice.** If the platforms want materially different copy (a 280-character X post vs a long-form Medium article) or a different media format (a landscape card vs a vertical reel), create one post per voice rather than one post listing every platform.

### 2. Write the copy

Read the module's `README.md` and the source behind the change, then write `content` for the target platforms:

- **Lead with the change**, not the preamble — the first line has to stand alone.
- **Concrete over abstract**: what a user can now do, in their words.
- **Platform length**: X ≤ 280 characters including hashtags; Threads/Instagram short with the payoff up front; LinkedIn 2–4 short paragraphs; Medium long-form with headings; Reddit plain and non-promotional.
- **No emoji walls, no hype adjectives, no "we're excited to announce".** Apply the `humanize` skill to the draft before saving it.
- Hashtags go in the `hashtags` list, not inside `content` — the publisher appends them per platform.

The copy comes first because the media renders **from** it: the still's title is the post's claim, the reel's lines are the post's beats.

### 3. Decide the media

Infer what to produce from the request — do not ask, and do not produce media nobody asked for and nothing calls for.

**The user said so explicitly** — obey it. "with a video", "a reel", "an animation", "a demo" → one video. "an image", "a card", "a banner", "a visual", "a thumbnail" → one image. "with visuals", "the whole thing", "images and video" → one of each. "text only", "no media", "just the copy" → none; skip to step 5.

**The user did not say** — decide from the platform and the change:

| Signal | Media |
|--------|-------|
| Primary platform is TikTok or Instagram, or the user said "reel"/"story" | one video (media-first platforms; a text-only post there is dead on arrival) |
| The change is motion-shaped — a flow, a sequence of steps, a before/after, something that *happens* | one video |
| The change is a fact, a number, a name, a single new capability | one image |
| Primary platform is Medium or Reddit | one image (a header card); those platforms carry their own body text |
| Primary platform is Discord, Telegram, WhatsApp or Messenger | one image, or none if the copy is a one-liner |
| Anything else | one image |

**Count:** one image and at most one video per post. More than one of either means the campaign wants more than one post — split it (step 1).

Then pick the composition and props:

- **Format** — from the post's primary platform, per the table at the end of `references/remotion-studio.md` (`card-landscape` / `card-portrait` / `card-vertical`, `reel-landscape` / `reel-vertical`).
- **Still props** — `eyebrow` (the module or feature area, 1–2 words, may be empty), `title` (the post's claim, ≤ 60 characters so it survives a thumbnail), `subtitle` (one supporting line, ≤ 100 characters), `footnote` (the wordmark or domain), `accent` + `accentAlt` (two adjacent colours from the design module's tokens — never a complementary pair).
- **Reel props** — `title` (the hook scene), `lines` (**one scene each**, ≤ 40 characters, in order: what you do, then what happens), `cta` (the outro scene — the one thing to do next), `footnote`, `accent`, `accentAlt`, `durationInSeconds` — **20 or 45, nothing else**. 20s is the default and takes 4–6 beats; 45s is the long cut for a launch or a walkthrough and needs 8–12. The beats share 60% of the cut, so too few lines for the duration leaves each scene stranded on screen.

The compositions are designed assets, not slides — layered backdrop, blooms, grain, the project's own typeface, kinetic type. The reel is *cut* into scenes (hook → one per beat → outro) over a continuous backdrop; never let it degrade into one held frame that text stacks onto. `references/remotion-studio.md` §0.1 is the quality bar they are held to; read it before you change a component, and never downgrade a render to a flat background with centred text.

### 4. Render the media with Remotion

Read `references/remotion-studio.md` and follow it: bootstrap `var/remotion/` if it is missing, then render into `var/marketing/` (gitignored).

Write each composition's props to `var/marketing/<slug>-card.json` / `-reel.json` with the Write tool first — that creates the folder and keeps marketing copy (full of apostrophes and quotes) out of the shell. Then:

```bash
bunx remotion still var/remotion/index.ts <card-format> "var/marketing/<slug>-card.png" --props="var/marketing/<slug>-card.json" --public-dir="modules/design/src/fonts" --scale=2
```

```bash
bunx remotion render var/remotion/index.ts <reel-format> "var/marketing/<slug>-reel.mp4" --props="var/marketing/<slug>-reel.json" --public-dir="modules/design/src/fonts" --crf=18
```

All three flags are load-bearing. `--public-dir` is what lets the compositions load the project's own typeface from `modules/design/src/fonts/` — without it the render fails rather than falling back to a system face. `--scale=2` sends stills out at twice the composition size so the type survives the platform's recompression, and `--crf=18` replaces Remotion's default, which leaves visible blocking in the dark gradients these compositions are built on.

These run unchanged on macOS, Linux and Windows — one command per line, double quotes, no inline JSON. `references/remotion-studio.md` §0 has the full rule set and the per-OS requirements.

Open the rendered still and check it before you attach it: the title must not overflow or wrap mid-word, the contrast must hold, and nothing may be clipped at the edges. Fix the props (shorter title, shorter subtitle) and re-render rather than shipping a broken card. For a video, sample one frame per scene with `remotion still <reel-format> ... --frame=<n>` before paying for the full render — the hook, a couple of beats, and the outro. A beat whose line is too long only breaks in its own scene, and a full render is an expensive way to find that out.

Never render into `modules/<module>/marketing/` — the generator is what files and names media.

### 5. Scaffold the post

One line, double-quoted values, repeating `--hashtag`/`--platform` as needed:

```bash
talos marketing:create --module=<module> --title="<title>" --content="<content>" --hashtag="<tag>" --platform="<platform>" --image="var/marketing/<slug>-card.png" --video="var/marketing/<slug>-reel.mp4"
```

The command creates the post folder, its `images/` and `videos/` folders, writes the YAML, and copies each `--image`/`--video` in under a fresh 6-character `a-f0-9` name — **never name media by hand**. Rewrite `content` in the YAML afterwards if the generated body needs work.

### 6. Media on an existing post

- Images are `.png`, videos `.mp4` — the command rejects anything else.
- Render into `var/marketing/` exactly as in step 4, then copy the file into the post's `images/`/`videos/` under a fresh 6-character `a-f0-9` name and add that name to the matching list in the YAML.
- Copy it with Bun rather than `cp`/`copy`, so the step works on every OS — the media is binary, so the Write tool can't do it:

  ```bash
  bun -e "require('node:fs').copyFileSync('var/marketing/<slug>-card.png','modules/<module>/marketing/<ID>/images/<a-f0-9>.png')"
  ```

- Every name in `images`/`videos` must exist on disk, and every file on disk must be listed. Delete the `.gitkeep` from a media folder once it holds a real file.

### 7. Verify

```bash
talos check --strict --logs
```

Confirm the folder name, the file name and the `id` all match, that the YAML parses, and that every listed media file is on disk with a valid `a-f0-9` name.
