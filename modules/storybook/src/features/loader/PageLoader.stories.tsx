import { PageLoader } from "@module/design/components/loader";
import type { MetaType } from "../../shared/story";

export const meta = {
  title: "PageLoader",
  group: "Components",
  tags: [],
  component: PageLoader,
  usage: [
    "**PageLoader** is the full-screen loading state for app-level transitions. It centers the Talos logo in a roomy viewport-height container and uses a gentle pulse so the user knows the shell is alive while route data or boot-time work completes.",
    "",
    "**How to use it** — render it while the whole page or application shell is waiting on critical data, authentication bootstrap, or an initial route load. Because it already owns the viewport height, drop it in place of the page content rather than nesting it inside a cramped card.",
    "",
    "**When to use it** — during app startup, hard navigations, or blocking page refreshes where the rest of the interface cannot be meaningfully shown yet.",
    "",
    "**When not to use it** — do not use it for small in-place loading states inside cards, lists, or buttons. In those cases, use a local skeleton or spinner instead of replacing the whole screen.",
  ].join("\n"),
  props: [
    {
      name: "className",
      control: "text",
      default: "min-h-80 rounded border border-dashed border-border",
    },
  ],
} satisfies MetaType<typeof PageLoader>;
