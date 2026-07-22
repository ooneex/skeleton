import { Badge } from "@module/design/components/badge";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Badge",
  group: "Components",
  tags: [],
  component: Badge,
  usage: [
    "**Badge** is a small, pill-shaped label that annotates another element with a short piece of status, count, or category information. It renders as an inline `span` (via `render`, it can become any element — an anchor for a clickable tag, a `button` for a removable chip), sizes its content tightly, and colors itself through the `variant` scale. It also reserves inner padding for a leading or trailing icon when you drop an `svg` inside it.",
    "",
    "**How to use it** — keep the text to one or two words (`New`, `Beta`, `3`, `Draft`). Choose a `variant` that matches the meaning of the status, not just the color you want, so the palette stays semantic across the app. Pick a `size` that matches the surrounding type scale. To attach an icon, place an `svg` as the first or last child — the badge automatically tightens the padding on that side.",
    "",
    "**When to use it** — to flag the state of an item (`Active`, `Pending`, `Archived`), to show an unread or quantity count, to tag a category or label, or to mark something new or experimental. It works inline beside a heading, in table cells, on list rows, and layered onto avatars or cards.",
    "",
    "**When not to use it** — do not use a badge for an interactive action the user is expected to trigger repeatedly (use a `Button`), for long-form text (it truncates and looks broken), or as a decorative accent with no informational value. If you need a dismissible selection token, build a chip on top of the badge rather than overloading the plain label.",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "Badge",
    },
    {
      name: "variant",
      control: "select",
      options: [
        {
          name: "default",
          usage:
            "The neutral, low-emphasis label. Use for generic tags and categories that carry no status weight — the safe choice when no other variant fits.",
        },
        {
          name: "secondary",
          usage:
            "Muted brand accent. Use for secondary tags that should read as related to the product without competing with primary content.",
        },
        {
          name: "destructive",
          usage:
            "Strong error/removal emphasis. Use for failed, blocked, or rejected states and for counts that signal a problem the user must address.",
        },
        {
          name: "outline",
          usage:
            "High-contrast bordered label with no fill. Use on busy or colored surfaces where a filled badge would clash but you still need definition.",
        },
        {
          name: "ghost",
          usage:
            "Lowest-emphasis muted label. Use for incidental metadata (system tags, internal flags) that should recede until looked for.",
        },
        {
          name: "link",
          usage:
            "Underlined, link-styled label. Use when the badge is itself navigable — render it as an anchor tag that points somewhere.",
        },
        {
          name: "success",
          usage:
            "Positive/complete status. Use for `Active`, `Paid`, `Approved`, `Online` — anything confirming a good outcome.",
        },
        {
          name: "danger",
          usage:
            "Critical failure status, stronger and more alarming than `destructive`'s tag use. Use for `Failed`, `Expired`, `Overdue`.",
        },
        {
          name: "warning",
          usage:
            "Caution / needs-attention status. Use for `Pending`, `Draft`, `Low stock` — states that are not errors but need the user's eye.",
        },
        {
          name: "info",
          usage:
            "Neutral-informational status. Use for `New`, `Beta`, `Info` — announcements and non-urgent context that should still stand out.",
        },
        {
          name: "neutral",
          usage:
            "Plain grey status chip. Use for inactive or default states (`Archived`, `Unassigned`) that should look deliberately quiet.",
        },
      ],
      default: "default",
    },
    {
      name: "size",
      control: "select",
      options: [
        {
          name: "xs",
          usage: "Smallest. Use inline beside body text, in dense table cells, and layered onto avatars or list rows.",
        },
        {
          name: "sm",
          usage: "Compact. Use beside small headings and in toolbars where the badge sits next to controls.",
        },
        {
          name: "md",
          usage: "Standard. Use in cards and section headers where the badge is a first-class part of the layout.",
        },
        {
          name: "lg",
          usage: "Prominent. Use for a lead status on a detail page or a hero card where the badge needs presence.",
        },
      ],
      default: "xs",
    },
  ],
} satisfies Meta<typeof Badge>;
