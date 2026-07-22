import { useDialogBehavior } from "@module/design/components/dialog/useDialogBehavior";
import { type AnchorAlignType, type AnchorSideType, useAnchorPosition } from "@module/design/hooks/useAnchorPosition";
import { chainHandlers } from "@module/design/utils/chainHandlers";
import { cn } from "@module/design/utils/cn";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { handleMenuNavigation, useDropdownMenuContext } from "./dropdownMenuContext";

type DropdownMenuContentPropsType = React.ComponentProps<"div"> & {
  align?: AnchorAlignType;
  alignOffset?: number;
  side?: AnchorSideType;
  sideOffset?: number;
};

export const DropdownMenuContent = ({
  align = "start",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  className,
  children,
  onKeyDown,
  ...props
}: DropdownMenuContentPropsType) => {
  const context = useDropdownMenuContext();
  const positionerRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const fallbackAnchorRef = useRef<HTMLElement | null>(null);
  const open = context?.open ?? false;

  useAnchorPosition({
    open,
    anchorRef: context?.triggerRef ?? fallbackAnchorRef,
    positionerRef,
    side,
    align,
    sideOffset,
    alignOffset,
  });

  // Escape only — the shared dialog stack keeps ordering correct when the
  // menu is opened inside a dialog or popover.
  useDialogBehavior({ open, modal: false, popupRef, onDismiss: () => context?.closeAll() });

  useEffect(() => {
    if (!open || !context) return;
    const popup = popupRef.current;
    if (!popup) return;
    const unregister = context.registerPopup(popup);
    popup.focus();
    const handlePointerDown = (event: PointerEvent) => {
      if (!context.isInsideMenu(event.target as Node)) context.closeAll();
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      unregister();
      document.removeEventListener("pointerdown", handlePointerDown);
      const active = document.activeElement;
      if (!active || active === document.body || popup.contains(active)) {
        context.triggerRef.current?.focus();
      }
    };
  }, [open, context]);

  if (!open) return null;

  return createPortal(
    <div ref={positionerRef} className="isolate z-50 outline-none" style={{ position: "fixed", top: 0, left: 0 }}>
      <div
        ref={popupRef}
        role="menu"
        tabIndex={-1}
        data-slot="dropdown-menu-content"
        onKeyDown={chainHandlers(onKeyDown, (event: React.KeyboardEvent<HTMLDivElement>) => {
          const popup = popupRef.current;
          if (!popup) return;
          if (event.key === "Tab") {
            event.preventDefault();
            context?.closeAll();
            return;
          }
          if (handleMenuNavigation(popup, event)) event.preventDefault();
        })}
        className={cn(
          "bg-popover text-popover-foreground min-w-32 rounded p-1 z-50 max-h-(--available-height) w-(--anchor-width) origin-(--transform-origin) overflow-x-hidden overflow-y-auto outline-none shadow-none ring-[0.4px] ring-ring-active",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

DropdownMenuContent.displayName = "DropdownMenu.Content";
