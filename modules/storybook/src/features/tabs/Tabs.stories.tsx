import { Tabs } from "@module/design/components/tabs";
import type { Meta } from "../../shared/story";

const accountTabs = (
  <Tabs defaultValue="overview" className="w-[520px] max-w-full">
    <Tabs.List variant="default" size="sm">
      <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
      <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
      <Tabs.Trigger value="team">Team</Tabs.Trigger>
      <Tabs.Indicator />
    </Tabs.List>
    <Tabs.Content value="overview">
      <div className="space-y-1 rounded-lg border border-border p-4 text-sm">
        <p className="font-medium text-foreground">Workspace overview</p>
        <p className="text-muted-foreground">
          See your active projects, pending reviews, and recent member activity in one place.
        </p>
      </div>
    </Tabs.Content>
    <Tabs.Content value="billing">
      <div className="space-y-1 rounded-lg border border-border p-4 text-sm">
        <p className="font-medium text-foreground">Billing preferences</p>
        <p className="text-muted-foreground">
          Manage your plan, invoices, and payment method without leaving the settings screen.
        </p>
      </div>
    </Tabs.Content>
    <Tabs.Content value="team">
      <div className="space-y-1 rounded-lg border border-border p-4 text-sm">
        <p className="font-medium text-foreground">Team access</p>
        <p className="text-muted-foreground">Invite new members, review roles, and keep collaborator access current.</p>
      </div>
    </Tabs.Content>
  </Tabs>
);

export const meta = {
  title: "Tabs",
  group: "Components",
  tags: [],
  component: Tabs,
  usage: [
    "**What** — `Tabs` is the compound component for switching between peer views without leaving the page. The root owns selection and orientation, `Tabs.List` arranges the selectable triggers, `Tabs.Trigger` activates one panel, `Tabs.Indicator` animates under or beside the active trigger, and `Tabs.Content` renders the matching panel body.",
    "",
    "**How to use it** — wrap one `Tabs.List` and one `Tabs.Content` per panel inside the root, give every trigger and content panel the same unique `value`, and include a single `Tabs.Indicator` inside the list so the active tab has a moving visual marker. Use `orientation` when the triggers should stack vertically in a sidebar-like layout. The list itself controls presentation with `variant` (`default` or `line`) and `size` (`xs`, `sm`, `md`, `lg`).",
    "",
    "**When to use it** — for a small set of equal-priority sections the user may switch between repeatedly while staying in the same task: account settings, product detail subsections, analytics views, or content panes inside a card or dialog.",
    "",
    "**When not to use it** — do not use tabs for hierarchical navigation across unrelated pages, for long dynamic lists of choices that should scroll or search, or when users need to compare several panels at the same time because inactive panels are hidden.",
  ].join("\n"),
  props: [
    {
      name: "children",
      default: accountTabs,
    },
    {
      name: "defaultValue",
      control: "radio",
      options: [
        {
          name: "overview",
          usage:
            "Opens on the summary panel. Use when the first tab should orient the user with a broad status snapshot before they drill into details.",
        },
        {
          name: "billing",
          usage:
            "Opens on the plan-and-payment panel. Use when costs, invoices, or subscription work is the user's primary task in this screen.",
        },
        {
          name: "team",
          usage:
            "Opens on the membership panel. Use when invitations, roles, and collaborator access are the first thing the user needs to review.",
        },
      ],
      default: "overview",
    },
    {
      name: "orientation",
      control: "radio",
      options: [
        {
          name: "horizontal",
          usage:
            "Top-aligned tabs with panels underneath. Use for the common page-section pattern where content changes below a single tab row.",
        },
        {
          name: "vertical",
          usage:
            "Side-aligned tabs with panels beside them. Use in settings and inspector layouts where the trigger list reads like a section rail.",
        },
      ],
      default: "horizontal",
    },
    {
      name: "onValueChange",
      callback: (value: string | null) => value,
    },
  ],
} satisfies Meta<typeof Tabs>;
