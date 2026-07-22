import type { Button } from "@module/design/components/button/Button";
import type { ReactNode } from "react";
import { createCallable } from "react-call";
import { AlertDialogAction } from "./AlertDialogAction";
import { AlertDialogCancel } from "./AlertDialogCancel";
import { AlertDialogContent } from "./AlertDialogContent";
import { AlertDialogDescription } from "./AlertDialogDescription";
import { AlertDialogFooter } from "./AlertDialogFooter";
import { AlertDialogHeader } from "./AlertDialogHeader";
import { AlertDialogMedia } from "./AlertDialogMedia";
import { AlertDialogTitle } from "./AlertDialogTitle";

/** Milliseconds to keep the popup mounted so the close animation can play. */
const UNMOUNTING_DELAY = 200;

type ButtonVariantType = NonNullable<React.ComponentProps<typeof Button>["variant"]>;

export type AlertDialogPropsType = {
  /** `confirm` shows Cancel + Action; `alert` shows a single acknowledge button. */
  mode?: "confirm" | "alert";
  title: ReactNode;
  description?: ReactNode;
  /** Optional media slot (icon/illustration) rendered above the title. */
  media?: ReactNode;
  confirmLabel?: ReactNode;
  cancelLabel?: ReactNode;
  confirmVariant?: ButtonVariantType;
  size?: "sm" | "md";
};

/**
 * Imperative alert/confirm dialog built on `react-call`.
 *
 * Mount the Root once near the top of your app:
 *
 * ```tsx
 * <AlertDialog />
 * ```
 *
 * Then await a decision from anywhere:
 *
 * ```tsx
 * if (await confirm({ title: "Delete item?", description: "This can't be undone." })) {
 *   await api.delete(id)
 * }
 * ```
 *
 * The promise resolves `true` when the action is taken and `false` when the
 * user cancels, presses Escape, or dismisses the dialog.
 */
export const AlertDialog = createCallable<AlertDialogPropsType, boolean>(
  ({
    call,
    mode = "confirm",
    title,
    description,
    media,
    confirmLabel = "Confirm",
    cancelLabel = "Cancel",
    confirmVariant = "default",
    size = "md",
  }) => {
    return (
      <AlertDialogContent size={size} open={!call.ended} onDismiss={() => call.end(false)}>
        <AlertDialogHeader>
          {media ? <AlertDialogMedia>{media}</AlertDialogMedia> : null}
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {description ? <AlertDialogDescription>{description}</AlertDialogDescription> : null}
        </AlertDialogHeader>
        <AlertDialogFooter>
          {mode === "confirm" ? (
            <AlertDialogCancel onClick={() => call.end(false)}>{cancelLabel}</AlertDialogCancel>
          ) : null}
          <AlertDialogAction variant={confirmVariant} onClick={() => call.end(true)}>
            {confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    );
  },
  UNMOUNTING_DELAY,
);
AlertDialog.displayName = "AlertDialog";

/** Await a yes/no decision. Resolves `true` on confirm, `false` on cancel/dismiss. */
export const confirm = (props: Omit<AlertDialogPropsType, "mode">) => AlertDialog.call({ ...props, mode: "confirm" });

/** Await acknowledgement of a message. Resolves `true` on acknowledge, `false` on dismiss. */
export const alert = (props: Omit<AlertDialogPropsType, "mode" | "cancelLabel">) =>
  AlertDialog.call({ confirmLabel: "OK", ...props, mode: "alert" });
