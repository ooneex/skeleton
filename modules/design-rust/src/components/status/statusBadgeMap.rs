use super::StatusActiveBadge::StatusActiveBadge;
use super::StatusApprovedBadge::StatusApprovedBadge;
use super::StatusArchivedBadge::StatusArchivedBadge;
use super::StatusCancelledBadge::StatusCancelledBadge;
use super::StatusCompletedBadge::StatusCompletedBadge;
use super::StatusDeleteBadge::StatusDeleteBadge;
use super::StatusDeletedBadge::StatusDeletedBadge;
use super::StatusDeliveredBadge::StatusDeliveredBadge;
use super::StatusDisabledBadge::StatusDisabledBadge;
use super::StatusDoneBadge::StatusDoneBadge;
use super::StatusDraftBadge::StatusDraftBadge;
use super::StatusEnabledBadge::StatusEnabledBadge;
use super::StatusErrorBadge::StatusErrorBadge;
use super::StatusExpiredBadge::StatusExpiredBadge;
use super::StatusFailedBadge::StatusFailedBadge;
use super::StatusInReviewBadge::StatusInReviewBadge;
use super::StatusInactiveBadge::StatusInactiveBadge;
use super::StatusInvalidBadge::StatusInvalidBadge;
use super::StatusOnHoldBadge::StatusOnHoldBadge;
use super::StatusPausedBadge::StatusPausedBadge;
use super::StatusPendingBadge::StatusPendingBadge;
use super::StatusProcessedBadge::StatusProcessedBadge;
use super::StatusProcessingBadge::StatusProcessingBadge;
use super::StatusQueuedBadge::StatusQueuedBadge;
use super::StatusReadBadge::StatusReadBadge;
use super::StatusReadyBadge::StatusReadyBadge;
use super::StatusRejectedBadge::StatusRejectedBadge;
use super::StatusReviewedBadge::StatusReviewedBadge;
use super::StatusScheduledBadge::StatusScheduledBadge;
use super::StatusSentBadge::StatusSentBadge;
use super::StatusSubmittedBadge::StatusSubmittedBadge;
use super::StatusSuccessBadge::StatusSuccessBadge;
use super::StatusSuspendedBadge::StatusSuspendedBadge;
use super::StatusTimeoutBadge::StatusTimeoutBadge;
use super::StatusValidBadge::StatusValidBadge;
use dioxus::prelude::*;

/// All distinct status values available in the design system.
#[derive(Clone, Copy, PartialEq, Eq, Debug)]
pub enum StatusType {
    Draft,
    Pending,
    Submitted,
    InReview,
    Reviewed,
    Processing,
    Processed,
    Queued,
    Ready,
    Scheduled,
    Approved,
    Rejected,
    Done,
    Completed,
    Success,
    Failed,
    Error,
    Cancelled,
    Timeout,
    Archived,
    Delete,
    Deleted,
    Active,
    Inactive,
    Disabled,
    Enabled,
    Suspended,
    Paused,
    OnHold,
    Sent,
    Delivered,
    Read,
    Valid,
    Invalid,
    Expired,
}

impl StatusType {
    /// The kebab-case string key used as the `status` field in the TS map.
    pub fn as_str(self) -> &'static str {
        match self {
            Self::Draft => "draft",
            Self::Pending => "pending",
            Self::Submitted => "submitted",
            Self::InReview => "inReview",
            Self::Reviewed => "reviewed",
            Self::Processing => "processing",
            Self::Processed => "processed",
            Self::Queued => "queued",
            Self::Ready => "ready",
            Self::Scheduled => "scheduled",
            Self::Approved => "approved",
            Self::Rejected => "rejected",
            Self::Done => "done",
            Self::Completed => "completed",
            Self::Success => "success",
            Self::Failed => "failed",
            Self::Error => "error",
            Self::Cancelled => "cancelled",
            Self::Timeout => "timeout",
            Self::Archived => "archived",
            Self::Delete => "delete",
            Self::Deleted => "deleted",
            Self::Active => "active",
            Self::Inactive => "inactive",
            Self::Disabled => "disabled",
            Self::Enabled => "enabled",
            Self::Suspended => "suspended",
            Self::Paused => "paused",
            Self::OnHold => "onHold",
            Self::Sent => "sent",
            Self::Delivered => "delivered",
            Self::Read => "read",
            Self::Valid => "valid",
            Self::Invalid => "invalid",
            Self::Expired => "expired",
        }
    }

    /// Human-readable label shown in the status picker.
    pub fn label(self) -> &'static str {
        match self {
            Self::Draft => "Draft",
            Self::Pending => "Pending",
            Self::Submitted => "Submitted",
            Self::InReview => "In Review",
            Self::Reviewed => "Reviewed",
            Self::Processing => "Processing",
            Self::Processed => "Processed",
            Self::Queued => "Queued",
            Self::Ready => "Ready",
            Self::Scheduled => "Scheduled",
            Self::Approved => "Approved",
            Self::Rejected => "Rejected",
            Self::Done => "Done",
            Self::Completed => "Completed",
            Self::Success => "Success",
            Self::Failed => "Failed",
            Self::Error => "Error",
            Self::Cancelled => "Cancelled",
            Self::Timeout => "Timeout",
            Self::Archived => "Archived",
            Self::Delete => "Delete",
            Self::Deleted => "Deleted",
            Self::Active => "Active",
            Self::Inactive => "Inactive",
            Self::Disabled => "Disabled",
            Self::Enabled => "Enabled",
            Self::Suspended => "Suspended",
            Self::Paused => "Paused",
            Self::OnHold => "On Hold",
            Self::Sent => "Sent",
            Self::Delivered => "Delivered",
            Self::Read => "Read",
            Self::Valid => "Valid",
            Self::Invalid => "Invalid",
            Self::Expired => "Expired",
        }
    }
}

/// Entry in the status badge map — mirrors the TS `statusBadgeMap` row shape,
/// but without a `component` field (components are resolved via a `match` at
/// render time since function pointers to Dioxus components are not stable).
pub struct StatusBadgeMapEntry {
    pub status: StatusType,
    pub label: &'static str,
}

/// Ordered list of all available statuses — mirrors `statusBadgeMap` in TS.
pub static STATUS_BADGE_MAP: &[StatusBadgeMapEntry] = &[
    StatusBadgeMapEntry {
        status: StatusType::Draft,
        label: "Draft",
    },
    StatusBadgeMapEntry {
        status: StatusType::Pending,
        label: "Pending",
    },
    StatusBadgeMapEntry {
        status: StatusType::Submitted,
        label: "Submitted",
    },
    StatusBadgeMapEntry {
        status: StatusType::InReview,
        label: "In Review",
    },
    StatusBadgeMapEntry {
        status: StatusType::Reviewed,
        label: "Reviewed",
    },
    StatusBadgeMapEntry {
        status: StatusType::Processing,
        label: "Processing",
    },
    StatusBadgeMapEntry {
        status: StatusType::Processed,
        label: "Processed",
    },
    StatusBadgeMapEntry {
        status: StatusType::Queued,
        label: "Queued",
    },
    StatusBadgeMapEntry {
        status: StatusType::Ready,
        label: "Ready",
    },
    StatusBadgeMapEntry {
        status: StatusType::Scheduled,
        label: "Scheduled",
    },
    StatusBadgeMapEntry {
        status: StatusType::Approved,
        label: "Approved",
    },
    StatusBadgeMapEntry {
        status: StatusType::Rejected,
        label: "Rejected",
    },
    StatusBadgeMapEntry {
        status: StatusType::Done,
        label: "Done",
    },
    StatusBadgeMapEntry {
        status: StatusType::Completed,
        label: "Completed",
    },
    StatusBadgeMapEntry {
        status: StatusType::Success,
        label: "Success",
    },
    StatusBadgeMapEntry {
        status: StatusType::Failed,
        label: "Failed",
    },
    StatusBadgeMapEntry {
        status: StatusType::Error,
        label: "Error",
    },
    StatusBadgeMapEntry {
        status: StatusType::Cancelled,
        label: "Cancelled",
    },
    StatusBadgeMapEntry {
        status: StatusType::Timeout,
        label: "Timeout",
    },
    StatusBadgeMapEntry {
        status: StatusType::Archived,
        label: "Archived",
    },
    StatusBadgeMapEntry {
        status: StatusType::Delete,
        label: "Delete",
    },
    StatusBadgeMapEntry {
        status: StatusType::Deleted,
        label: "Deleted",
    },
    StatusBadgeMapEntry {
        status: StatusType::Active,
        label: "Active",
    },
    StatusBadgeMapEntry {
        status: StatusType::Inactive,
        label: "Inactive",
    },
    StatusBadgeMapEntry {
        status: StatusType::Disabled,
        label: "Disabled",
    },
    StatusBadgeMapEntry {
        status: StatusType::Enabled,
        label: "Enabled",
    },
    StatusBadgeMapEntry {
        status: StatusType::Suspended,
        label: "Suspended",
    },
    StatusBadgeMapEntry {
        status: StatusType::Paused,
        label: "Paused",
    },
    StatusBadgeMapEntry {
        status: StatusType::OnHold,
        label: "On Hold",
    },
    StatusBadgeMapEntry {
        status: StatusType::Sent,
        label: "Sent",
    },
    StatusBadgeMapEntry {
        status: StatusType::Delivered,
        label: "Delivered",
    },
    StatusBadgeMapEntry {
        status: StatusType::Read,
        label: "Read",
    },
    StatusBadgeMapEntry {
        status: StatusType::Valid,
        label: "Valid",
    },
    StatusBadgeMapEntry {
        status: StatusType::Invalid,
        label: "Invalid",
    },
    StatusBadgeMapEntry {
        status: StatusType::Expired,
        label: "Expired",
    },
];

/// Renders the default badge component for the given status with no extra props.
/// Used internally by [`StatusPicker`](super::StatusPicker::StatusPicker) to
/// display each option in the list.
pub fn render_status_badge(status: StatusType) -> Element {
    match status {
        StatusType::Draft => rsx! { StatusDraftBadge {} },
        StatusType::Pending => rsx! { StatusPendingBadge {} },
        StatusType::Submitted => rsx! { StatusSubmittedBadge {} },
        StatusType::InReview => rsx! { StatusInReviewBadge {} },
        StatusType::Reviewed => rsx! { StatusReviewedBadge {} },
        StatusType::Processing => rsx! { StatusProcessingBadge {} },
        StatusType::Processed => rsx! { StatusProcessedBadge {} },
        StatusType::Queued => rsx! { StatusQueuedBadge {} },
        StatusType::Ready => rsx! { StatusReadyBadge {} },
        StatusType::Scheduled => rsx! { StatusScheduledBadge {} },
        StatusType::Approved => rsx! { StatusApprovedBadge {} },
        StatusType::Rejected => rsx! { StatusRejectedBadge {} },
        StatusType::Done => rsx! { StatusDoneBadge {} },
        StatusType::Completed => rsx! { StatusCompletedBadge {} },
        StatusType::Success => rsx! { StatusSuccessBadge {} },
        StatusType::Failed => rsx! { StatusFailedBadge {} },
        StatusType::Error => rsx! { StatusErrorBadge {} },
        StatusType::Cancelled => rsx! { StatusCancelledBadge {} },
        StatusType::Timeout => rsx! { StatusTimeoutBadge {} },
        StatusType::Archived => rsx! { StatusArchivedBadge {} },
        StatusType::Delete => rsx! { StatusDeleteBadge {} },
        StatusType::Deleted => rsx! { StatusDeletedBadge {} },
        StatusType::Active => rsx! { StatusActiveBadge {} },
        StatusType::Inactive => rsx! { StatusInactiveBadge {} },
        StatusType::Disabled => rsx! { StatusDisabledBadge {} },
        StatusType::Enabled => rsx! { StatusEnabledBadge {} },
        StatusType::Suspended => rsx! { StatusSuspendedBadge {} },
        StatusType::Paused => rsx! { StatusPausedBadge {} },
        StatusType::OnHold => rsx! { StatusOnHoldBadge {} },
        StatusType::Sent => rsx! { StatusSentBadge {} },
        StatusType::Delivered => rsx! { StatusDeliveredBadge {} },
        StatusType::Read => rsx! { StatusReadBadge {} },
        StatusType::Valid => rsx! { StatusValidBadge {} },
        StatusType::Invalid => rsx! { StatusInvalidBadge {} },
        StatusType::Expired => rsx! { StatusExpiredBadge {} },
    }
}
