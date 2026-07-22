import { chainHandlers } from "@module/design/utils/chainHandlers";
import { composeRefs } from "@module/design/utils/composeRefs";
import { cloneElement, isValidElement, type ReactElement, type Ref } from "react";
import { useDropdownMenuContext } from "./dropdownMenuContext";

type DropdownMenuTriggerPropsType = React.ComponentProps<"button"> & {
  /** Element to render as the trigger instead of the default `button`. */
  render?: ReactElement<Record<string, unknown>>;
};

export const DropdownMenuTrigger = ({
  render,
  children,
  ref,
  onClick,
  onKeyDown,
  ...props
}: DropdownMenuTriggerPropsType) => {
  const context = useDropdownMenuContext();
  const open = context?.open ?? false;

  const triggerProps = {
    "data-slot": "dropdown-menu-trigger",
    "aria-haspopup": "menu" as const,
    "aria-expanded": open,
    ...(open ? { "data-popup-open": "" } : {}),
    ...props,
    ref: composeRefs<HTMLElement>(
      context?.triggerRef,
      ref as Ref<HTMLElement>,
      render?.props.ref as Ref<HTMLElement> | undefined,
    ),
    onClick: chainHandlers(onClick, () => context?.setOpen(!open)),
    onKeyDown: chainHandlers(onKeyDown, (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === "ArrowDown" && !open) {
        event.preventDefault();
        context?.setOpen(true);
      }
    }),
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

DropdownMenuTrigger.displayName = "DropdownMenu.Trigger";
