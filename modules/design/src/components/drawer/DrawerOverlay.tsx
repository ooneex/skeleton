import { cn } from "@module/design/utils/cn";
import { useRef } from "react";

type DrawerOverlayPropsType = React.ComponentProps<"div"> & {
  open?: boolean;
  /** When `false` the overlay lets pointer events through to the page. */
  blocking?: boolean;
  /** Called when a click both starts and ends on the overlay itself. */
  onDismiss?: () => void;
};

export const DrawerOverlay = ({
  className,
  open = true,
  blocking = true,
  onDismiss,
  ...props
}: DrawerOverlayPropsType) => {
  const pointerDownOnOverlay = useRef(false);
  return (
    <div
      data-slot="drawer-overlay"
      {...(open ? { "data-open": "" } : { "data-closed": "" })}
      onPointerDown={(event) => {
        pointerDownOnOverlay.current = event.target === event.currentTarget;
      }}
      onClick={(event) => {
        if (pointerDownOnOverlay.current && event.target === event.currentTarget) onDismiss?.();
        pointerDownOnOverlay.current = false;
      }}
      className={cn(
        "data-open:animate-in data-closed:animate-out data-closed:fill-mode-forwards data-closed:fade-out-0 data-open:fade-in-0 bg-black/30 duration-200 supports-backdrop-filter:backdrop-blur-none fixed inset-0 z-50",
        !blocking && "pointer-events-none",
        className,
      )}
      {...props}
    />
  );
};
DrawerOverlay.displayName = "DrawerOverlay";
