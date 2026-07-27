use dioxus::prelude::*;

/// Wraps a collection of items for virtual rendering.
/// In the Rust port this is a plain passthrough since we have no virtual list.
#[derive(Props, Clone, PartialEq)]
pub struct ComboboxCollectionProps {
    pub children: Element,
}

#[component]
pub fn ComboboxCollection(props: ComboboxCollectionProps) -> Element {
    rsx! {
        span { "data-slot": "combobox-collection", {props.children} }
    }
}
