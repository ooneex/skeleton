import { cn } from "@module/design/utils/cn";
import type * as React from "react";
import { EmptyContent } from "./EmptyContent";
import { EmptyDescription } from "./EmptyDescription";
import { EmptyHeader } from "./EmptyHeader";
import { EmptyMedia } from "./EmptyMedia";
import { EmptyTitle } from "./EmptyTitle";

const EmptyRoot = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="empty"
      className={cn(
        "gap-4 rounded border-dashed p-12 flex w-full min-w-0 flex-1 flex-col items-center justify-center text-center text-balance",
        className,
      )}
      {...props}
    />
  );
};

/**
 * Empty state component built with the compound pattern.
 * Compose with `Empty.Header`, `Empty.Media`, `Empty.Title`,
 * `Empty.Description`, and `Empty.Content`.
 */
export const Empty = Object.assign(EmptyRoot, {
  Header: EmptyHeader,
  Media: EmptyMedia,
  Title: EmptyTitle,
  Description: EmptyDescription,
  Content: EmptyContent,
});

EmptyRoot.displayName = "Empty";
