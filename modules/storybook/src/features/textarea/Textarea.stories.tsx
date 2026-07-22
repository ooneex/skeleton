import { Textarea } from "@module/design/components/textarea";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Textarea",
  group: "Components",
  tags: [],
  component: Textarea,
  usage: [
    "**What** — `Textarea` is the design system's multi-line text field. It renders a bordered box with muted placeholder text, a destructive invalid ring when `aria-invalid` is set, native textarea semantics, and a comfortable minimum height for notes, descriptions, and messages.",
    "",
    "**How to use it** — use it when the user needs several lines of plain text, give it a placeholder that demonstrates the expected shape of the answer, and set `rows` to the resting height you want before the field grows with content. Pair it with `Field.Label`, `Field.Description`, and `Field.Error` so the purpose, guidance, and validation all stay attached to the same control.",
    "",
    "**When to use it** — for comments, internal notes, bios, support replies, long descriptions, and any other free-form text that cannot fit comfortably in a single-line input.",
    "",
    "**When not to use it** — do not use it for a short single-line value such as a name or email (use `Input`), for a fixed choice from known options (use select, radio, or combobox controls), or for rich formatted authoring where you need headings, links, or embedded media.",
  ].join("\n"),
  props: [
    {
      name: "defaultValue",
      default:
        "Hi team,\n\nThe launch copy is ready for review. Please check the final tone and confirm the CTA before 4pm.",
    },
    {
      name: "placeholder",
      control: "text",
      default: "Write a longer message…",
    },
    {
      name: "rows",
      control: "number",
      default: 5,
    },
    {
      name: "disabled",
      control: "boolean",
      default: false,
    },
    {
      name: "readOnly",
      control: "boolean",
      default: false,
    },
    {
      name: "aria-invalid",
      control: "boolean",
      default: false,
    },
  ],
} satisfies Meta<typeof Textarea>;
