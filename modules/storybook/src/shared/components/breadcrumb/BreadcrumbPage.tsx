import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";

export const BreadcrumbPage = ({ className, ...props }: ComponentProps<"span">) => {
  return (
    <span
      data-slot="breadcrumb-page"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  );
};
