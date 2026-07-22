import { cn } from "@module/design/utils/cn";
import type * as React from "react";

type AvatarGroupCountPropsType = React.ComponentProps<"div">;
export const AvatarGroupCount = ({ className, ...props }: AvatarGroupCountPropsType) => {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "bg-muted text-muted-foreground size-8 rounded-full text-sm ring-background relative flex shrink-0 items-center justify-center ring-2",
        className,
      )}
      {...props}
    />
  );
};

AvatarGroupCount.displayName = "Avatar.GroupCount";
