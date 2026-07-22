import { InlineCode } from "@module/design/components/typography";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "InlineCode",
  group: "Typography",
  tags: [],
  component: InlineCode,
  usage: [
    "**InlineCode** renders a short code token — a variable name, function, file path, or CLI flag — inside running prose. It wraps the native `code` element in a monospace font, semibold weight, and a subtle muted background with tight padding so it reads as code without breaking the text flow.",
    "",
    "**How to use it** — wrap only the code-like token itself, not the surrounding sentence (`Run `<InlineCode>npm install</InlineCode>` to set up the project`). Keep it short — a single identifier, path, or short command.",
    "",
    "**When to use it** — referencing a variable, function, prop, environment variable, file path, or short shell command inline within documentation or UI copy.",
    "",
    "**When not to use it** — for multi-line snippets or full code blocks, use a dedicated code-block/editor component instead — `InlineCode` has no wrapping or syntax highlighting and will overflow.",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "npm install",
    },
  ],
} satisfies Meta<typeof InlineCode>;
