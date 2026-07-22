import { cn } from "@module/design/utils/cn";

type DropdownMenuLabelPropsType = React.ComponentProps<"div"> & {
  inset?: boolean;
};

export const DropdownMenuLabel = ({ className, inset, ...props }: DropdownMenuLabelPropsType) => {
  return (
    <div
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn("text-muted-foreground px-2 py-1.5 text-xs font-medium data-inset:pl-8", className)}
      {...props}
    />
  );
};

DropdownMenuLabel.displayName = "DropdownMenu.Label";
