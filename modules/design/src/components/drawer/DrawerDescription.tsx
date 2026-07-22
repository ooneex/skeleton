import { useRegisterDialogDescription } from "@module/design/components/dialog/useDialogPresence";
import { cn } from "@module/design/utils/cn";

export const DrawerDescription = ({ className, id, ...props }: React.ComponentProps<"p">) => {
  const descriptionId = useRegisterDialogDescription();
  return (
    <p
      id={id ?? descriptionId}
      data-slot="drawer-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
};
DrawerDescription.displayName = "DrawerDescription";
