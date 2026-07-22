import { Large } from "@module/design/components/typography";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Large",
  group: "Typography",
  tags: [],
  component: Large,
  usage: [
    "**Large** renders a `div` at a large, semibold weight — text with more visual presence than a paragraph but without the structural meaning of a heading.",
    "",
    "**How to use it** — use it for a short line that needs emphasis without becoming part of the document's heading outline; it's not a `heading` element so it's invisible to heading-based navigation.",
    "",
    "**When to use it** — dialog titles, card headers, callout labels, or any prominent short line where you specifically don't want it counted as a semantic heading.",
    "",
    "**When not to use it** — for content that is genuinely a section title in the document outline, use `H1`–`H6` instead so headings-based navigation and SEO structure stay correct.",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "Are you absolutely sure?",
    },
  ],
} satisfies Meta<typeof Large>;
