import { Badge } from "@module/design/components/badge/Badge";
import { ArchiveIcon } from "@module/design/icons/outline/files-folders/sm/ArchiveIcon";
import type { StatusBadgePropsType } from "./types";

export const StatusArchivedBadge = ({ children, ...props }: StatusBadgePropsType) => {
  return (
    <Badge variant="neutral" {...props}>
      <ArchiveIcon data-icon="inline-start" />
      {children ?? "Archived"}
    </Badge>
  );
};

StatusArchivedBadge.displayName = "StatusArchivedBadge";
