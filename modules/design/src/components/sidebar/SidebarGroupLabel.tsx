import { cn } from "@module/design/utils/cn";
import { cloneElement, isValidElement, type ReactElement } from "react";

type SidebarGroupLabelPropsType = React.ComponentProps<"div"> & {
  /** Element to render as the label instead of the default `div`. */
  render?: ReactElement<Record<string, unknown>>;
};

export const SidebarGroupLabel = ({ className, render, children, ...props }: SidebarGroupLabelPropsType) => {
  const labelProps = {
    "data-slot": "sidebar-group-label",
    "data-sidebar": "group-label",
    ...props,
    className: cn(
      "text-primary/70 ring-ring h-8 rounded text-xs font-medium transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 flex shrink-0 items-center outline-hidden [&>svg]:shrink-0",
      className,
      render?.props.className as string | undefined,
    ),
  };

  if (render && isValidElement(render)) {
    return cloneElement(render, { ...labelProps, children: children ?? render.props.children });
  }
  return <div {...labelProps}>{children}</div>;
};
SidebarGroupLabel.displayName = "Sidebar.GroupLabel";
