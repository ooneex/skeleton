import { Badge } from "@module/design/components/badge/Badge";
import { CircleCheckIcon } from "@module/design/icons/outline/ui-layout/sm/CircleCheckIcon";
import type { StatusBadgePropsType } from "./types";

export const StatusSuccessBadge = ({ children, ...props }: StatusBadgePropsType) => {
  return (
    <Badge variant="success" {...props}>
      <CircleCheckIcon data-icon="inline-start" />
      {children ?? "Success"}
    </Badge>
  );
};

StatusSuccessBadge.displayName = "StatusSuccessBadge";
