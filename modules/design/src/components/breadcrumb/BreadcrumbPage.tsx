import { cn } from "@module/design/utils/cn";
import type { ComponentProps } from "react";

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

BreadcrumbPage.displayName = "Breadcrumb.Page";
