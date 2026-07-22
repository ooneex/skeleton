import { useRegisterDialogTitle } from "@module/design/components/dialog/useDialogPresence";
import { cn } from "@module/design/utils/cn";

export const PopoverTitle = ({ className, id, ...props }: React.ComponentProps<"h2">) => {
  const titleId = useRegisterDialogTitle();
  return <h2 id={id ?? titleId} data-slot="popover-title" className={cn("font-medium", className)} {...props} />;
};

PopoverTitle.displayName = "Popover.Title";
