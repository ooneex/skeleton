import { Markdown } from "@module/design/components/typography";
import type { MetaType } from "../../shared/story";

export const meta = {
  title: "Markdown",
  group: "Typography",
  tags: [],
  component: Markdown,
  usage: [
    "**Markdown** renders a short Markdown text — paragraphs, `#` headings, `-` lists, and inline **bold**, *italics*, `code` and links — in the muted copy style of a description.",
    "",
    "**How to use it** — pass the text as `content`. Blank lines separate paragraphs, and the lines of one paragraph are joined.",
    "",
    "**When to use it** — for prose written by people outside the component tree: route descriptions in the swagger, usage notes in the storybook.",
    "",
    "**When not to use it** — for long documents with tables, images or code blocks, which it does not render; and for copy the app owns, which reads better as typography components.",
  ].join("\n"),
  props: [
    {
      name: "content",
      control: "text",
      default:
        "## Limits\n\nOne call per second per user.\n\n- burst of **10**\n- reset at midnight, see `X-RateLimit-Reset`",
    },
  ],
} satisfies MetaType<typeof Markdown>;
