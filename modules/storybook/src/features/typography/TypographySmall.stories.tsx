import { Small } from "@module/design/components/typography";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Small",
  group: "Typography",
  tags: [],
  component: Small,
  usage: [
    "**Small** renders a native `small` element at a reduced size and normal weight, for de-emphasized fine print alongside regular content.",
    "",
    "**How to use it** — place it beside or beneath the content it annotates (a form field, a price, a timestamp) rather than as a standalone paragraph.",
    "",
    "**When to use it** — form field captions, fine-print disclaimers, timestamps, byline metadata, and legal or terms text that should read as secondary.",
    "",
    "**When not to use it** — do not use it for a de-emphasized full paragraph (use `Muted` on a `P` instead) or to shrink text purely for visual density with no fine-print meaning.",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "Email address",
    },
  ],
} satisfies Meta<typeof Small>;
