import { Badge } from "@module/design/components/badge/Badge";
import { CheckboxCheckedIcon } from "@module/design/icons/outline/ui-layout/sm/CheckboxCheckedIcon";
import type { StatusBadgePropsType } from "./types";

export const StatusReviewedBadge = ({ children, ...props }: StatusBadgePropsType) => {
  return (
    <Badge variant="success" {...props}>
      <CheckboxCheckedIcon data-icon="inline-start" />
      {children ?? "Reviewed"}
    </Badge>
  );
};

StatusReviewedBadge.displayName = "StatusReviewedBadge";
