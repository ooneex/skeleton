import { Tooltip } from "@module/design/components/tooltip/Tooltip";
import { cn } from "@module/design/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { cloneElement, isValidElement, type ReactElement } from "react";
import { useSidebar } from "./useSidebar";

export const sidebarMenuButtonVariants = cva(
  "ring-ring hover:bg-muted hover:text-primary active:bg-muted active:text-primary data-active:bg-muted data-active:text-primary data-open:hover:bg-muted data-open:hover:text-primary gap-2 rounded p-2 text-left text-sm group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 data-active:font-medium peer/menu-button flex w-full items-center overflow-hidden outline-hidden group/menu-button disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-muted hover:text-primary",
        outline: "bg-background hover:bg-muted hover:text-primary ring-1 ring-ring hover:ring-muted",
      },
      size: {
        xs: "h-6 text-xs",
        sm: "h-7 text-xs",
        md: "h-8 text-sm",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

type SidebarMenuButtonPropsType = React.ComponentProps<"button"> & {
  /** Element to render as the button instead of the default `button`. */
  render?: ReactElement<Record<string, unknown>>;
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof Tooltip.Content>;
} & VariantProps<typeof sidebarMenuButtonVariants>;

export const SidebarMenuButton = ({
  render,
  isActive = false,
  variant = "default",
  size = "md",
  tooltip,
  className,
  children,
  ...props
}: SidebarMenuButtonPropsType) => {
  const { isMobile, state } = useSidebar();
  const showTooltip = tooltip && state === "collapsed" && !isMobile;

  const buttonProps = {
    "data-slot": "sidebar-menu-button",
    "data-sidebar": "menu-button",
    "data-size": size,
    ...(isActive ? { "data-active": "" } : {}),
    ...props,
    className: cn(
      sidebarMenuButtonVariants({ variant, size }),
      className,
      render?.props.className as string | undefined,
    ),
  };

  const button =
    render && isValidElement(render) ? (
      cloneElement(render, { ...buttonProps, children: children ?? render.props.children })
    ) : (
      <button type="button" {...buttonProps}>
        {children}
      </button>
    );

  if (!showTooltip) {
    return button;
  }

  const tooltipProps = typeof tooltip === "string" ? { children: tooltip } : tooltip;

  return (
    <Tooltip>
      <Tooltip.Trigger render={<span />}>{button}</Tooltip.Trigger>
      <Tooltip.Content
        side="right"
        sideOffset={4}
        align="center"
        className="bg-background text-primary"
        {...tooltipProps}
      />
    </Tooltip>
  );
};
SidebarMenuButton.displayName = "Sidebar.MenuButton";
