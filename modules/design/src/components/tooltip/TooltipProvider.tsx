import { type ReactNode, useMemo } from "react";
import { TooltipProviderContext } from "./tooltipContext";

type TooltipProviderPropsType = {
  /** Milliseconds before tooltips inside the provider open on hover. */
  delay?: number;
  children?: ReactNode;
};

export const TooltipProvider = ({ delay = 0, children }: TooltipProviderPropsType) => {
  const value = useMemo(() => ({ delay }), [delay]);
  return <TooltipProviderContext.Provider value={value}>{children}</TooltipProviderContext.Provider>;
};

TooltipProvider.displayName = "Tooltip.Provider";
