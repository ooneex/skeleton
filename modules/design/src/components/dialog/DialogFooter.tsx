import { Button } from "@module/design/components/button/Button";
import { cn } from "@module/design/utils/cn";
import type * as React from "react";
import { useDialogContext } from "./DialogContext";

type DialogFooterPropsType = React.ComponentProps<"div"> & {
  showCloseButton?: boolean;
};

export const DialogFooter = ({ className, showCloseButton = false, children, ...props }: DialogFooterPropsType) => {
  const context = useDialogContext();
  return (
    <div
      data-slot="dialog-footer"
      className={cn("gap-2 flex flex-col-reverse sm:flex-row sm:justify-end", className)}
      {...props}
    >
      {children}
      {showCloseButton && (
        <Button data-slot="dialog-close" variant="outline" onClick={() => context?.dismiss()}>
          Close
        </Button>
      )}
    </div>
  );
};
DialogFooter.displayName = "DialogFooter";
