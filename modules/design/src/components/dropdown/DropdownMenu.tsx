import { useControlledState } from "@module/design/hooks/useControlledState";
import { type ReactNode, useCallback, useMemo, useRef } from "react";
import { DropdownMenuCheckboxItem } from "./DropdownMenuCheckboxItem";
import { DropdownMenuContent } from "./DropdownMenuContent";
import { DropdownMenuGroup } from "./DropdownMenuGroup";
import { DropdownMenuItem } from "./DropdownMenuItem";
import { DropdownMenuLabel } from "./DropdownMenuLabel";
import { DropdownMenuPortal } from "./DropdownMenuPortal";
import { DropdownMenuRadioGroup } from "./DropdownMenuRadioGroup";
import { DropdownMenuRadioItem } from "./DropdownMenuRadioItem";
import { DropdownMenuSeparator } from "./DropdownMenuSeparator";
import { DropdownMenuShortcut } from "./DropdownMenuShortcut";
import { DropdownMenuSub } from "./DropdownMenuSub";
import { DropdownMenuSubContent } from "./DropdownMenuSubContent";
import { DropdownMenuSubTrigger } from "./DropdownMenuSubTrigger";
import { DropdownMenuTrigger } from "./DropdownMenuTrigger";
import { DropdownMenuContext, type DropdownMenuContextValueType } from "./dropdownMenuContext";

type DropdownMenuRootPropsType = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
};

const DropdownMenuRoot = ({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  children,
}: DropdownMenuRootPropsType) => {
  const [open, setOpen] = useControlledState({ value: openProp, defaultValue: defaultOpen, onChange: onOpenChange });
  const triggerRef = useRef<HTMLElement | null>(null);
  const popupsRef = useRef(new Set<HTMLElement>());

  const registerPopup = useCallback((popup: HTMLElement) => {
    popupsRef.current.add(popup);
    return () => {
      popupsRef.current.delete(popup);
    };
  }, []);

  const isInsideMenu = useCallback((target: Node) => {
    if (triggerRef.current?.contains(target)) return true;
    for (const popup of popupsRef.current) {
      if (popup.contains(target)) return true;
    }
    return false;
  }, []);

  const closeAll = useCallback(() => setOpen(false), [setOpen]);

  const value = useMemo<DropdownMenuContextValueType>(
    () => ({ open, setOpen, triggerRef, registerPopup, isInsideMenu, closeAll }),
    [open, setOpen, registerPopup, isInsideMenu, closeAll],
  );

  return <DropdownMenuContext.Provider value={value}>{children}</DropdownMenuContext.Provider>;
};

/**
 * Dropdown menu built with the compound component pattern.
 *
 * Access sub-components as static properties, e.g.
 * `DropdownMenu.Trigger`, `DropdownMenu.Content`, `DropdownMenu.Item`.
 */
export const DropdownMenu = Object.assign(DropdownMenuRoot, {
  Portal: DropdownMenuPortal,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Group: DropdownMenuGroup,
  Label: DropdownMenuLabel,
  Item: DropdownMenuItem,
  Sub: DropdownMenuSub,
  SubTrigger: DropdownMenuSubTrigger,
  SubContent: DropdownMenuSubContent,
  CheckboxItem: DropdownMenuCheckboxItem,
  RadioGroup: DropdownMenuRadioGroup,
  RadioItem: DropdownMenuRadioItem,
  Separator: DropdownMenuSeparator,
  Shortcut: DropdownMenuShortcut,
});

DropdownMenuRoot.displayName = "DropdownMenu";
