import { RomaniaFlag } from "@module/design/components/language/flags/RomaniaFlag";
import type { MetaType } from "../../shared/story";

export const meta = {
  title: "RomaniaFlag",
  group: "Components",
  tags: [],
  component: RomaniaFlag,
  usage: [
    "**RomaniaFlag** renders the Romanian locale marker used by the language switcher. It is a lightweight SVG and follows the same sizing and token-colour rules as the rest of the flag set.",
    "",
    "**How to use it** — pair it with the `Română` label wherever the product exposes its supported UI languages. Keep the flag small and adjacent to the text so it acts as a recognition aid, not the only label.",
    "",
    "**When to use it** — when denoting Romanian in language controls or locale summaries.",
    "",
    "**When not to use it** — avoid using it as the only cue for accessibility or in unrelated country-selection features unless that is truly the desired meaning.",
  ].join("\n"),
  props: [{ name: "className", control: "text", default: "size-12 rounded-sm shadow-sm" }],
} satisfies MetaType<typeof RomaniaFlag>;
