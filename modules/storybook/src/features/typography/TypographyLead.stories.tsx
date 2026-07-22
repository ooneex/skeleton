import { Lead } from "@module/design/components/typography";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Lead",
  group: "Typography",
  tags: [],
  component: Lead,
  usage: [
    "**Lead** is an introductory paragraph style — larger text (`text-xl`) in the muted foreground color, meant to sit directly under a heading and summarize what follows.",
    "",
    "**How to use it** — place it immediately after an `H1`/`H2` as the opening sentence or two of a page or article, before the regular `P` body copy begins.",
    "",
    "**When to use it** — article standfirsts, page introductions, and hero subtitles that summarize the content beneath a title.",
    "",
    "**When not to use it** — do not use it for regular body paragraphs throughout an article (use `P`) or for short emphasized fragments inline (use `Large`/`Small`) — `Lead` is specifically an opening summary.",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "A modal dialog that interrupts the user with important content and expects a response.",
    },
  ],
} satisfies Meta<typeof Lead>;
