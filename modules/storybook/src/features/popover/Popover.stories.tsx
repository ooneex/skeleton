import { Button } from "@module/design/components/button";
import { Popover } from "@module/design/components/popover";
import type { Meta } from "../../shared/story";

const sharePopover = (
  <Popover>
    <Popover.Trigger render={<Button variant="outline">Share</Button>} />
    <Popover.Content className="w-80">
      <Popover.Header>
        <Popover.Title>Share this document</Popover.Title>
        <Popover.Description>Create a private link for collaborators and reviewers.</Popover.Description>
      </Popover.Header>
      <div className="space-y-3">
        <div className="rounded-md border border-border p-3">
          <p className="font-medium">Anyone with the link</p>
          <p className="text-muted-foreground text-sm">Can view and comment until Friday at 6:00 PM.</p>
        </div>
        <Button className="w-full">Copy invite link</Button>
      </div>
    </Popover.Content>
  </Popover>
);

export const meta = {
  title: "Popover",
  group: "Components",
  tags: [],
  component: Popover,
  usage: [
    "**What** — `Popover` is a non-modal, anchored surface for short contextual content. The root manages open state, `Popover.Trigger` toggles it from any button-like element, `Popover.Content` positions the floating panel near that trigger, and `Popover.Header`, `Popover.Title`, and `Popover.Description` provide the accessible heading structure inside the panel.",
    "",
    "**How to use it** — wrap a `Popover.Trigger` and `Popover.Content` in `Popover`. Pass a rendered control to `Trigger` so the user has a clear anchor, then compose `Content` with a `Header`, `Title`, and `Description` before any actions or short form fields. Use it for a small, focused task or explanation; it auto-focuses the popup, closes on outside pointer down, and returns focus to the trigger when dismissed.",
    "",
    "**When to use it** — for contextual UI that belongs to the control that opened it: share sheets, inline explainers, quick settings, small pickers, or lightweight action confirmations. It works when the user should stay in the current flow while interacting with a nearby floating panel.",
    "",
    "**When not to use it** — do not use a popover for complex, blocking flows that need modality, focus trapping, or background scroll lock; use a dialog for that. If the content is just a terse label, use a tooltip instead, and if the content is a list of actions, prefer a dropdown menu.",
  ].join("\n"),
  props: [
    {
      name: "children",
      default: sharePopover,
    },
    {
      name: "defaultOpen",
      control: "boolean",
      default: true,
    },
    {
      name: "onOpenChange",
      callback: () => {},
    },
  ],
} satisfies Meta<typeof Popover>;
