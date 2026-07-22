import { createContext, type RefObject, useContext } from "react";

export type PopoverContextValueType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: RefObject<HTMLElement | null>;
};

export const PopoverContext = createContext<PopoverContextValueType | null>(null);

export const usePopoverContext = () => useContext(PopoverContext);
