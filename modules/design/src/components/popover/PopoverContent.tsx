import { DialogContext, type DialogContextValueType } from "@module/design/components/dialog/DialogContext";
import { useDialogBehavior } from "@module/design/components/dialog/useDialogBehavior";
import { type AnchorAlignType, type AnchorSideType, useAnchorPosition } from "@module/design/hooks/useAnchorPosition";
import { cn } from "@module/design/utils/cn";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePopoverContext } from "./popoverContext";

type PopoverContentPropsType = React.ComponentProps<"div"> & {
  side?: AnchorSideType;
  sideOffset?: number;
  align?: AnchorAlignType;
  alignOffset?: number;
  container?: HTMLElement | null | React.RefObject<HTMLElement | null>;
};

export const PopoverContent = ({
  className,
  align = "center",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  container,
  children,
  ...props
}: PopoverContentPropsType) => {
  const context = usePopoverContext();
  const positionerRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const fallbackAnchorRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();
  const [hasTitle, setHasTitle] = useState(false);
  const [hasDescription, setHasDescription] = useState(false);

  const open = context?.open ?? false;
  const triggerRef = context?.triggerRef ?? fallbackAnchorRef;
  const setOpen = context?.setOpen;
  const dismiss = useCallback(() => setOpen?.(false), [setOpen]);

  useAnchorPosition({ open, anchorRef: triggerRef, positionerRef, side, align, sideOffset, alignOffset });

  // Escape only — non-modal, so no focus trap or scroll lock. Registering in
  // the shared dialog stack keeps Escape ordering correct inside dialogs.
  useDialogBehavior({ open, modal: false, popupRef, onDismiss: dismiss });

  useEffect(() => {
    if (!open) return;
    const popup = popupRef.current;
    popup?.focus();
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (popup?.contains(target) || triggerRef.current?.contains(target)) return;
      dismiss();
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      const active = document.activeElement;
      if (!active || active === document.body || popup?.contains(active)) {
        triggerRef.current?.focus();
      }
    };
  }, [open, dismiss, triggerRef]);

  const contextValue = useMemo<DialogContextValueType>(
    () => ({ open, dismiss, titleId, descriptionId, setHasTitle, setHasDescription }),
    [open, dismiss, titleId, descriptionId],
  );

  if (!open) return null;

  const resolvedContainer = container && "current" in container ? container.current : container;

  return createPortal(
    <DialogContext.Provider value={contextValue}>
      <div ref={positionerRef} className="isolate z-50" style={{ position: "fixed", top: 0, left: 0 }}>
        <div
          ref={popupRef}
          role="dialog"
          aria-labelledby={hasTitle ? titleId : undefined}
          aria-describedby={hasDescription ? descriptionId : undefined}
          tabIndex={-1}
          data-slot="popover-content"
          className={cn(
            "bg-popover text-popover-foreground flex flex-col gap-4 rounded p-4 text-sm shadow-none ring-[0.4px] ring-ring-active z-50 min-w-(--anchor-width) origin-(--transform-origin) outline-hidden",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </div>
    </DialogContext.Provider>,
    resolvedContainer ?? document.body,
  );
};

PopoverContent.displayName = "Popover.Content";
