import { Badge } from "@module/design/components/badge/Badge";
import { MediaRecordIcon } from "@module/design/icons/outline/photography-video/sm/MediaRecordIcon";
import type { StatusBadgePropsType } from "./types";

export const StatusActiveBadge = ({ children, ...props }: StatusBadgePropsType) => {
  return (
    <Badge variant="success" {...props}>
      <MediaRecordIcon data-icon="inline-start" />
      {children ?? "Active"}
    </Badge>
  );
};

StatusActiveBadge.displayName = "StatusActiveBadge";
