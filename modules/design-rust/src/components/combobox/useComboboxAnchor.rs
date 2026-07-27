use dioxus::prelude::*;

/// Returns a stable signal (placeholder) to use as an anchor reference for the
/// combobox popup — analogous to the TS `useRef<HTMLDivElement>` from
/// `useComboboxAnchor`.
///
/// In the Rust port the popup uses absolute positioning relative to the
/// combobox root, so this hook just returns a stable `String` ID that callers
/// can set on their trigger element and pass to [`ComboboxContent`] via
/// `anchor_id` if anchor-aware positioning is needed.
pub fn use_combobox_anchor() -> Signal<String> {
    use_signal(String::new)
}
