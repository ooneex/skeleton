import { DialogContext, type DialogContextValueType } from "@module/design/components/dialog/DialogContext";
import { useDialogBehavior } from "@module/design/components/dialog/useDialogBehavior";
import { cn } from "@module/design/utils/cn";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { DrawerOverlay } from "./DrawerOverlay";
import { DrawerPortal } from "./DrawerPortal";
import { DrawerContentContext } from "./drawerContext";

type DrawerContentPropsType = React.ComponentProps<"div"> & {
  open?: boolean;
  /** Called when the drawer is dismissed (Escape / outside click). */
  onDismiss?: () => void;
  /** Edge the drawer slides in from. Defaults to `'bottom'`. */
  side?: "top" | "right" | "bottom" | "left";
  /** `false` keeps the page interactive behind the drawer. Defaults to `true`. */
  modal?: boolean;
  /** Disable outside-click/Escape dismissal. */
  dismissible?: boolean;
};

export const DrawerContent = ({
  className,
  children,
  open = true,
  onDismiss,
  side = "bottom",
  modal = true,
  dismissible = true,
  ...props
}: DrawerContentPropsType) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const [hasTitle, setHasTitle] = useState(false);
  const [hasDescription, setHasDescription] = useState(false);

  const onDismissRef = useRef(onDismiss);
  const dismissibleRef = useRef(dismissible);
  useEffect(() => {
    onDismissRef.current = onDismiss;
    dismissibleRef.current = dismissible;
  });
  const dismiss = useCallback(() => {
    if (dismissibleRef.current) onDismissRef.current?.();
  }, []);

  useDialogBehavior({ open, modal, popupRef: contentRef, onDismiss: dismiss });

  const contextValue = useMemo<DialogContextValueType>(
    () => ({ open, dismiss, titleId, descriptionId, setHasTitle, setHasDescription }),
    [open, dismiss, titleId, descriptionId],
  );

  return (
    <DrawerPortal>
      <DialogContext.Provider value={contextValue}>
        <DrawerOverlay open={open} blocking={modal} onDismiss={dismissible ? dismiss : undefined} />
        <div
          ref={contentRef}
          role="dialog"
          aria-modal={modal || undefined}
          aria-labelledby={hasTitle ? titleId : undefined}
          aria-describedby={hasDescription ? descriptionId : undefined}
          tabIndex={-1}
          data-slot="drawer-content"
          data-side={side}
          {...(open ? { "data-open": "" } : { "data-closed": "" })}
          className={cn(
            "bg-background flex h-auto flex-col text-sm data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:mt-24 data-[side=bottom]:max-h-[80vh] data-[side=bottom]:rounded-t-none data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:w-3/4 data-[side=left]:rounded-r-none data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:w-3/4 data-[side=right]:rounded-l-none data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:mb-24 data-[side=top]:max-h-[80vh] data-[side=top]:rounded-b-none data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm group/drawer-content fixed z-50 outline-none",
            "sm:min-w-2xl data-open:animate-in data-closed:animate-out data-closed:fill-mode-forwards duration-200 data-[side=bottom]:slide-in-from-bottom data-[side=bottom]:slide-out-to-bottom data-[side=left]:slide-in-from-left data-[side=left]:slide-out-to-left data-[side=right]:slide-in-from-right data-[side=right]:slide-out-to-right data-[side=top]:slide-in-from-top data-[side=top]:slide-out-to-top",
            className,
          )}
          {...props}
        >
          <div className="bg-muted mx-auto mt-4 hidden h-1.5 w-25 shrink-0 rounded-full group-data-[side=bottom]/drawer-content:block" />
          <DrawerContentContext.Provider value={contentRef}>{children}</DrawerContentContext.Provider>
        </div>
      </DialogContext.Provider>
    </DrawerPortal>
  );
};
DrawerContent.displayName = "DrawerContent";
