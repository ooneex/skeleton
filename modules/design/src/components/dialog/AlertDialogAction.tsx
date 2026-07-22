import { Button } from "@module/design/components/button/Button";
import { cn } from "@module/design/utils/cn";
import type * as React from "react";

export const AlertDialogAction = ({ className, ...props }: React.ComponentProps<typeof Button>) => {
  return <Button data-slot="alert-dialog-action" className={cn(className)} {...props} />;
};
AlertDialogAction.displayName = "AlertDialogAction";
