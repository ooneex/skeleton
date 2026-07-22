import { Button } from "@module/design/components/button";
import { AlertDialog, alert, confirm } from "@module/design/components/dialog";
import { AlertWarningIcon } from "@module/design/icons/outline/ui-layout/lg/AlertWarningIcon";
import { useState } from "react";
import type { Meta } from "../../shared/story";

type AlertDialogDemoPropsType = {
  /** `confirm` shows Cancel + Action; `alert` shows a single acknowledge button. */
  mode?: "confirm" | "alert";
  /** Bold question or statement at the top of the dialog. */
  title?: string;
  /** Supporting line under the title. */
  description?: string;
  /** Label on the confirming/acknowledging action. */
  confirmLabel?: string;
  /** Label on the cancel button (confirm mode only). */
  cancelLabel?: string;
  /** Button variant applied to the confirming action. */
  confirmVariant?: "default" | "destructive" | "secondary" | "outline";
  /** Dialog width. */
  size?: "sm" | "md";
  /** Optional icon shown above the title. */
  media?: "none" | "warning";
};

/**
 * `AlertDialog` is an imperative dialog — it renders nothing until `confirm()` / `alert()`
 * is awaited — so the preview wraps it in a small demo: mount the Root once, then open it
 * from a button and show the resolved decision.
 */
const AlertDialogDemo = ({
  mode = "confirm",
  title = "Are you sure?",
  description,
  confirmLabel,
  cancelLabel,
  confirmVariant,
  size,
  media = "warning",
}: AlertDialogDemoPropsType) => {
  const [result, setResult] = useState<boolean | null>(null);
  const resolvedMedia = media === "warning" ? <AlertWarningIcon className="size-10" /> : undefined;

  return (
    <div className="flex flex-col items-center gap-4">
      <AlertDialog />
      <div className="flex items-center gap-3">
        <span className="min-w-32 text-center text-sm text-muted-foreground">
          {result === null ? "No decision yet" : result ? "Confirmed" : "Cancelled"}
        </span>
        <Button
          onClick={async () => {
            const decision =
              mode === "alert"
                ? await alert({ title, description, confirmLabel, confirmVariant, size, media: resolvedMedia })
                : await confirm({ title, description, confirmLabel, cancelLabel, confirmVariant, size, media: resolvedMedia });
            setResult(decision);
          }}
        >
          Open {mode}
        </Button>
      </div>
    </div>
  );
};
AlertDialogDemo.displayName = "AlertDialog";

export const meta = {
  title: "AlertDialog",
  group: "Components",
  tags: [],
  component: AlertDialogDemo,
  usage: [
    "**AlertDialog** is the imperative decision dialog built on `react-call`. It centers a title, optional description, and an optional media slot above a footer of actions, and resolves a boolean: `true` when the user takes the action, `false` when they cancel, press Escape, or dismiss. You never render it inline — mount the Root once near the top of your app and open it through the `confirm()` and `alert()` helpers.",
    "",
    '**How to use it** — place `<AlertDialog />` once at the app root. To ask a yes/no question, `if (await confirm({ title, description })) { … }` — it shows a Cancel + Action pair and resolves the choice. To force acknowledgement of a message, `await alert({ title, description })` — it shows a single OK button. Set `confirmVariant: "destructive"` and a pointed `confirmLabel` for dangerous actions. This preview wires both helpers to a button and a readout.',
    "",
    "**When to use it** — before an irreversible or costly action (delete, discard, sign out everywhere) where you need explicit confirmation, or to deliver a blocking message the user must dismiss. It deliberately interrupts, so the decision cannot be missed.",
    "",
    "**When not to use it** — do not use it for routine content or forms (use `Dialog` / `createDialog`), for non-blocking confirmation of a completed action (use a toast), or for every save — reserve the interruption for choices that genuinely warrant stopping the user.",
  ].join("\n"),
  props: [
    {
      name: "mode",
      control: "radio",
      options: [
        {
          name: "confirm",
          usage:
            "Two actions — Cancel and the confirming button. Use for reversible decisions the user can back out of: delete, discard changes, leave without saving.",
        },
        {
          name: "alert",
          usage:
            "A single acknowledge button. Use to deliver a blocking message that only needs an OK — a completed result, a warning, an error the user must read.",
        },
      ],
      default: "confirm",
    },
    {
      name: "title",
      control: "text",
      default: "Delete this item?",
    },
    {
      name: "description",
      control: "text",
      default: "This action cannot be undone.",
    },
    {
      name: "confirmLabel",
      control: "text",
      default: "Delete",
    },
    {
      name: "cancelLabel",
      control: "text",
      default: "Cancel",
    },
    {
      name: "confirmVariant",
      control: "select",
      options: [
        {
          name: "default",
          usage:
            "Primary-filled action. Use for benign confirmations where proceeding is the expected, safe path — accept, continue, apply.",
        },
        {
          name: "destructive",
          usage:
            "Red, high-alarm action. Use whenever confirming will delete or irreversibly change data so the risk reads at a glance.",
        },
        {
          name: "secondary",
          usage:
            "Muted brand action. Use for a secondary confirmation that should not compete for attention with surrounding primary buttons.",
        },
        {
          name: "outline",
          usage:
            "Bordered, low-fill action. Use on colored or busy surfaces where a filled button would clash but the action still needs definition.",
        },
      ],
      default: "destructive",
    },
    {
      name: "size",
      control: "radio",
      options: [
        {
          name: "sm",
          usage: "Compact width. Use for terse confirmations with a short title and no long description.",
        },
        {
          name: "md",
          usage: "Standard width. Use when the description runs to a sentence or two, or a media slot is present.",
        },
      ],
      default: "md",
    },
    {
      name: "media",
      control: "radio",
      options: [
        {
          name: "none",
          usage: "No visual accent. Use for straightforward confirmations where the copy alone is enough to carry the decision.",
        },
        {
          name: "warning",
          usage:
            "Large warning glyph above the title. Use for destructive or high-stakes prompts where the dialog should feel more cautionary at a glance.",
        },
      ],
      default: "warning",
    },
  ],
} satisfies Meta<typeof AlertDialogDemo>;
