import { CheckIcon } from "@module/design/icons/outline/ui-layout/sm/CheckIcon";
import { chainHandlers } from "@module/design/utils/chainHandlers";
import { cn } from "@module/design/utils/cn";
import { useDropdownMenuContext, useDropdownMenuRadioGroupContext } from "./dropdownMenuContext";

type DropdownMenuRadioItemPropsType = React.ComponentProps<"div"> & {
  value: string;
  disabled?: boolean;
  /** Close the menu when the item is clicked. Defaults to `false`. */
  closeOnClick?: boolean;
};

export const DropdownMenuRadioItem = ({
  className,
  children,
  value,
  disabled,
  closeOnClick = false,
  onClick,
  onPointerEnter,
  ...props
}: DropdownMenuRadioItemPropsType) => {
  const context = useDropdownMenuContext();
  const group = useDropdownMenuRadioGroupContext();
  const isChecked = group.value === value;
  return (
    <div
      role="menuitemradio"
      aria-checked={isChecked}
      tabIndex={-1}
      data-slot="dropdown-menu-radio-item"
      {...(isChecked ? { "data-checked": "" } : {})}
      {...(disabled ? { "data-disabled": "", "aria-disabled": true } : {})}
      onPointerEnter={chainHandlers(onPointerEnter, (event: React.PointerEvent<HTMLDivElement>) => {
        if (!disabled) event.currentTarget.focus();
      })}
      onClick={(event) => {
        if (disabled) return;
        onClick?.(event);
        if (event.defaultPrevented) return;
        group.onValueChange?.(value);
        if (closeOnClick) context?.closeAll();
      }}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2 rounded py-1.5 pr-8 pl-2 text-sm [&_svg:not([class*='size-'])]:size-4 relative flex cursor-pointer items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    >
      <span
        className="pointer-events-none absolute right-2 flex items-center justify-center"
        data-slot="dropdown-menu-radio-item-indicator"
      >
        {isChecked ? <CheckIcon className="size-3 text-primary" /> : null}
      </span>
      {children}
    </div>
  );
};

DropdownMenuRadioItem.displayName = "DropdownMenu.RadioItem";
