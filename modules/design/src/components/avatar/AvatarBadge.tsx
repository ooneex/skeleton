import { cn } from "@module/design/utils/cn";
import type * as React from "react";

type AvatarBadgePropsType = React.ComponentProps<"span">;
export const AvatarBadge = ({ className, ...props }: AvatarBadgePropsType) => {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-blend-color ring-2 select-none",
        "group-data-[size=xs]/avatar:size-2 group-data-[size=xs]/avatar:[&>svg]:hidden",
        "group-data-[size=sm]/avatar:size-2.5",
        "group-data-[size=md]/avatar:size-3",
        "group-data-[size=lg]/avatar:size-4 group-data-[size=lg]/avatar:ring-3 group-data-[size=lg]/avatar:right-2 group-data-[size=lg]/avatar:bottom-2",
        className,
      )}
      {...props}
    />
  );
};

AvatarBadge.displayName = "Avatar.Badge";
