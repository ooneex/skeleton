import { chainHandlers } from "@module/design/utils/chainHandlers";
import { composeRefs } from "@module/design/utils/composeRefs";
import { cloneElement, isValidElement, type ReactElement, type Ref } from "react";
import { usePopoverContext } from "./popoverContext";

type PopoverTriggerPropsType = React.ComponentProps<"button"> & {
  /** Element to render as the trigger instead of the default `button`. */
  render?: ReactElement<Record<string, unknown>>;
};

export const PopoverTrigger = ({ render, children, ref, onClick, ...props }: PopoverTriggerPropsType) => {
  const context = usePopoverContext();
  const open = context?.open ?? false;

  const triggerProps = {
    "data-slot": "popover-trigger",
    "aria-haspopup": "dialog" as const,
    "aria-expanded": open,
    ...(open ? { "data-popup-open": "" } : {}),
    ...props,
    ref: composeRefs<HTMLElement>(
      context?.triggerRef,
      ref as Ref<HTMLElement>,
      render?.props.ref as Ref<HTMLElement> | undefined,
    ),
    onClick: chainHandlers(onClick, () => context?.setOpen(!open)),
  };

  if (render && isValidElement(render)) {
    return cloneElement(render, { ...triggerProps, children: children ?? render.props.children });
  }
  return (
    <button type="button" {...triggerProps}>
      {children}
    </button>
  );
};

PopoverTrigger.displayName = "Popover.Trigger";
