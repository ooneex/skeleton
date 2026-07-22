import { StatusActiveBadge } from "./StatusActiveBadge";
import { StatusApprovedBadge } from "./StatusApprovedBadge";
import { StatusArchivedBadge } from "./StatusArchivedBadge";
import { StatusCancelledBadge } from "./StatusCancelledBadge";
import { StatusCompletedBadge } from "./StatusCompletedBadge";
import { StatusDeleteBadge } from "./StatusDeleteBadge";
import { StatusDeletedBadge } from "./StatusDeletedBadge";
import { StatusDeliveredBadge } from "./StatusDeliveredBadge";
import { StatusDisabledBadge } from "./StatusDisabledBadge";
import { StatusDoneBadge } from "./StatusDoneBadge";
import { StatusDraftBadge } from "./StatusDraftBadge";
import { StatusEnabledBadge } from "./StatusEnabledBadge";
import { StatusErrorBadge } from "./StatusErrorBadge";
import { StatusExpiredBadge } from "./StatusExpiredBadge";
import { StatusFailedBadge } from "./StatusFailedBadge";
import { StatusInactiveBadge } from "./StatusInactiveBadge";
import { StatusInReviewBadge } from "./StatusInReviewBadge";
import { StatusInvalidBadge } from "./StatusInvalidBadge";
import { StatusOnHoldBadge } from "./StatusOnHoldBadge";
import { StatusPausedBadge } from "./StatusPausedBadge";
import { StatusPendingBadge } from "./StatusPendingBadge";
import { StatusProcessedBadge } from "./StatusProcessedBadge";
import { StatusProcessingBadge } from "./StatusProcessingBadge";
import { StatusQueuedBadge } from "./StatusQueuedBadge";
import { StatusReadBadge } from "./StatusReadBadge";
import { StatusReadyBadge } from "./StatusReadyBadge";
import { StatusRejectedBadge } from "./StatusRejectedBadge";
import { StatusReviewedBadge } from "./StatusReviewedBadge";
import { StatusScheduledBadge } from "./StatusScheduledBadge";
import { StatusSentBadge } from "./StatusSentBadge";
import { StatusSubmittedBadge } from "./StatusSubmittedBadge";
import { StatusSuccessBadge } from "./StatusSuccessBadge";
import { StatusSuspendedBadge } from "./StatusSuspendedBadge";
import { StatusTimeoutBadge } from "./StatusTimeoutBadge";
import { StatusValidBadge } from "./StatusValidBadge";

export const statusBadgeMap = [
  { status: "draft", component: StatusDraftBadge, label: "Draft" },
  { status: "pending", component: StatusPendingBadge, label: "Pending" },
  { status: "submitted", component: StatusSubmittedBadge, label: "Submitted" },
  { status: "inReview", component: StatusInReviewBadge, label: "In Review" },
  { status: "reviewed", component: StatusReviewedBadge, label: "Reviewed" },
  { status: "processing", component: StatusProcessingBadge, label: "Processing" },
  { status: "processed", component: StatusProcessedBadge, label: "Processed" },
  { status: "queued", component: StatusQueuedBadge, label: "Queued" },
  { status: "ready", component: StatusReadyBadge, label: "Ready" },
  { status: "scheduled", component: StatusScheduledBadge, label: "Scheduled" },
  { status: "approved", component: StatusApprovedBadge, label: "Approved" },
  { status: "rejected", component: StatusRejectedBadge, label: "Rejected" },
  { status: "done", component: StatusDoneBadge, label: "Done" },
  { status: "completed", component: StatusCompletedBadge, label: "Completed" },
  { status: "success", component: StatusSuccessBadge, label: "Success" },
  { status: "failed", component: StatusFailedBadge, label: "Failed" },
  { status: "error", component: StatusErrorBadge, label: "Error" },
  { status: "cancelled", component: StatusCancelledBadge, label: "Cancelled" },
  { status: "timeout", component: StatusTimeoutBadge, label: "Timeout" },
  { status: "archived", component: StatusArchivedBadge, label: "Archived" },
  { status: "delete", component: StatusDeleteBadge, label: "Delete" },
  { status: "deleted", component: StatusDeletedBadge, label: "Deleted" },
  { status: "active", component: StatusActiveBadge, label: "Active" },
  { status: "inactive", component: StatusInactiveBadge, label: "Inactive" },
  { status: "disabled", component: StatusDisabledBadge, label: "Disabled" },
  { status: "enabled", component: StatusEnabledBadge, label: "Enabled" },
  { status: "suspended", component: StatusSuspendedBadge, label: "Suspended" },
  { status: "paused", component: StatusPausedBadge, label: "Paused" },
  { status: "onHold", component: StatusOnHoldBadge, label: "On Hold" },
  { status: "sent", component: StatusSentBadge, label: "Sent" },
  { status: "delivered", component: StatusDeliveredBadge, label: "Delivered" },
  { status: "read", component: StatusReadBadge, label: "Read" },
  { status: "valid", component: StatusValidBadge, label: "Valid" },
  { status: "invalid", component: StatusInvalidBadge, label: "Invalid" },
  { status: "expired", component: StatusExpiredBadge, label: "Expired" },
] as const;
