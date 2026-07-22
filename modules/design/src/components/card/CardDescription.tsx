import { cn } from "@module/design/utils/cn";
import type * as React from "react";

export const CardDescription = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div data-slot="card-description" className={cn("text-muted-foreground text-sm", className)} {...props} />;
};

CardDescription.displayName = "Card.Description";
