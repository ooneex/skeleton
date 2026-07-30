import { GermanyFlag } from "@module/design/components/language/flags/GermanyFlag";
import type { MetaType } from "../../shared/story";

export const meta = {
  title: "GermanyFlag",
  group: "Components",
  tags: [],
  component: GermanyFlag,
  usage: [
    "**GermanyFlag** is the German locale flag icon used in the design system's language controls. It is a presentational SVG sized through normal component props.",
    "",
    "**How to use it** — place it beside `Deutsch` anywhere the user selects or reviews the current UI language. Keep it visually secondary to the text label so the language stays explicit and accessible.",
    "",
    "**When to use it** — in locale menus, settings rows, and language onboarding steps.",
    "",
    "**When not to use it** — avoid using it by itself without a text label or in a context that is about national identity rather than interface language.",
  ].join("\n"),
  props: [{ name: "className", control: "text", default: "size-12 rounded-sm shadow-sm" }],
} satisfies MetaType<typeof GermanyFlag>;
