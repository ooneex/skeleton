import { cn } from "@module/design/utils/cn";
import { cloneElement, isValidElement, type ReactElement } from "react";

type SidebarMenuActionPropsType = React.ComponentProps<"button"> & {
  /** Element to render as the action instead of the default `button`. */
  render?: ReactElement<Record<string, unknown>>;
  showOnHover?: boolean;
};

export const SidebarMenuAction = ({
  className,
  render,
  showOnHover = false,
  children,
  ...props
}: SidebarMenuActionPropsType) => {
  const actionProps = {
    "data-slot": "sidebar-menu-action",
    "data-sidebar": "menu-action",
    ...props,
    className: cn(
      "text-primary ring-ring hover:bg-muted hover:text-primary peer-hover/menu-button:text-primary absolute top-1.5 right-1 aspect-square w-5 rounded p-0 peer-data-[size=md]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 focus-visible:ring-2 [&>svg]:size-4 flex items-center justify-center outline-hidden transition-transform group-data-[collapsible=icon]:hidden after:absolute after:-inset-2 md:after:hidden [&>svg]:shrink-0",
      showOnHover &&
        "peer-data-active/menu-button:text-primary group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-open:opacity-100 md:opacity-0",
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
SidebarMenuAction.displayName = "Sidebar.MenuAction";
