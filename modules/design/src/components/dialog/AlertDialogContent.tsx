import { cn } from "@module/design/utils/cn";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { AlertDialogOverlay } from "./AlertDialogOverlay";
import { AlertDialogPortal } from "./AlertDialogPortal";
import { DialogContext, type DialogContextValueType } from "./DialogContext";
import { useDialogBehavior } from "./useDialogBehavior";

type AlertDialogContentPropsType = React.ComponentProps<"div"> & {
  size?: "md" | "sm";
  open?: boolean;
  /** Called when the dialog is dismissed with Escape. Outside clicks never dismiss an alert dialog. */
  onDismiss?: () => void;
};

export const AlertDialogContent = ({
  className,
  children,
  size = "md",
  open = true,
  onDismiss,
  ...props
}: AlertDialogContentPropsType) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const [hasTitle, setHasTitle] = useState(false);
  const [hasDescription, setHasDescription] = useState(false);

  const onDismissRef = useRef(onDismiss);
  useEffect(() => {
    onDismissRef.current = onDismiss;
  });
  const dismiss = useCallback(() => onDismissRef.current?.(), []);

  useDialogBehavior({ open, modal: true, popupRef, onDismiss: dismiss });

  const contextValue = useMemo<DialogContextValueType>(
    () => ({ open, dismiss, titleId, descriptionId, setHasTitle, setHasDescription }),
    [open, dismiss, titleId, descriptionId],
  );

  return (
    <AlertDialogPortal>
      <DialogContext.Provider value={contextValue}>
        <AlertDialogOverlay open={open} />
        <div
          ref={popupRef}
          role="alertdialog"
          aria-modal
          aria-labelledby={hasTitle ? titleId : undefined}
          aria-describedby={hasDescription ? descriptionId : undefined}
          tabIndex={-1}
          data-slot="alert-dialog-content"
          data-size={size}
          {...(open ? { "data-open": "" } : { "data-closed": "" })}
          className={cn(
            "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 bg-background ring-foreground/10 gap-6 rounded p-6 ring-1 duration-100 data-[size=md]:max-w-xs data-[size=sm]:max-w-xs data-[size=md]:sm:max-w-lg group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 outline-none",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </DialogContext.Provider>
    </AlertDialogPortal>
  );
};
AlertDialogContent.displayName = "AlertDialogContent";
