import { FranceFlag } from "@module/design/components/language/flags/FranceFlag";
import type { MetaType } from "../../shared/story";

export const meta = {
  title: "FranceFlag",
  group: "Components",
  tags: [],
  component: FranceFlag,
  usage: [
    "**FranceFlag** renders the tricolour SVG used for the French locale in the language switcher. It is lightweight, token-coloured, and meant to sit beside the locale label rather than replace readable text.",
    "",
    "**How to use it** — pair it with the native `Français` label in menus, onboarding pickers, or settings screens. Resize through normal SVG props so the same component works in both compact menus and roomy forms.",
    "",
    "**When to use it** — wherever the interface language choice needs an immediately recognisable French marker.",
    "",
    "**When not to use it** — do not rely on it as the only signifier of language or use it in non-language contexts where a country flag could be misleading.",
  ].join("\n"),
  props: [{ name: "className", control: "text", default: "size-12 rounded-sm shadow-sm" }],
} satisfies MetaType<typeof FranceFlag>;
