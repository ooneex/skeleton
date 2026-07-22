import { NotFound } from "@module/design/components/not-found";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "NotFound",
  group: "Components",
  tags: [],
  component: NotFound,
  usage: [
    "**NotFound** is a ready-made 404 empty state for a whole page or a routed view. It centers a `NotFoundIcon` illustration over a `404` heading, an explanatory line of muted copy, and two recovery actions — an outline **Go back** button that pops the router history and a primary **Go home** link to `/`. It manages its own theme (reading and applying the current scheme) so it renders correctly even when it is the only thing on screen.",
    "",
    '**How to use it** — render it as the `notFoundComponent` of your router (or inside a catch-all route) so any unmatched URL resolves to it. It fills its parent (`h-full`), so give it a container with real height. It needs a live router in context — the **Go back** action calls `router.history.back()` and **Go home** is a `<Link to="/">` — so mount it inside your app\'s `RouterProvider`. Pass `className` to adjust spacing or background; the internal copy and actions are fixed.',
    "",
    "**When to use it** — as the fallback for unmatched routes, deleted or moved resources, and mistyped deep links: the case where the user landed somewhere real that no longer has content and needs an obvious way out.",
    "",
    "**When not to use it** — do not use it for an empty list, a failed data fetch, or a permissions error; those are different states with different recovery paths (retry, request access, adjust filters). Reach for a purpose-built empty/error state there rather than a 404 page.",
  ].join("\n"),
} satisfies Meta<typeof NotFound>;
