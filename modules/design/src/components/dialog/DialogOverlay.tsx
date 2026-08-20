import { cn } from "@module/design/utils/cn";
import { useRef } from "react";

type DialogOverlayPropsType = React.ComponentProps<"div"> & {
  open?: boolean;
  /** When `false` the overlay lets pointer events through to the page. */
  blocking?: boolean;
  /** Called when a click both starts and ends on the overlay itself. */
  onDismiss?: () => void;
};

export const DialogOverlay = ({
  className,
  open = true,
  blocking = true,
  onDismiss,
  ...props
}: DialogOverlayPropsType) => {
  const pointerDownOnOverlay = useRef(false);
  return (
    <div
      role="presentation"
      data-slot="dialog-overlay"
      inert={!open}
      {...(open ? { "data-open": "" } : { "data-closed": "" })}
      onPointerDown={(event) => {
        pointerDownOnOverlay.current = event.target === event.currentTarget;
      }}
      onClick={(event) => {
        if (open && pointerDownOnOverlay.current && event.target === event.currentTarget) onDismiss?.();
        pointerDownOnOverlay.current = false;
      }}
      className={cn(
        "data-open:animate-in data-closed:animate-out data-closed:fill-mode-forwards data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 fixed inset-0 isolate z-50",
        open ? "supports-backdrop-filter:backdrop-blur-xs" : "pointer-events-none",
        !blocking && "pointer-events-none",
        className,
      )}
      {...props}
    />
  );
};
DialogOverlay.displayName = "DialogOverlay";
