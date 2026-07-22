import { cn } from "@module/design/utils/cn";
import { cloneElement, isValidElement, type ReactElement } from "react";

type SidebarMenuSubButtonPropsType = React.ComponentProps<"a"> & {
  /** Element to render as the button instead of the default `a`. */
  render?: ReactElement<Record<string, unknown>>;
  size?: "sm" | "md";
  isActive?: boolean;
};

export const SidebarMenuSubButton = ({
  render,
  size = "md",
  isActive = false,
  className,
  children,
  ...props
}: SidebarMenuSubButtonPropsType) => {
  const buttonProps = {
    "data-slot": "sidebar-menu-sub-button",
    "data-sidebar": "menu-sub-button",
    "data-size": size,
    ...(isActive ? { "data-active": "" } : {}),
    ...props,
    className: cn(
      "text-primary ring-ring hover:bg-muted hover:text-primary active:bg-muted active:text-primary data-active:bg-muted data-active:text-primary h-7 gap-2 rounded px-2 focus-visible:ring-2 text-sm [&>svg]:size-4 flex min-w-0 -translate-x-px items-center overflow-hidden outline-hidden group-data-[collapsible=icon]:hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:shrink-0",
      className,
      render?.props.className as string | undefined,
    ),
  };

  if (render && isValidElement(render)) {
    return cloneElement(render, { ...buttonProps, children: children ?? render.props.children });
  }
  return <a {...buttonProps}>{children}</a>;
};
SidebarMenuSubButton.displayName = "Sidebar.MenuSubButton";
