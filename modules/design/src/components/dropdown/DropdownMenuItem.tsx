import { chainHandlers } from "@module/design/utils/chainHandlers";
import { cn } from "@module/design/utils/cn";
import { useDropdownMenuContext } from "./dropdownMenuContext";

type DropdownMenuItemPropsType = React.ComponentProps<"div"> & {
  inset?: boolean;
  variant?: "default" | "destructive";
  disabled?: boolean;
  /** Close the menu when the item is clicked. Defaults to `true`. */
  closeOnClick?: boolean;
};

export const DropdownMenuItem = ({
  className,
  inset,
  variant = "default",
  disabled,
  closeOnClick = true,
  onClick,
  onPointerEnter,
  ...props
}: DropdownMenuItemPropsType) => {
  const context = useDropdownMenuContext();
  return (
    <div
      role="menuitem"
      tabIndex={-1}
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      {...(disabled ? { "data-disabled": "", "aria-disabled": true } : {})}
      onPointerEnter={chainHandlers(onPointerEnter, (event: React.PointerEvent<HTMLDivElement>) => {
        if (!disabled) event.currentTarget.focus();
      })}
      onClick={(event) => {
        if (disabled) return;
        onClick?.(event);
        if (closeOnClick && !event.defaultPrevented) context?.closeAll();
      }}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded px-2 py-1.5 text-sm [&_svg:not([class*='size-'])]:size-4 group/dropdown-menu-item relative flex cursor-pointer items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  );
};

DropdownMenuItem.displayName = "DropdownMenu.Item";
