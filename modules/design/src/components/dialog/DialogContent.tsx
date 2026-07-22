import { XmarkIcon } from "@module/design/icons/outline/ui-layout/sm/XmarkIcon";
import { cn } from "@module/design/utils/cn";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { DialogContext, type DialogContextValueType } from "./DialogContext";
import { DialogOverlay } from "./DialogOverlay";
import { DialogPortal } from "./DialogPortal";
import { useDialogBehavior } from "./useDialogBehavior";

type DialogContentPropsType = React.ComponentProps<"div"> & {
  open?: boolean;
  /** Called when the dialog is dismissed (Escape / outside click / close button). */
  onDismiss?: () => void;
  showCloseButton?: boolean;
  /** `'trap-focus'` keeps the page interactive; `true` (default) blocks it. */
  modal?: boolean | "trap-focus";
  disablePointerDismissal?: boolean;
};

export const DialogContent = ({
  className,
  children,
  open = true,
  onDismiss,
  showCloseButton = false,
  modal = true,
  disablePointerDismissal = false,
  ...props
}: DialogContentPropsType) => {
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

  useDialogBehavior({ open, modal, popupRef, onDismiss: dismiss });

  const contextValue = useMemo<DialogContextValueType>(
    () => ({ open, dismiss, titleId, descriptionId, setHasTitle, setHasDescription }),
    [open, dismiss, titleId, descriptionId],
  );

  return (
    <DialogPortal>
      <DialogContext.Provider value={contextValue}>
        <DialogOverlay
          open={open}
          blocking={modal === true}
          onDismiss={disablePointerDismissal ? undefined : dismiss}
        />
        <div
          ref={popupRef}
          role="dialog"
          aria-modal={modal === true || undefined}
          aria-labelledby={hasTitle ? titleId : undefined}
          aria-describedby={hasDescription ? descriptionId : undefined}
          tabIndex={-1}
          data-slot="dialog-content"
          {...(open ? { "data-open": "" } : { "data-closed": "" })}
          className={cn(
            "bg-white border data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 grid w-full gap-6 rounded p-4 text-sm duration-100 max-w-2xl fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 outline-none border-none shadow-none",
            className,
          )}
          {...props}
        >
          {children}
          {showCloseButton && (
            <button
              type="button"
              data-slot="dialog-close"
              onClick={dismiss}
              className="absolute -top-3 -right-3 z-10 flex size-8 items-center justify-center rounded-full bg-card shadow-none border-none ring-[0.2px] ring-ring cursor-pointer transition-opacity hover:opacity-70"
            >
              <XmarkIcon className="text-foreground" />
              <span className="sr-only">Close</span>
            </button>
          )}
        </div>
      </DialogContext.Provider>
    </DialogPortal>
  );
};
DialogContent.displayName = "DialogContent";
