import { Badge } from "@module/design/components/badge/Badge";
import { PenIcon } from "@module/design/icons/outline/communication/sm/PenIcon";
import type { StatusBadgePropsType } from "./types";

export const StatusDraftBadge = ({ children, ...props }: StatusBadgePropsType) => {
  return (
    <Badge variant="neutral" {...props}>
      <PenIcon data-icon="inline-start" />
      {children ?? "Draft"}
    </Badge>
  );
};

StatusDraftBadge.displayName = "StatusDraftBadge";
