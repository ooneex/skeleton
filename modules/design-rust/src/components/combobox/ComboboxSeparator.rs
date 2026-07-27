use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ComboboxSeparatorProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ComboboxSeparator(props: ComboboxSeparatorProps) -> Element {
    rsx! {
        div {
            "data-slot": "combobox-separator",
            role: "separator",
            class: cn([
                "bg-border -mx-1 my-1 h-px",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
        }
    }
}
