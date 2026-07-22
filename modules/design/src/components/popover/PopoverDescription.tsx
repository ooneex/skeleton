import { useRegisterDialogDescription } from "@module/design/components/dialog/useDialogPresence";
import { cn } from "@module/design/utils/cn";

export const PopoverDescription = ({ className, id, ...props }: React.ComponentProps<"p">) => {
  const descriptionId = useRegisterDialogDescription();
  return (
    <p
      id={id ?? descriptionId}
      data-slot="popover-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
};

PopoverDescription.displayName = "Popover.Description";
