import { type AnchorAlignType, type AnchorSideType, useAnchorPosition } from "@module/design/hooks/useAnchorPosition";
import { chainHandlers } from "@module/design/utils/chainHandlers";
import { cn } from "@module/design/utils/cn";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { handleMenuNavigation, useDropdownMenuContext, useDropdownMenuSubContext } from "./dropdownMenuContext";

type DropdownMenuSubContentPropsType = React.ComponentProps<"div"> & {
  align?: AnchorAlignType;
  alignOffset?: number;
  side?: AnchorSideType;
  sideOffset?: number;
};

export const DropdownMenuSubContent = ({
  align = "start",
  alignOffset = -3,
  side = "right",
  sideOffset = 0,
  className,
  children,
  onKeyDown,
  onPointerEnter,
  onPointerLeave,
  ...props
}: DropdownMenuSubContentPropsType) => {
  const context = useDropdownMenuContext();
  const sub = useDropdownMenuSubContext();
  const positionerRef = useRef<HTMLDivElement>(null);
  const fallbackPopupRef = useRef<HTMLDivElement | null>(null);
  const fallbackAnchorRef = useRef<HTMLElement | null>(null);
  const popupRef = sub?.popupRef ?? fallbackPopupRef;
  const open = sub?.open ?? false;

  useAnchorPosition({
    open,
    anchorRef: sub?.triggerRef ?? fallbackAnchorRef,
    positionerRef,
    side,
    align,
    sideOffset,
    alignOffset,
  });

  // Escape is handled by the root DropdownMenuContent and closes the whole
  // tree; the sub popup only registers itself for outside-click detection.
  useEffect(() => {
    if (!open || !context) return;
    const popup = popupRef.current;
    if (!popup) return;
    return context.registerPopup(popup);
  }, [open, context, popupRef]);

  if (!open) return null;

  return createPortal(
    <div ref={positionerRef} className="isolate z-50 outline-none" style={{ position: "fixed", top: 0, left: 0 }}>
      <div
        ref={popupRef}
        role="menu"
        tabIndex={-1}
        data-slot="dropdown-menu-sub-content"
        onPointerEnter={chainHandlers(onPointerEnter, () => sub?.cancelClose())}
        onPointerLeave={chainHandlers(onPointerLeave, () => sub?.scheduleClose())}
        onKeyDown={chainHandlers(onKeyDown, (event: React.KeyboardEvent<HTMLDivElement>) => {
          const popup = popupRef.current;
          if (!popup) return;
          if (event.key === "Tab") {
            event.preventDefault();
            context?.closeAll();
            return;
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            sub?.setOpen(false);
            sub?.triggerRef.current?.focus();
            return;
          }
          if (handleMenuNavigation(popup, event)) event.preventDefault();
        })}
        className={cn(
          "bg-popover text-popover-foreground min-w-32 rounded p-1 z-50 max-h-(--available-height) w-(--anchor-width) origin-(--transform-origin) overflow-x-hidden overflow-y-auto outline-none shadow-none ring-[0.4px] ring-ring-active",
          "bg-popover text-popover-foreground min-w-24 rounded p-1 w-auto shadow-md shadow-black/20",
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

DropdownMenuSubContent.displayName = "DropdownMenu.SubContent";
