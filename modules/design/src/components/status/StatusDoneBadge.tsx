import { Badge } from "@module/design/components/badge/Badge";
import { CheckIcon } from "@module/design/icons/outline/ui-layout/sm/CheckIcon";
import type { StatusBadgePropsType } from "./types";

export const StatusDoneBadge = ({ children, ...props }: StatusBadgePropsType) => {
  return (
    <Badge variant="success" {...props}>
      <CheckIcon data-icon="inline-start" />
      {children ?? "Done"}
    </Badge>
  );
};

StatusDoneBadge.displayName = "StatusDoneBadge";
