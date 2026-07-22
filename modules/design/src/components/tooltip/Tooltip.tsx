import { useControlledState } from "@module/design/hooks/useControlledState";
import { type ReactNode, useCallback, useEffect, useMemo, useRef } from "react";
import { TooltipContent } from "./TooltipContent";
import { TooltipProvider } from "./TooltipProvider";
import { TooltipTrigger } from "./TooltipTrigger";
import { TooltipContext, type TooltipContextValueType, useTooltipProviderContext } from "./tooltipContext";

type TooltipRootPropsType = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Milliseconds before the tooltip opens on hover. Falls back to the provider delay. */
  delay?: number;
  children?: ReactNode;
};

const TooltipStateRoot = ({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  delay,
  children,
}: TooltipRootPropsType) => {
  const providerContext = useTooltipProviderContext();
  const openDelay = delay ?? providerContext?.delay ?? 0;
  const [open, setOpen] = useControlledState({ value: openProp, defaultValue: defaultOpen, onChange: onOpenChange });
  const triggerRef = useRef<HTMLElement | null>(null);
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelOpen = useCallback(() => {
    if (openTimerRef.current !== null) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
  }, []);

  const scheduleOpen = useCallback(() => {
    cancelOpen();
    if (openDelay <= 0) {
      setOpen(true);
      return;
    }
    openTimerRef.current = setTimeout(() => setOpen(true), openDelay);
  }, [cancelOpen, openDelay, setOpen]);

  useEffect(() => cancelOpen, [cancelOpen]);

  const value = useMemo<TooltipContextValueType>(
    () => ({ open, setOpen, triggerRef, scheduleOpen, cancelOpen }),
    [open, setOpen, scheduleOpen, cancelOpen],
  );

  return <TooltipContext.Provider value={value}>{children}</TooltipContext.Provider>;
};

const TooltipRoot = (props: TooltipRootPropsType) => {
  return (
    <TooltipProvider>
      <TooltipStateRoot {...props} />
    </TooltipProvider>
  );
};

/**
 * Tooltip compound component.
 *
 * The root already wraps its children in a `Tooltip.Provider`. Use the
 * attached sub-components (`Tooltip.Trigger`, `Tooltip.Content`, etc.) to
 * compose a tooltip.
 */
export const Tooltip = Object.assign(TooltipRoot, {
  Provider: TooltipProvider,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
});

TooltipRoot.displayName = "Tooltip";
