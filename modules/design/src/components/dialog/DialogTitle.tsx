import { cn } from "@module/design/utils/cn";
import { useRegisterDialogTitle } from "./useDialogPresence";

export const DialogTitle = ({ className, id, ...props }: React.ComponentProps<"h2">) => {
  const titleId = useRegisterDialogTitle();
  return (
    <h2 id={id ?? titleId} data-slot="dialog-title" className={cn("leading-none font-medium", className)} {...props} />
  );
};
DialogTitle.displayName = "DialogTitle";
