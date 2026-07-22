import { cn } from "@module/design/utils/cn";
import { useRegisterDialogDescription } from "./useDialogPresence";

export const DialogDescription = ({ className, id, ...props }: React.ComponentProps<"p">) => {
  const descriptionId = useRegisterDialogDescription();
  return (
    <p
      id={id ?? descriptionId}
      data-slot="dialog-description"
      className={cn(
        "text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3",
        className,
      )}
      {...props}
    />
  );
};
DialogDescription.displayName = "DialogDescription";
