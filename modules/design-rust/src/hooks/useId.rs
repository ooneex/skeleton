use std::sync::atomic::{AtomicUsize, Ordering};

use dioxus::prelude::*;

static NEXT_ID: AtomicUsize = AtomicUsize::new(0);

/// Stable unique id for the lifetime of a component instance, used to wire
/// `aria-controls`, `aria-labelledby` and DOM lookups. Dioxus has no `useId`
/// counterpart, so ids come from a process-wide counter.
pub fn use_id(prefix: &'static str) -> String {
    use_hook(|| format!("{prefix}-{}", NEXT_ID.fetch_add(1, Ordering::Relaxed)))
}
