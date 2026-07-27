use dioxus::prelude::*;

/// Provider-level delay setting shared across multiple tooltips.
#[derive(Clone, Copy)]
pub struct TooltipProviderContext {
    /// Milliseconds before tooltips open on hover.
    pub delay: f64,
}

/// Per-tooltip open/close state and scheduling.
#[derive(Clone, Copy)]
pub struct TooltipContext {
    pub open: Signal<bool>,
    pub set_open: Callback<bool>,
    /// Stable element id of the trigger, used by `use_anchor_position`.
    pub trigger_id: Signal<String>,
    /// Stable element id of the positioner div inside `TooltipContent`.
    pub positioner_id: Signal<String>,
    /// Opens the tooltip after the configured delay.
    pub schedule_open: Callback<()>,
    /// Cancels a pending delayed open without closing an already-open tooltip.
    pub cancel_open: Callback<()>,
}
