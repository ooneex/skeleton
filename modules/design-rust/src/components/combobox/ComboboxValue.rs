use dioxus::prelude::*;

use super::comboboxContext::ComboboxContext;

#[derive(Props, Clone, PartialEq)]
pub struct ComboboxValueProps {
    /// Placeholder shown when nothing is selected.
    #[props(default)]
    pub placeholder: Option<String>,
}

/// Renders the current selection text (or placeholder when empty).
#[component]
pub fn ComboboxValue(props: ComboboxValueProps) -> Element {
    let ctx = use_context::<ComboboxContext>();
    let value = ctx.value.read();
    let display = if value.is_empty() {
        props.placeholder.unwrap_or_default()
    } else {
        value.join(", ")
    };
    rsx! {
        span { "data-slot": "combobox-value", "{display}" }
    }
}
