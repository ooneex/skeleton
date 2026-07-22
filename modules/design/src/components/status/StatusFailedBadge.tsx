import { Badge } from "@module/design/components/badge/Badge";
import { XmarkIcon } from "@module/design/icons/outline/ui-layout/sm/XmarkIcon";
import type { StatusBadgePropsType } from "./types";

export const StatusFailedBadge = ({ children, ...props }: StatusBadgePropsType) => {
  return (
    <Badge variant="danger" {...props}>
      <XmarkIcon data-icon="inline-start" />
      {children ?? "Failed"}
    </Badge>
  );
};

StatusFailedBadge.displayName = "StatusFailedBadge";
