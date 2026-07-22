import { cn } from "@module/design/utils/cn";
import type * as React from "react";

export const CardContent = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div data-slot="card-content" className={cn("p-0", className)} {...props} />;
};

CardContent.displayName = "Card.Content";
