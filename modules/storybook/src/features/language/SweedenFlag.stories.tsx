import { SweedenFlag } from "@module/design/components/language/flags/SweedenFlag";
import type { MetaType } from "../../shared/story";

export const meta = {
  title: "SweedenFlag",
  group: "Components",
  tags: [],
  component: SweedenFlag,
  usage: [
    "**SweedenFlag** renders the Swedish locale marker used by the language switcher. It follows the same SVG-only API as the rest of the flag set and is intended for small inline use.",
    "",
    "**How to use it** — pair it with `Svenska` in locale pickers or settings rows. Keep the flag decorative-adjacent: it should help recognition, while the readable language label carries the real meaning.",
    "",
    "**When to use it** — when showing Swedish as a supported UI language.",
    "",
    "**When not to use it** — do not treat it as sufficient labelling on its own, and avoid using it in contexts that are not actually about language selection.",
  ].join("\n"),
  props: [{ name: "className", control: "text", default: "size-12 rounded-sm shadow-sm" }],
} satisfies MetaType<typeof SweedenFlag>;
