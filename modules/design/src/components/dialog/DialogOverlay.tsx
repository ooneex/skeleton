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
      data-slot="dialog-overlay"
      {...(open ? { "data-open": "" } : { "data-closed": "" })}
      onPointerDown={(event) => {
        pointerDownOnOverlay.current = event.target === event.currentTarget;
      }}
      onClick={(event) => {
        if (pointerDownOnOverlay.current && event.target === event.currentTarget) onDismiss?.();
        pointerDownOnOverlay.current = false;
      }}
      className={cn(
        "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50",
        !blocking && "pointer-events-none",
        className,
      )}
      {...props}
    />
  );
};
DialogOverlay.displayName = "DialogOverlay";
