import { ScrollArea } from "@module/design/components/scroll-area";
import type { Meta } from "../../shared/story";

const activityFeed = (
  <ScrollArea className="h-56 w-80 rounded border" viewportClassName="max-h-56">
    <div className="flex flex-col">
      {[
        ["09:12", "New customer imported", "82 contacts were added to the workspace from the latest CSV upload."],
        ["10:05", "Invoices synced", "Billing statuses were refreshed for the finance team."],
        ["11:18", "Comment added", "Ada left feedback on the onboarding checklist for new members."],
        ["12:42", "Workflow completed", "The quarterly approval flow finished and archived its audit trail."],
        ["14:07", "Release promoted", "Production now runs the newest dashboard build."],
        ["15:31", "Reminder scheduled", "A follow-up reminder was added for overdue contracts."],
      ].map(([time, title, description]) => (
        <div key={time} className="border-b px-4 py-3 last:border-b-0">
          <div className="mb-1 flex items-center justify-between gap-4">
            <p className="text-sm font-medium">{title}</p>
            <span className="text-xs text-muted-foreground">{time}</span>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      ))}
    </div>
  </ScrollArea>
);

export const meta = {
  title: "ScrollArea",
  group: "Components",
  tags: [],
  component: ScrollArea,
  usage: [
    "**ScrollArea** creates a clipped region with a keyboard-focusable viewport and an attached scrollbar when the content overflows. It is the right primitive for long lists, activity feeds, settings panels, and any bounded surface where the surrounding layout should stay fixed while only the inner content scrolls.",
    "",
    "**How to use it** — give the root a concrete width and height (or max-height) with `className`, then render the overflowing content as `children`. Use `viewportClassName` when the viewport itself needs a cap like `max-h-*` or extra padding. Leave the default scrollbar on for most cases so users can see that the region scrolls; only set `hideScrollbar` when the scroll affordance is already obvious from the layout.",
    "",
    "**When to use it** — for side panels, command results, menu-like lists that can grow, changelogs, tables inside cards, and mobile-sized surfaces where the page itself should not become the only scroll container.",
    "",
    "**When not to use it** — do not wrap ordinary page content in a scroll area just to add a custom scrollbar, and do not use it when the whole page should scroll naturally; nested scrolling makes reading and keyboard navigation harder.",
  ].join("\n"),
  props: [
    {
      name: "children",
      default: activityFeed,
    },
    {
      name: "className",
      control: "text",
      default: "h-56 w-80 rounded border",
    },
    {
      name: "viewportClassName",
      control: "text",
      default: "max-h-56",
    },
    {
      name: "hideScrollbar",
      control: "boolean",
      default: false,
    },
    {
      name: "overflowEdgeThreshold",
      control: "number",
      default: 0,
    },
  ],
} satisfies Meta<typeof ScrollArea>;
