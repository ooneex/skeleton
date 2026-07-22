import { useControlledState } from "@module/design/hooks/useControlledState";
import { type ReactNode, useCallback, useEffect, useMemo, useRef } from "react";
import { DropdownMenuSubContext, type DropdownMenuSubContextValueType } from "./dropdownMenuContext";

/** Milliseconds the pointer may travel between the sub trigger and its popup. */
const SUBMENU_CLOSE_DELAY = 150;

type DropdownMenuSubPropsType = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
};

export const DropdownMenuSub = ({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  children,
}: DropdownMenuSubPropsType) => {
  const [open, setOpen] = useControlledState({ value: openProp, defaultValue: defaultOpen, onChange: onOpenChange });
  const triggerRef = useRef<HTMLElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current !== null) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => setOpen(false), SUBMENU_CLOSE_DELAY);
  }, [cancelClose, setOpen]);

  useEffect(() => cancelClose, [cancelClose]);

  const value = useMemo<DropdownMenuSubContextValueType>(
    () => ({ open, setOpen, triggerRef, popupRef, cancelClose, scheduleClose }),
    [open, setOpen, cancelClose, scheduleClose],
  );

  return <DropdownMenuSubContext.Provider value={value}>{children}</DropdownMenuSubContext.Provider>;
};

DropdownMenuSub.displayName = "DropdownMenu.Sub";
