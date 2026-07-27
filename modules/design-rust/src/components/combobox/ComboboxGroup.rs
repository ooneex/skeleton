use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ComboboxGroupProps {
    #[props(default)]
    pub class: Option<String>,
    pub children: Element,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ComboboxGroup(props: ComboboxGroupProps) -> Element {
    rsx! {
        div {
            "data-slot": "combobox-group",
            role: "group",
            class: cn([props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
