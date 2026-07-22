import { cn } from "@module/design/utils/cn";
import { cloneElement, isValidElement, type ReactElement } from "react";

type SidebarGroupActionPropsType = React.ComponentProps<"button"> & {
  /** Element to render as the action instead of the default `button`. */
  render?: ReactElement<Record<string, unknown>>;
};

export const SidebarGroupAction = ({ className, render, children, ...props }: SidebarGroupActionPropsType) => {
  const actionProps = {
    "data-slot": "sidebar-group-action",
    "data-sidebar": "group-action",
    ...props,
    className: cn(
      "text-primary ring-ring hover:bg-muted hover:text-primary absolute top-3.5 right-3 w-5 rounded p-0 focus-visible:ring-2 [&>svg]:size-4 flex aspect-square items-center justify-center outline-hidden transition-transform [&>svg]:shrink-0 after:absolute after:-inset-2 md:after:hidden group-data-[collapsible=icon]:hidden",
      className,
      render?.props.className as string | undefined,
    ),
  };

  if (render && isValidElement(render)) {
    return cloneElement(render, { ...actionProps, children: children ?? render.props.children });
  }
  return (
    <button type="button" {...actionProps}>
      {children}
    </button>
  );
};
SidebarGroupAction.displayName = "Sidebar.GroupAction";
