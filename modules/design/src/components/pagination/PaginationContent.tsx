import { cn } from "@module/design/utils/cn";
import type * as React from "react";
import { useContext } from "react";
import { contentGapVariants, PaginationContext } from "./paginationContext";

export const PaginationContent = ({ className, ...props }: React.ComponentProps<"ul">) => {
  const size = useContext(PaginationContext);

  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex items-center", contentGapVariants[size], className)}
      {...props}
    />
  );
};

PaginationContent.displayName = "Pagination.Content";
