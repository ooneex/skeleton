import { SpainFlag } from "@module/design/components/language/flags/SpainFlag";
import type { MetaType } from "../../shared/story";

export const meta = {
  title: "SpainFlag",
  group: "Components",
  tags: [],
  component: SpainFlag,
  usage: [
    "**SpainFlag** is the Spanish locale flag icon from the language-switcher set. It is a presentational SVG intended to support a visible `Español` label in language-related UI.",
    "",
    "**How to use it** — place it inline beside the language name in menus, profile settings, or onboarding screens. Let the containing control decide final dimensions through utility classes or width/height props.",
    "",
    "**When to use it** — to identify Spanish as a supported interface language.",
    "",
    "**When not to use it** — do not depend on it without text, and do not repurpose it for unrelated flag-collection or geography UI unless that meaning is intended.",
  ].join("\n"),
  props: [{ name: "className", control: "text", default: "size-12 rounded-sm shadow-sm" }],
} satisfies MetaType<typeof SpainFlag>;
