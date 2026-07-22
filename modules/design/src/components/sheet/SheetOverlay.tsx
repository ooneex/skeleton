import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import { cn } from "@module/design/utils/cn";

export const SheetOverlay = ({ className, ...props }: SheetPrimitive.Backdrop.Props) => {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/30 duration-100 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50",
        className,
      )}
      {...props}
    />
  );
};
SheetOverlay.displayName = "SheetOverlay";
