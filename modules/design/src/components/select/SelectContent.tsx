import { Select as SelectPrimitive } from "@base-ui/react/select";
import { ScrollArea } from "@module/design/components/scroll-area";
import { cn } from "@module/design/utils/cn";
import type * as React from "react";

type SelectContentPropsType = SelectPrimitive.Popup.Props &
  Pick<
    SelectPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger" | "collisionPadding"
  > & {
    container?: HTMLElement | null | React.RefObject<HTMLElement | null>;
  };

/** The popup container holding the list of select items. */
export const SelectContent = ({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "start",
  alignOffset = 0,
  alignItemWithTrigger = false,
  collisionPadding = 15,
  container,
  ...props
}: SelectContentPropsType) => {
  return (
    <SelectPrimitive.Portal container={container}>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        collisionPadding={collisionPadding}
        className="isolate z-50"
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          className={cn(
            "bg-popover text-popover-foreground min-w-36 rounded p-1 relative isolate z-50 overflow-hidden w-(--anchor-width) origin-(--transform-origin) ring ring-ring-active",
            className,
          )}
          {...props}
        >
          <ScrollArea viewportClassName="h-auto max-h-(--available-height)">
            <SelectPrimitive.List>{children}</SelectPrimitive.List>
          </ScrollArea>
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
};

SelectContent.displayName = "Select.Content";
