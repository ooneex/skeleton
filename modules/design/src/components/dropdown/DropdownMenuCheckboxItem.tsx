import { useControlledState } from "@module/design/hooks/useControlledState";
import { CheckIcon } from "@module/design/icons/outline/ui-layout/sm/CheckIcon";
import { chainHandlers } from "@module/design/utils/chainHandlers";
import { cn } from "@module/design/utils/cn";
import { useDropdownMenuContext } from "./dropdownMenuContext";

type DropdownMenuCheckboxItemPropsType = React.ComponentProps<"div"> & {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  /** Close the menu when the item is clicked. Defaults to `false`. */
  closeOnClick?: boolean;
};

export const DropdownMenuCheckboxItem = ({
  className,
  children,
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled,
  closeOnClick = false,
  onClick,
  onPointerEnter,
  ...props
}: DropdownMenuCheckboxItemPropsType) => {
  const context = useDropdownMenuContext();
  const [isChecked, setChecked] = useControlledState({
    value: checked,
    defaultValue: defaultChecked,
    onChange: onCheckedChange,
  });
  return (
    <div
      role="menuitemcheckbox"
      aria-checked={isChecked}
      tabIndex={-1}
      data-slot="dropdown-menu-checkbox-item"
      {...(isChecked ? { "data-checked": "" } : {})}
      {...(disabled ? { "data-disabled": "", "aria-disabled": true } : {})}
      onPointerEnter={chainHandlers(onPointerEnter, (event: React.PointerEvent<HTMLDivElement>) => {
        if (!disabled) event.currentTarget.focus();
      })}
      onClick={(event) => {
        if (disabled) return;
        onClick?.(event);
        if (event.defaultPrevented) return;
        setChecked(!isChecked);
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
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        {isChecked ? <CheckIcon className="size-3 text-primary" /> : null}
      </span>
      {children}
    </div>
  );
};

DropdownMenuCheckboxItem.displayName = "DropdownMenu.CheckboxItem";
