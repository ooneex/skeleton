import { PortugalFlag } from "@module/design/components/language/flags/PortugalFlag";
import type { MetaType } from "../../shared/story";

export const meta = {
  title: "PortugalFlag",
  group: "Components",
  tags: [],
  component: PortugalFlag,
  usage: [
    "**PortugalFlag** is the Portuguese language flag icon supplied to the language-switcher family. It is a small SVG intended for locale-choice UI, not a standalone illustration.",
    "",
    "**How to use it** — render it with the `Português` label in compact menus, forms, or settings panels. Adjust size with `className`, width, or height to match the density of the surrounding control.",
    "",
    "**When to use it** — for Portuguese UI-language selection or display.",
    "",
    "**When not to use it** — do not substitute it for a textual locale label or use it when the distinction needed is regional rather than linguistic.",
  ].join("\n"),
  props: [{ name: "className", control: "text", default: "size-12 rounded-sm shadow-sm" }],
} satisfies MetaType<typeof PortugalFlag>;
