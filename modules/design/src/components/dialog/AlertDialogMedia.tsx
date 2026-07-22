import { cn } from "@module/design/utils/cn";
import type * as React from "react";

export const AlertDialogMedia = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="alert-dialog-media"
      className={cn(
        "bg-muted mb-2 inline-flex size-16 items-center justify-center rounded sm:group-data-[size=md]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-8",
        className,
      )}
      {...props}
    />
  );
};
AlertDialogMedia.displayName = "AlertDialogMedia";
