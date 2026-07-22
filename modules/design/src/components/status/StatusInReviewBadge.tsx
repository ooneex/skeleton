import { Badge } from "@module/design/components/badge/Badge";
import { EyeIcon } from "@module/design/icons/outline/ui-layout/sm/EyeIcon";
import type { StatusBadgePropsType } from "./types";

export const StatusInReviewBadge = ({ children, ...props }: StatusBadgePropsType) => {
  return (
    <Badge variant="info" {...props}>
      <EyeIcon data-icon="inline-start" />
      {children ?? "In Review"}
    </Badge>
  );
};

StatusInReviewBadge.displayName = "StatusInReviewBadge";
