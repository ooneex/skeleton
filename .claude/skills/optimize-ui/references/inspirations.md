# Inspirations library

**Always take inspiration from the inspirations library before designing or implementing any UI.** It is the project's own reference shelf of real, shipped product screens — never start a screen, layout, or component from a blank page or from a generic mental template while it sits there unread.

## Where it lives

```
modules/<design>/src/inspirations/<category>/<slug>.yml    # the description
modules/<design>/src/inspirations/<category>/<slug>.webp   # the screenshot (a few are .gif)
```

`<design>` is the design module — `modules/design/` in this project, or the module named by the `design:` field of a `spa`/`admin`/`storybook` module's `<module>.yml`. It resolves under `modules/` **or** `packages/`. ~820 inspirations across 49 category folders:

`article`, `calendar`, `card`, `chart`, `chat`, `comments`, `crm`, `dark-mode`, `dashboard`, `detail-page`, `e-commerce`, `editor`, `education`, `event`, `feed`, `file-manager`, `filter`, `finance`, `form`, `healthcare`, `inbox`, `interaction`, `invoice`, `kanban`, `knowledge-base`, `landing-page`, `list`, `map`, `media-player`, `menu`, `mobile`, `modal`, `navigation`, `note`, `notification`, `onboarding`, `pagination`, `profile`, `project-management`, `settings`, `sidebar`, `table`, `tabs`, `task`, `timeline`, `toolbar`, `upload`, `user`, `video`.

The same screen is filed under every category it illustrates, so a dashboard with tabs and a sidebar appears in `dashboard/`, `tabs/`, and `sidebar/`.

These are **reference assets only** — never imported by application code, never shipped in a bundle, and never edited by a UI task.

## What one looks like

```yaml
title: "Admin Home With Setup Cards And Learning Links"
description: "An administration home shown as an overlay: a Close action, a Company/Personal segmented toggle and a long admin nav, then two setup cards for managing inboxes and creating rules each pairing an icon, an explanation, a primary action and Review all, a Recently invited teammates card headed by an amber inactivity warning…"
tags: ["settings", "admin", "onboarding", "card", "list", "education", "warning", "sidebar"]
usage: "use when an admin area should teach as well as configure — setup cards naming the next action, a warning that turns idle teammates into a message, and grouped how-to links under plain-language goals."
```

- `title` — what the screen is.
- `description` — a dense, literal walkthrough of the layout, its regions, and its states.
- `tags` — the patterns and domains it covers; the main search key.
- `usage` — the situation this layout is the right answer to. Match this against the task before anything else.

## How to use it (mandatory, in order)

1. **Pick the categories** the work touches (a data screen → `table` + `filter` + `dashboard`; a settings page → `settings` + `form`; an app shell → `sidebar` + `navigation`).
2. **Search the YAML, not the images** — text is cheap, screenshots are not:

   ```bash
   ls modules/<design>/src/inspirations
   ls modules/<design>/src/inspirations/table
   rg -l "invoice" modules/<design>/src/inspirations --glob '*.yml'
   rg -A2 "^usage:" modules/<design>/src/inspirations/form --glob '*.yml' | head -60
   ```

3. **Shortlist 2–4** whose `usage` fits the task, and read their full `.yml`.
4. **Open the matching image** with the Read tool for the shortlisted ones only — that is where density, rhythm, alignment, and hierarchy actually live:

   ```
   Read modules/<design>/src/inspirations/table/<slug>.webp
   ```

5. **Design against them, then implement.** State briefly (in the PR/issue/report, or inline in your plan) which inspirations you drew from and what you took.

## What to take — and what not to

**Take:** the information hierarchy and reading order; how a region is split (filters vs. content vs. detail); content density and grouping; which controls sit where and what their labels say; the states that are anticipated (empty, loading, warning, over-limit, permission); how the primary action is made obvious; the small affordances that make a screen feel finished (counts next to labels, inline status, a summary row, a helper line under a field).

**Never take:** the inspiration's palette, fonts, radii, shadows, or spacing values as literal numbers — every visual value must resolve to this project's design tokens and components. Never copy a screenshot pixel-for-pixel, never reproduce its brand marks or logos, and never ship its dummy copy, names, or numbers as real content. Never introduce a primitive that only exists because the screenshot had it; if the design system lacks it, add it in the system's own style.

An inspiration answers *"what should this screen do and how should it be organized"*. The design system answers *"what it looks like"*. Keeping those two separate is the point — the result must look like this product, not like the screenshot.

## Self-check

- Did I look at inspirations **before** writing markup, not after?
- Do my chosen ones actually match the task's `usage`, or did I grab the first hit?
- Did I carry over structure and state coverage rather than colors and pixel values?
- Does every visual value in the result trace back to a design token?
- Would the result still look like this product with the inspiration removed?
