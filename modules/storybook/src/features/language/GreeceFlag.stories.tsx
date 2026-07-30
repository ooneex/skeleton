import { GreeceFlag } from "@module/design/components/language/flags/GreeceFlag";
import type { MetaType } from "../../shared/story";

export const meta = {
  title: "GreeceFlag",
  group: "Components",
  tags: [],
  component: GreeceFlag,
  usage: [
    "**GreeceFlag** renders the Greek locale marker for the language switcher. Like the other flags, it is a pure SVG component that picks up its final size from props or utility classes.",
    "",
    "**How to use it** — show it beside `Ελληνικά` in a language picker or account setting. Keep the surrounding copy in the native language so the user can recognise it even before the rest of the interface is translated.",
    "",
    "**When to use it** — when the UI needs to represent Greek as a supported locale.",
    "",
    "**When not to use it** — do not use it as the sole accessible label or as decorative travel imagery unrelated to language choice.",
  ].join("\n"),
  props: [{ name: "className", control: "text", default: "size-12 rounded-sm shadow-sm" }],
} satisfies MetaType<typeof GreeceFlag>;
