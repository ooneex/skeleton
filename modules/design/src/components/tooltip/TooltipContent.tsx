import { type AnchorAlignType, type AnchorSideType, useAnchorPosition } from "@module/design/hooks/useAnchorPosition";
import { cn } from "@module/design/utils/cn";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useTooltipContext } from "./tooltipContext";

type TooltipContentPropsType = React.ComponentProps<"div"> & {
  side?: AnchorSideType;
  sideOffset?: number;
  align?: AnchorAlignType;
  alignOffset?: number;
};

export const TooltipContent = ({
  className,
  side = "top",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  children,
  ...props
}: TooltipContentPropsType) => {
  const context = useTooltipContext();
  const positionerRef = useRef<HTMLDivElement>(null);
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

  const setOpen = context?.setOpen;
  useEffect(() => {
    if (!open || !setOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, setOpen]);

  if (!open) return null;

  return createPortal(
    <div ref={positionerRef} className="isolate z-50" style={{ position: "fixed", top: 0, left: 0 }}>
      <div
        role="tooltip"
        data-slot="tooltip-content"
        className={cn(
          "rounded px-3 py-1.5 text-sm bg-white text-foreground z-50 w-fit max-w-xs origin-(--transform-origin)",
          "font-normal shadow-md shadow-black/20",
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

TooltipContent.displayName = "Tooltip.Content";
