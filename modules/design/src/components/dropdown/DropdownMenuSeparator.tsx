import { cn } from "@module/design/utils/cn";

type DropdownMenuSeparatorPropsType = React.ComponentProps<"hr">;

export const DropdownMenuSeparator = ({ className, ...props }: DropdownMenuSeparatorPropsType) => {
  return (
    <hr
      data-slot="dropdown-menu-separator"
      className={cn("bg-ring-active -mx-1 my-1 h-[0.4px] border-none", className)}
      {...props}
    />
  );
};

DropdownMenuSeparator.displayName = "DropdownMenu.Separator";
