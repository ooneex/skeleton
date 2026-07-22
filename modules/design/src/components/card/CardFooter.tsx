import { cn } from "@module/design/utils/cn";
import type * as React from "react";

export const CardFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div data-slot="card-footer" className={cn("px-4 [.border-t]:pt-4 flex items-center", className)} {...props} />
  );
};

CardFooter.displayName = "Card.Footer";
