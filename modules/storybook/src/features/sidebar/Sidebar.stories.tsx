import { Sidebar } from "@module/design/components/sidebar";
import type { ComponentProps } from "react";
import type { Meta } from "../../shared/story";

type SidebarDemoPropsType = Pick<ComponentProps<typeof Sidebar.Provider>, "defaultOpen" | "onOpenChange"> &
  Pick<ComponentProps<typeof Sidebar>, "collapsible" | "side" | "variant">;

const SidebarDemo = ({
  defaultOpen = true,
  onOpenChange,
  side = "left",
  variant = "inset",
  collapsible = "icon",
}: SidebarDemoPropsType) => {
  return (
    <Sidebar.Provider defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      <Sidebar side={side} variant={variant} collapsible={collapsible}>
        <Sidebar.Header>
          <Sidebar.Input placeholder="Search workspace" />
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupLabel>Workspace</Sidebar.GroupLabel>
            <Sidebar.GroupAction>+</Sidebar.GroupAction>
            <Sidebar.GroupContent>
              <Sidebar.Menu>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton isActive>Overview</Sidebar.MenuButton>
                  <Sidebar.MenuBadge>3</Sidebar.MenuBadge>
                </Sidebar.MenuItem>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton>Projects</Sidebar.MenuButton>
                  <Sidebar.MenuAction>⋯</Sidebar.MenuAction>
                </Sidebar.MenuItem>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton>Invoices</Sidebar.MenuButton>
                </Sidebar.MenuItem>
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Sidebar.Group>
          <Sidebar.Separator />
          <Sidebar.Group>
            <Sidebar.GroupLabel>Settings</Sidebar.GroupLabel>
            <Sidebar.GroupContent>
              <Sidebar.Menu>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton>Team</Sidebar.MenuButton>
                  <Sidebar.MenuSub>
                    <Sidebar.MenuSubItem>
                      <Sidebar.MenuSubButton isActive>Members</Sidebar.MenuSubButton>
                    </Sidebar.MenuSubItem>
                    <Sidebar.MenuSubItem>
                      <Sidebar.MenuSubButton>Permissions</Sidebar.MenuSubButton>
                    </Sidebar.MenuSubItem>
                  </Sidebar.MenuSub>
                </Sidebar.MenuItem>
                <Sidebar.MenuItem>
                  <Sidebar.MenuSkeleton showIcon />
                </Sidebar.MenuItem>
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Sidebar.Group>
        </Sidebar.Content>
        <Sidebar.Footer>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton variant="outline">Upgrade plan</Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Footer>
        <Sidebar.Rail />
      </Sidebar>
      <Sidebar.Inset className="gap-4 p-4">
        <div className="flex items-center gap-2">
          <Sidebar.Trigger />
          <div>
            <p className="font-medium">Project dashboard</p>
            <p className="text-sm text-muted-foreground">
              Main content stays beside the sidebar and shifts with the selected layout variant.
            </p>
          </div>
        </div>
        <div className="rounded border p-4">
          <p className="font-medium">Quarterly goals</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Track launches, onboarding, revenue, and support work without leaving the sectioned shell.
          </p>
        </div>
      </Sidebar.Inset>
    </Sidebar.Provider>
  );
};
SidebarDemo.displayName = "Sidebar";

export const meta = {
  title: "Sidebar",
  group: "Components",
  tags: [],
  component: SidebarDemo,
  usage: [
    "**Sidebar** is a full navigation shell, not just a single panel. The system combines `Sidebar.Provider` for shared state, the root `Sidebar` panel itself, and layout pieces such as `Sidebar.Header`, `Sidebar.Content`, `Sidebar.Group`, `Sidebar.Menu`, `Sidebar.Footer`, `Sidebar.Rail`, `Sidebar.Trigger`, and `Sidebar.Inset` so navigation and page content stay coordinated across desktop and mobile.",
    "",
    "**How to use it** — start with `Sidebar.Provider`, then render a `Sidebar` and a sibling `Sidebar.Inset`. Fill the panel with grouped menus instead of freeform markup so collapsing, tooltips, badges, nested items, and the rail all keep working. Choose `variant` and `collapsible` on the root sidebar based on the shell you need: a persistent app nav, a floating section nav, or a tighter icon-collapse pattern. Put the page body in `Sidebar.Inset` and use `Sidebar.Trigger` anywhere inside that layout when users need an explicit toggle.",
    "",
    "**When to use it** — for authenticated app shells, admin dashboards, documentation back offices, or workspace layouts where navigation, grouping, and secondary actions must stay visible across many screens.",
    "",
    "**When not to use it** — do not use the sidebar system for a one-off drawer, a simple two-link nav, or any layout where the content should own the full width without a persistent shell; the structure is intentionally opinionated.",
  ].join("\n"),
  props: [
    {
      name: "defaultOpen",
      control: "boolean",
      default: true,
    },
    {
      name: "side",
      control: "radio",
      options: [
        {
          name: "left",
          usage:
            "The familiar primary-app-nav placement. Use it for dashboards and workspaces where navigation starts at the leading edge.",
        },
        {
          name: "right",
          usage:
            "A trailing-edge shell. Use it when the main content should lead visually and the navigation behaves more like an inspector.",
        },
      ],
      default: "left",
    },
    {
      name: "variant",
      control: "select",
      options: [
        {
          name: "sidebar",
          usage:
            "The full-height, edge-attached shell. Use it for classic application navigation that should read as part of the page frame.",
        },
        {
          name: "floating",
          usage:
            "A padded, lifted panel. Use it when the nav should feel lighter and more distinct from the page background.",
        },
        {
          name: "inset",
          usage:
            "A framed shell with page content inset beside it. Use it for polished dashboards where both nav and content sit inside the same surface system.",
        },
      ],
      default: "inset",
    },
    {
      name: "collapsible",
      control: "select",
      options: [
        {
          name: "offcanvas",
          usage:
            "Fully slides the nav away. Use it when reclaiming content width matters more than keeping icons visible.",
        },
        {
          name: "icon",
          usage:
            "Shrinks to an icon rail. Use it when users still need quick wayfinding while giving the content more room.",
        },
        {
          name: "none",
          usage:
            "Always stays fully expanded. Use it for layouts where persistent navigation is central and should never compress.",
        },
      ],
      default: "icon",
    },
    {
      name: "onOpenChange",
      callback: () => {},
    },
  ],
} satisfies Meta<typeof SidebarDemo>;
