import { Button } from "@module/design/components/button/Button";
import { cn } from "@module/design/utils/cn";
import type * as React from "react";
import { useContext } from "react";
import { linkIconSizeVariants, linkTextSizeVariants, PaginationContext } from "./paginationContext";

type PaginationLinkPropsType = { isActive?: boolean } & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">;

export const PaginationLink = ({ className, isActive, size, ...props }: PaginationLinkPropsType) => {
  const contextSize = useContext(PaginationContext);

  return (
    <Button
      variant={isActive ? "outline" : "ghost"}
      size={size ?? linkIconSizeVariants[contextSize]}
      className={cn("rounded-full font-medium", linkTextSizeVariants[contextSize], className)}
      nativeButton={false}
      render={
        <a aria-current={isActive ? "page" : undefined} data-slot="pagination-link" data-active={isActive} {...props} />
      }
    />
  );
};

PaginationLink.displayName = "Pagination.Link";
