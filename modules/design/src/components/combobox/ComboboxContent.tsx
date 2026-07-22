import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { ScrollArea } from "@module/design/components/scroll-area";
import { cn } from "@module/design/utils/cn";
import type * as React from "react";

type ComboboxContentPropsType = ComboboxPrimitive.Popup.Props &
  Pick<ComboboxPrimitive.Positioner.Props, "side" | "align" | "sideOffset" | "alignOffset" | "anchor"> & {
    container?: HTMLElement | null | React.RefObject<HTMLElement | null>;
  };

export const ComboboxContent = ({
  className,
  children,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  anchor,
  container,
  ...props
}: ComboboxContentPropsType) => {
  return (
    <ComboboxPrimitive.Portal container={container}>
      <ComboboxPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        anchor={anchor}
        className="isolate z-50"
      >
        <ComboboxPrimitive.Popup
          data-slot="combobox-content"
          data-chips={!!anchor}
          className={cn(
            "bg-popover text-popover-foreground flex flex-col gap-4 rounded text-sm shadow-none ring ring-ring-active p-1 z-50 min-w-(--anchor-width) origin-(--transform-origin) outline-hidden",
            className,
          )}
          {...props}
        >
          <ScrollArea viewportClassName="h-auto max-h-(--available-height)">{children}</ScrollArea>
        </ComboboxPrimitive.Popup>
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  );
};
ComboboxContent.displayName = "Combobox.Content";
