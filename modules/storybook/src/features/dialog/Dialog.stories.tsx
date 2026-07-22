import { Button } from "@module/design/components/button";
import { Dialog } from "@module/design/components/dialog";
import { useState } from "react";
import type { Meta } from "../../shared/story";

type DialogDemoPropsType = {
  /** Heading rendered in the dialog header. */
  title?: string;
  /** Supporting line rendered under the title. */
  description?: string;
  /** Body copy rendered below the dialog header. */
  children?: string;
};

/**
 * `Dialog` is an imperative content dialog — it renders nothing until `Dialog.call()` is
 * awaited — so the preview wraps it in a small demo: mount the Root once, then open it
 * from a button with a title, description, and body.
 */
const DialogDemo = ({ title, description, children }: DialogDemoPropsType) => {
  const [opened, setOpened] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <Dialog />
      <div className="flex items-center gap-3">
        <span className="min-w-32 text-center text-sm text-muted-foreground">
          {opened ? `Opened ${opened}×` : "Not opened yet"}
        </span>
        <Button
          onClick={async () => {
            await Dialog.call({
              title,
              description,
              children: (
                <p className="text-sm text-muted-foreground">{children}</p>
              ),
            });
            setOpened((count) => count + 1);
          }}
        >
          Open dialog
        </Button>
      </div>
    </div>
  );
};
DialogDemo.displayName = "Dialog";

export const meta = {
  title: "Dialog",
  group: "Components",
  tags: [],
  component: DialogDemo,
  usage: [
    "**Dialog** is the basic imperative content dialog built on `react-call`. It renders an optional `DialogHeader` (title + description) followed by whatever `children` you pass, inside a dismissible modal with a close button. It resolves when the dialog is closed — it returns no value — so reach for it to *show* content, not to collect a decision. You do not render it inline: mount the Root once near the top of your app and open it with `await Dialog.call({ title, children })`.",
    "",
    "**How to use it** — place `<Dialog />` once at the app root. Anywhere you need to surface content, call `await Dialog.call({ title, description, children })`; the promise settles when the user closes it (button, Escape, or outside click), so `await` it if you want to run something after it closes. Pass `children` for the body — text, a form, a preview, anything. This preview wires that flow to a button. For a dialog that returns a value or holds internal form state, build one with `createDialog` instead.",
    "",
    "**When to use it** — for on-demand modal content triggered from an action: a details panel, a short read-only form, an embedded preview, terms the user must scroll. The imperative call keeps the markup out of the page until it is needed.",
    "",
    "**When not to use it** — do not use it to confirm a destructive action or ask a yes/no question (use `AlertDialog` via `confirm()` / `alert()`), for a value-returning flow like a rename or a picker (use `createDialog`), or for lightweight transient feedback (use a toast). Avoid stacking dialogs — resolve one before opening the next.",
  ].join("\n"),
  props: [
    {
      name: "title",
      control: "text",
      default: "Dialog title",
    },
    {
      name: "description",
      control: "text",
      default: "A short line of supporting context under the title.",
    },
    {
      name: "children",
      control: "text",
      default: "Body content goes here — any React node you pass as children renders below the header.",
    },
  ],
} satisfies Meta<typeof DialogDemo>;
