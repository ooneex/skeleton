import { useControlledState } from "@module/design/hooks/useControlledState";
import { type ReactNode, useMemo, useRef } from "react";
import { PopoverContent } from "./PopoverContent";
import { PopoverDescription } from "./PopoverDescription";
import { PopoverHeader } from "./PopoverHeader";
import { PopoverTitle } from "./PopoverTitle";
import { PopoverTrigger } from "./PopoverTrigger";
import { PopoverContext, type PopoverContextValueType } from "./popoverContext";

type PopoverRootPropsType = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
};

const PopoverRoot = ({ open: openProp, defaultOpen = false, onOpenChange, children }: PopoverRootPropsType) => {
  const [open, setOpen] = useControlledState({ value: openProp, defaultValue: defaultOpen, onChange: onOpenChange });
  const triggerRef = useRef<HTMLElement | null>(null);

  const value = useMemo<PopoverContextValueType>(() => ({ open, setOpen, triggerRef }), [open, setOpen]);

  return <PopoverContext.Provider value={value}>{children}</PopoverContext.Provider>;
};

/**
 * Popover compound component.
 *
 * Use the attached sub-components (`Popover.Trigger`, `Popover.Content`,
 * `Popover.Header`, `Popover.Title`, `Popover.Description`) to compose a
 * popover.
 */
export const Popover = Object.assign(PopoverRoot, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Header: PopoverHeader,
  Title: PopoverTitle,
  Description: PopoverDescription,
});

PopoverRoot.displayName = "Popover";
