import { ErrorFallback } from "@module/design/components/error";
import type { Meta } from "../../shared/story";

const sampleError = new Error("Cannot read properties of undefined (reading 'name')");
sampleError.name = "TypeError";
sampleError.stack = [
  "TypeError: Cannot read properties of undefined (reading 'name')",
  "    at UserProfile (https://app.ooneex.com/assets/UserProfile-4f2a.js:128:24)",
  "    at renderWithHooks (https://app.ooneex.com/assets/react-dom-9c1b.js:15042:18)",
  "    at mountIndeterminateComponent (https://app.ooneex.com/assets/react-dom-9c1b.js:17851:13)",
  "    at beginWork (https://app.ooneex.com/assets/react-dom-9c1b.js:19073:16)",
].join("\n");

export const meta = {
  title: "ErrorFallback",
  group: "Components",
  tags: [],
  component: ErrorFallback,
  usage: [
    "**ErrorFallback** is the full-screen error boundary shown when a route or component throws. It centers a friendly message and the caught error's name and message in a destructive-tinted card, offers recovery actions (Go back, Try again, Go home), and — when the error carries a stack — reveals a parsed, frame-by-frame stack trace in a slide-up drawer. It also detects stale-chunk errors after a deploy and reloads instead of retrying.",
    "",
    "**How to use it** — wire it as the `errorComponent` of a TanStack Router route (or a route tree); the router hands it the `error` that was thrown and a `reset` callback. `Try again` calls `reset` and invalidates the router to re-render the failed subtree, `Go back` pops history, and `Go home` links to `/`. You do not render it by hand in normal flow — the router mounts it on failure. This preview passes a sample `TypeError` with a fabricated stack so the trace drawer is populated.",
    "",
    "**When to use it** — as the standard recovery surface for uncaught render/loader errors at the route level, so a thrown exception degrades into a usable screen with a clear path back instead of a blank page.",
    "",
    "**When not to use it** — do not use it for expected, in-context problems like form validation, a failed field save, or a not-found record (use inline messaging, a toast, or a dedicated not-found state). It is a last-resort boundary for genuine exceptions, not a general-purpose message component.",
  ].join("\n"),
  props: [
    {
      name: "error",
      default: sampleError,
    },
    {
      name: "reset",
      default: () => undefined,
    },
  ],
} satisfies Meta<typeof ErrorFallback>;
