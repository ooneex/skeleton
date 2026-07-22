import { Button } from "@module/design/components/button";
import { Drawer } from "@module/design/components/drawer";
import { useState } from "react";
import type { Meta } from "../../shared/story";

type DrawerDemoPropsType = {
  /** Heading rendered by `DrawerTitle` inside the drawer header. */
  title?: string;
  /** Supporting line rendered by `DrawerDescription` under the title. */
  description?: string;
  /** Body copy rendered inside the drawer content area. */
  children?: string;
};

/**
 * `Drawer` is imperative — it renders nothing until `Drawer.call()` is awaited — so the
 * preview wraps it in a small demo: mount the Root once, then open it from a button and
 * resolve when the panel closes.
 */
const DrawerDemo = ({ title, description, children }: DrawerDemoPropsType) => {
  const [closedCount, setClosedCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <Drawer />
      <div className="flex flex-col items-center gap-2">
        <Button
          onClick={async () => {
            await Drawer.call({
              title,
              description,
              children: (
                <div className="flex flex-col gap-2 p-4 pt-0 text-sm text-muted-foreground">
                  <p>{children}</p>
                </div>
              ),
            });
            setClosedCount((count) => count + 1);
          }}
        >
          Open drawer
        </Button>
        {closedCount > 0 ? <p className="text-xs text-muted-foreground">Closed {closedCount}×</p> : null}
      </div>
    </div>
  );
};
DrawerDemo.displayName = "Drawer";

export const meta = {
  title: "Drawer",
  group: "Components",
  tags: [],
  component: DrawerDemo,
  usage: [
    "**Drawer** is an imperative panel that slides in from an edge of the screen, built on `react-call` like the dialog. You do not render it inline: mount `<Drawer />` once near the app root, then open it on demand with `await Drawer.call({ title, description, children })`. The promise resolves when the drawer closes, so control does not return to your code until the user is done with it.",
    "",
    "**How to use it** — call `Drawer.call({ title, description, children })` for a quick content panel. Internally the drawer composes its parts: `DrawerContent` is the sliding surface (it renders a `DrawerOverlay`, portals itself, traps focus, and animates in from `side`), `DrawerHeader` wraps `DrawerTitle` and `DrawerDescription` for the labelled top, and `DrawerFooter` pins actions to the bottom. When you need a drawer that returns a value or holds its own form state, build one with `createDrawer(render, options)` instead and resolve it with `call.end(value)`; dismissing (Escape / outside click) resolves with `dismissValue`. Options let you set `side` (`top` / `right` / `bottom` / `left`, default `bottom`), `modal`, and `dismissible`.",
    "",
    "**When to use it** — for focused, secondary tasks that benefit from the surrounding context staying on screen: filters, a record's details, a quick edit form, a cart, or a navigation panel on mobile. A bottom or side sheet keeps the user anchored to where they were.",
    "",
    "**When not to use it** — do not use a drawer for a short confirmation or alert (use a `Dialog`), for primary content that deserves its own route or page, or for transient, non-blocking feedback (use a toast). Avoid stacking drawers on top of each other; open one task at a time.",
  ].join("\n"),
  props: [
    {
      name: "title",
      control: "text",
      default: "Drawer title",
    },
    {
      name: "description",
      control: "text",
      default: "A short description of what this drawer is for.",
    },
    {
      name: "children",
      control: "text",
      default: "The body accepts any content — a form, a list, a detail view. Dismiss the drawer with the Escape key or by clicking the overlay.",
    },
  ],
} satisfies Meta<typeof DrawerDemo>;
