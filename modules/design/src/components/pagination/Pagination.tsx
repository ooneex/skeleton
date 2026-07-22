import { cn } from "@module/design/utils/cn";
import type * as React from "react";
import { PaginationContent } from "./PaginationContent";
import { PaginationEllipsis } from "./PaginationEllipsis";
import { PaginationItem } from "./PaginationItem";
import { PaginationLink } from "./PaginationLink";
import { PaginationNext } from "./PaginationNext";
import { PaginationPrevious } from "./PaginationPrevious";
import { PaginationContext, type PaginationSizeType } from "./paginationContext";

/**
 * Navigation control for paging through content.
 *
 * Compound component: provides the size context to its sub-components.
 */
const PaginationRoot = ({
  className,
  size = "sm",
  ...props
}: React.ComponentProps<"nav"> & { size?: PaginationSizeType }) => (
  <PaginationContext.Provider value={size}>
    <nav
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full items-center justify-center", className)}
      {...props}
    />
  </PaginationContext.Provider>
);

export const Pagination = Object.assign(PaginationRoot, {
  Content: PaginationContent,
  Item: PaginationItem,
  Link: PaginationLink,
  Previous: PaginationPrevious,
  Next: PaginationNext,
  Ellipsis: PaginationEllipsis,
});

PaginationRoot.displayName = "Pagination";
