import { Button } from "@module/design/components/button/Button";
import { cn } from "@module/design/utils/cn";
import type * as React from "react";
import { useDialogContext } from "./DialogContext";

type AlertDialogCancelPropsType = React.ComponentProps<typeof Button>;

export const AlertDialogCancel = ({
  className,
  variant = "outline",
  size = "sm",
  onClick,
  ...props
}: AlertDialogCancelPropsType) => {
  const context = useDialogContext();
  return (
    <Button
      data-slot="alert-dialog-cancel"
      variant={variant}
      size={size}
      className={cn(className)}
      onClick={(event) => {
        onClick?.(event);
        context?.dismiss();
      }}
      {...props}
    />
  );
};
AlertDialogCancel.displayName = "AlertDialogCancel";
