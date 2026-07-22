import { cn } from "@module/design/utils/cn";
import { useRegisterDialogDescription } from "./useDialogPresence";

export const AlertDialogDescription = ({ className, id, ...props }: React.ComponentProps<"p">) => {
  const descriptionId = useRegisterDialogDescription();
  return (
    <p
      id={id ?? descriptionId}
      data-slot="alert-dialog-description"
      className={cn(
        "text-muted-foreground *:[a]:hover:text-foreground text-sm text-balance md:text-pretty *:[a]:underline *:[a]:underline-offset-3",
        className,
      )}
      {...props}
    />
  );
};
AlertDialogDescription.displayName = "AlertDialogDescription";
