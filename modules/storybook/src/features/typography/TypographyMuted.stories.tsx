import { Muted } from "@module/design/components/typography";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Muted",
  group: "Typography",
  tags: [],
  component: Muted,
  usage: [
    "**Muted** renders a `p` in the muted-foreground color at the base text size — a full paragraph that should read as secondary to the primary content around it.",
    "",
    "**How to use it** — use it for a whole sentence or paragraph of de-emphasized text, as opposed to `Small`, which is for fine print, or plain color utilities applied ad hoc.",
    "",
    "**When to use it** — empty-state descriptions, helper text under a heading, secondary metadata paragraphs, and supporting copy that shouldn't compete with the primary text.",
    "",
    "**When not to use it** — do not use it for the primary content of a section (use `P`) or for short inline fine print (use `Small`) — `Muted` is specifically a de-emphasized paragraph.",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "Enter your email address to receive a verification code.",
    },
  ],
} satisfies Meta<typeof Muted>;
