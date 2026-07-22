import { Button } from "@module/design/components/button/Button";
import { cn } from "@module/design/utils/cn";
import type * as React from "react";
import { useContext } from "react";
import { chevronIconMap, chevronIconSizeVariants, linkIconSizeVariants, PaginationContext } from "./paginationContext";

export const PaginationPrevious = ({ className, ...props }: React.ComponentProps<"a">) => {
  const size = useContext(PaginationContext);
  const { ChevronLeftIcon } = chevronIconMap[size];

  return (
    <Button
      variant="ghost"
      size={linkIconSizeVariants[size]}
      className={cn("rounded-full", className)}
      aria-label="Go to previous page"
      nativeButton={false}
      render={
        <a data-slot="pagination-previous" {...props}>
          <ChevronLeftIcon data-icon="inline-start" className={chevronIconSizeVariants[size]} />
        </a>
      }
    />
  );
};

PaginationPrevious.displayName = "Pagination.Previous";
