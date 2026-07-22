import { cn } from "@module/design/utils/cn";
import { useRegisterDialogTitle } from "./useDialogPresence";

export const AlertDialogTitle = ({ className, id, ...props }: React.ComponentProps<"h2">) => {
  const titleId = useRegisterDialogTitle();
  return (
    <h2
      id={id ?? titleId}
      data-slot="alert-dialog-title"
      className={cn(
        "text-lg font-medium sm:group-data-[size=md]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
        className,
      )}
      {...props}
    />
  );
};
AlertDialogTitle.displayName = "AlertDialogTitle";
