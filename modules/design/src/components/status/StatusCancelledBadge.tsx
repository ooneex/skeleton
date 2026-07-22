import { Badge } from "@module/design/components/badge/Badge";
import { CircleMinusIcon } from "@module/design/icons/outline/ui-layout/sm/CircleMinusIcon";
import type { StatusBadgePropsType } from "./types";

export const StatusCancelledBadge = ({ children, ...props }: StatusBadgePropsType) => {
  return (
    <Badge variant="neutral" {...props}>
      <CircleMinusIcon data-icon="inline-start" />
      {children ?? "Cancelled"}
    </Badge>
  );
};

StatusCancelledBadge.displayName = "StatusCancelledBadge";
