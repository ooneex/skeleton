import { createContext, type RefObject, useContext } from "react";

export type DropdownMenuContextValueType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: RefObject<HTMLElement | null>;
  /** Track every popup element of the menu tree (root + submenus) for outside-click detection. */
  registerPopup: (popup: HTMLElement) => () => void;
  isInsideMenu: (target: Node) => boolean;
  /** Close the entire menu tree. */
  closeAll: () => void;
};

export const DropdownMenuContext = createContext<DropdownMenuContextValueType | null>(null);

export const useDropdownMenuContext = () => useContext(DropdownMenuContext);

export type DropdownMenuSubContextValueType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: RefObject<HTMLElement | null>;
  popupRef: RefObject<HTMLDivElement | null>;
  cancelClose: () => void;
  /** Close shortly after the pointer leaves both the sub trigger and its popup. */
  scheduleClose: () => void;
};

export const DropdownMenuSubContext = createContext<DropdownMenuSubContextValueType | null>(null);

export const useDropdownMenuSubContext = () => useContext(DropdownMenuSubContext);

export type DropdownMenuRadioGroupContextValueType = {
  value?: string;
  onValueChange?: (value: string) => void;
};

export const DropdownMenuRadioGroupContext = createContext<DropdownMenuRadioGroupContextValueType>({});

export const useDropdownMenuRadioGroupContext = () => useContext(DropdownMenuRadioGroupContext);

/** Matches menuitem, menuitemcheckbox and menuitemradio elements that are enabled. */
const MENU_ITEM_SELECTOR = '[role^="menuitem"]:not([data-disabled])';

export const getMenuItems = (popup: HTMLElement) => Array.from(popup.querySelectorAll<HTMLElement>(MENU_ITEM_SELECTOR));

/**
 * Arrow/Home/End roving focus and Enter/Space activation inside a menu popup.
 * Returns `true` when the key was handled (caller should `preventDefault`).
 */
export const handleMenuNavigation = (popup: HTMLElement, event: React.KeyboardEvent) => {
  const items = getMenuItems(popup);
  const active = document.activeElement as HTMLElement | null;
  const index = active ? items.indexOf(active) : -1;

  switch (event.key) {
    case "ArrowDown":
      (items[index + 1] ?? items[0])?.focus();
      return true;
    case "ArrowUp":
      (index > 0 ? items[index - 1] : items[items.length - 1])?.focus();
      return true;
    case "Home":
      items[0]?.focus();
      return true;
    case "End":
      items[items.length - 1]?.focus();
      return true;
    case "Enter":
    case " ":
      if (index >= 0) {
        active?.click();
        return true;
      }
      return false;
    default:
      return false;
  }
};
