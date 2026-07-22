import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import { cn } from "@module/design/utils/cn";
import { forwardRef } from "react";
import { ScrollBar } from "./ScrollBar";

type ScrollAreaPropsType = ScrollAreaPrimitive.Root.Props & {
  hideScrollbar?: boolean;
  /** Applied to the scrolling viewport — use it to cap the scroll height (e.g. `max-h-*`). */
  viewportClassName?: string;
};

const ScrollAreaRoot = forwardRef<HTMLDivElement, ScrollAreaPropsType>(
  ({ className, children, hideScrollbar, viewportClassName, ...props }, ref) => {
    return (
      <ScrollAreaPrimitive.Root
        ref={ref}
        data-slot="scroll-area"
        className={cn(
          "relative overflow-hidden",
          "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-2 before:bg-linear-to-b before:from-black/3 before:to-transparent before:opacity-0 before:transition-opacity data-overflow-y-start:before:opacity-100",
          "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:h-2 after:bg-linear-to-t after:from-black/3 after:to-transparent after:opacity-0 after:transition-opacity data-overflow-y-end:after:opacity-100",
          className,
        )}
        {...props}
      >
        <ScrollAreaPrimitive.Viewport
          data-slot="scroll-area-viewport"
          className={cn(
            "focus-visible:ring-ring/50 h-full w-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            viewportClassName,
          )}
        >
          {children}
        </ScrollAreaPrimitive.Viewport>
        {!hideScrollbar && <ScrollBar />}
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaPrimitive.Root>
    );
  },
);

ScrollAreaRoot.displayName = "ScrollArea";

/**
 * Compound component. The scrollbar sub-component is attached as a property on
 * `ScrollArea`, so a single import exposes the whole API:
 *
 * ```tsx
 * <ScrollArea className="h-72">
 *   {content}
 * </ScrollArea>
 * ```
 *
 * The default vertical scrollbar renders automatically; pass `hideScrollbar` to
 * suppress it, or use `<ScrollArea.Bar orientation="horizontal" />` for custom
 * scrollbar placement.
 */
export const ScrollArea = Object.assign(ScrollAreaRoot, { Bar: ScrollBar });
