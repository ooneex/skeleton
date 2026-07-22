import { chainHandlers } from "@module/design/utils/chainHandlers";
import { composeRefs } from "@module/design/utils/composeRefs";
import { cloneElement, isValidElement, type ReactElement, type Ref } from "react";
import { useTooltipContext } from "./tooltipContext";

type TooltipTriggerPropsType = React.HTMLAttributes<HTMLElement> & {
  ref?: Ref<HTMLElement>;
  /** Element to render as the trigger instead of the default `span`. */
  render?: ReactElement<Record<string, unknown>>;
};

export const TooltipTrigger = ({
  render,
  children,
  ref,
  onPointerEnter,
  onPointerLeave,
  onPointerDown,
  onFocus,
  onBlur,
  ...props
}: TooltipTriggerPropsType) => {
  const context = useTooltipContext();

  const close = () => {
    context?.cancelOpen();
    context?.setOpen(false);
  };

  const triggerProps = {
    "data-slot": "tooltip-trigger",
    ...(context?.open ? { "data-popup-open": "" } : {}),
    ...props,
    ref: composeRefs<HTMLElement>(context?.triggerRef, ref, render?.props.ref as Ref<HTMLElement> | undefined),
    onPointerEnter: chainHandlers(onPointerEnter, (event: React.PointerEvent<HTMLElement>) => {
      if (event.pointerType !== "touch") context?.scheduleOpen();
    }),
    onPointerLeave: chainHandlers(onPointerLeave, close),
    onPointerDown: chainHandlers(onPointerDown, close),
    onFocus: chainHandlers(onFocus, () => context?.setOpen(true)),
    onBlur: chainHandlers(onBlur, close),
  };

  if (render && isValidElement(render)) {
    return cloneElement(render, { ...triggerProps, children: children ?? render.props.children });
  }
  return <span {...triggerProps}>{children}</span>;
};

TooltipTrigger.displayName = "Tooltip.Trigger";
