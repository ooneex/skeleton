import {
  StatusActiveBadge,
  StatusApprovedBadge,
  StatusArchivedBadge,
  StatusCancelledBadge,
  StatusCompletedBadge,
  StatusDeleteBadge,
  StatusDeletedBadge,
  StatusDeliveredBadge,
  StatusDisabledBadge,
  StatusDoneBadge,
  StatusDraftBadge,
  StatusEnabledBadge,
  StatusErrorBadge,
  StatusExpiredBadge,
  StatusFailedBadge,
  StatusInactiveBadge,
  StatusInReviewBadge,
  StatusInvalidBadge,
  StatusOnHoldBadge,
  StatusPausedBadge,
  StatusPendingBadge,
  StatusProcessedBadge,
  StatusProcessingBadge,
  StatusQueuedBadge,
  StatusReadBadge,
  StatusReadyBadge,
  StatusRejectedBadge,
  StatusReviewedBadge,
  StatusScheduledBadge,
  StatusSentBadge,
  StatusSubmittedBadge,
  StatusSuccessBadge,
  StatusSuspendedBadge,
  StatusTimeoutBadge,
  StatusValidBadge,
} from "@module/design/components/status";
import type { ComponentType } from "react";
import type { MetaType } from "../../shared/story";

type BadgeComponentType = ComponentType<{ children?: React.ReactNode; size?: "xs" | "sm" | "md" | "lg" }>;

const badges = [
  ["Draft", StatusDraftBadge],
  ["Pending", StatusPendingBadge],
  ["Submitted", StatusSubmittedBadge],
  ["In Review", StatusInReviewBadge],
  ["Reviewed", StatusReviewedBadge],
  ["Processing", StatusProcessingBadge],
  ["Processed", StatusProcessedBadge],
  ["Queued", StatusQueuedBadge],
  ["Ready", StatusReadyBadge],
  ["Scheduled", StatusScheduledBadge],
  ["Approved", StatusApprovedBadge],
  ["Rejected", StatusRejectedBadge],
  ["Done", StatusDoneBadge],
  ["Completed", StatusCompletedBadge],
  ["Success", StatusSuccessBadge],
  ["Failed", StatusFailedBadge],
  ["Error", StatusErrorBadge],
  ["Cancelled", StatusCancelledBadge],
  ["Timeout", StatusTimeoutBadge],
  ["Archived", StatusArchivedBadge],
  ["Delete", StatusDeleteBadge],
  ["Deleted", StatusDeletedBadge],
  ["Active", StatusActiveBadge],
  ["Inactive", StatusInactiveBadge],
  ["Disabled", StatusDisabledBadge],
  ["Enabled", StatusEnabledBadge],
  ["Suspended", StatusSuspendedBadge],
  ["Paused", StatusPausedBadge],
  ["On Hold", StatusOnHoldBadge],
  ["Sent", StatusSentBadge],
  ["Delivered", StatusDeliveredBadge],
  ["Read", StatusReadBadge],
  ["Valid", StatusValidBadge],
  ["Invalid", StatusInvalidBadge],
  ["Expired", StatusExpiredBadge],
] as const satisfies readonly (readonly [string, BadgeComponentType])[];

type StatusBadgesDemoPropsType = {
  size?: "xs" | "sm" | "md" | "lg";
};

const StatusBadgesDemo = ({ size = "sm" }: StatusBadgesDemoPropsType) => {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {badges.map(([label, Badge]) => (
        <div key={label} className="rounded border border-border p-3">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
          <Badge size={size}>{label}</Badge>
        </div>
      ))}
    </div>
  );
};

StatusBadgesDemo.displayName = "StatusBadgeGallery";

export const meta = {
  title: "Status.Badges",
  group: "Components",
  tags: [],
  component: StatusBadgesDemo,
  usage: [
    "**Status badge components** are the semantic chips that power the status system. Each export — from `StatusDraftBadge` through `StatusExpiredBadge` — packages the right icon and badge variant for a specific workflow, delivery, or lifecycle state.",
    "",
    "**How to use it** — import the concrete badge that matches the domain state you are rendering and place the record-specific label inside when you need custom wording. Because every badge shares the same size scale, you can switch between them without changing surrounding layout. This story shows the whole vocabulary in one grid so designers can compare the visual semantics side by side.",
    "",
    "**When to use it** — in tables, cards, detail headers, and dialogs where a state must be scannable at a glance and stay visually consistent across the product.",
    "",
    "**When not to use it** — do not use these badges as arbitrary topic tags or category labels when there is no real state meaning; use the tag system for that instead.",
  ].join("\n"),
  props: [
    {
      name: "size",
      control: "select",
      options: [
        {
          name: "xs",
          usage: "Smallest badge. Use in dense tables and metadata rows where status is secondary.",
        },
        {
          name: "sm",
          usage: "Compact default. Use in most cards, list rows, and picker results.",
        },
        {
          name: "md",
          usage: "Roomier badge. Use on detail pages or section headers with more space.",
        },
        {
          name: "lg",
          usage: "Largest badge. Use for summary surfaces where the current state should stand out strongly.",
        },
      ],
      default: "sm",
    },
  ],
} satisfies MetaType<typeof StatusBadgesDemo>;
