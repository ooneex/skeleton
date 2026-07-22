import { createContext, type RefObject, useContext } from "react";

export type TooltipProviderContextValueType = {
  /** Milliseconds before a tooltip opens on hover. */
  delay: number;
};

export const TooltipProviderContext = createContext<TooltipProviderContextValueType | null>(null);

export const useTooltipProviderContext = () => useContext(TooltipProviderContext);

export type TooltipContextValueType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: RefObject<HTMLElement | null>;
  /** Open after the configured delay (cancelled by {@link TooltipContextValueType.cancelOpen}). */
  scheduleOpen: () => void;
  cancelOpen: () => void;
};

export const TooltipContext = createContext<TooltipContextValueType | null>(null);

export const useTooltipContext = () => useContext(TooltipContext);
