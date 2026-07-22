import { Button } from "@module/design/components/button";
import { Sheet } from "@module/design/components/sheet";
import { useState } from "react";
import type { Meta } from "../../shared/story";

type SheetDemoPropsType = {
  title?: string;
  description?: string;
  side?: "top" | "right" | "bottom" | "left";
};

const SheetDemo = ({ title, description, side = "right" }: SheetDemoPropsType) => {
  const [opened, setOpened] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <Sheet />
      <div className="flex flex-col items-center gap-2">
        <Button
          onClick={async () => {
            await Sheet.call({
              title,
              description,
              side,
              children: (
                <div className="flex flex-col gap-3 p-4 pt-0 text-sm text-muted-foreground">
                  <p>
                    Use the sheet body for forms, filters, contextual details, or secondary flows that should stay near
                    the current page.
                  </p>
                  <div className="rounded border p-3 text-foreground">
                    <p className="font-medium">Deployment settings</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Environment variables, regions, and release toggles can live here.
                    </p>
                  </div>
                </div>
              ),
            });
            setOpened((count) => count + 1);
          }}
        >
          Open sheet
        </Button>
        <p className="text-xs text-muted-foreground">
          {opened ? `Opened ${opened}×` : "Choose a side, then open the panel."}
        </p>
      </div>
    </div>
  );
};
SheetDemo.displayName = "Sheet";

export const meta = {
  title: "Sheet",
  group: "Components",
  tags: [],
  component: SheetDemo,
  usage: [
    "**Sheet** is an imperative sliding panel built on top of the dialog primitive. You mount `<Sheet />` once, then open it with `await Sheet.call({ title, description, side, children })` so the panel appears from the chosen edge while the current screen stays visible underneath.",
    "",
    "**How to use it** — place the root once near the app shell, then call `Sheet.call` from a button, row action, or shortcut. Supply a `title` and optional `description` when the panel needs a clear heading, pass the body as `children`, and choose the `side` that matches the task: right for detail/configuration panels, left for navigation, bottom for mobile-style drawers, top for light utility trays.",
    "",
    "**When to use it** — for secondary workflows that benefit from preserving page context: editing a record, tweaking filters, viewing metadata, or opening app navigation without fully leaving the current route.",
    "",
    "**When not to use it** — do not use a sheet for a simple confirmation (use an alert/dialog), for content that deserves its own page, or for stacked multi-step flows that would trap the user in layered overlays.",
  ].join("\n"),
  props: [
    {
      name: "title",
      control: "text",
      default: "Project settings",
    },
    {
      name: "description",
      control: "text",
      default: "Review and adjust the configuration without leaving the current screen.",
    },
    {
      name: "side",
      control: "select",
      options: [
        {
          name: "top",
          usage: "Slides in from above. Reach for it for lightweight trays, notifications, or compact utility panels.",
        },
        {
          name: "right",
          usage: "Slides in from the right. Reach for it for detail views, settings, and inspector-style side panels.",
        },
        {
          name: "bottom",
          usage:
            "Slides up from the bottom. Reach for it for mobile-first flows, action sheets, and short stacked content.",
        },
        {
          name: "left",
          usage:
            "Slides in from the left. Reach for it for navigation and context switches that originate from the page edge.",
        },
      ],
      default: "right",
    },
  ],
} satisfies Meta<typeof SheetDemo>;
