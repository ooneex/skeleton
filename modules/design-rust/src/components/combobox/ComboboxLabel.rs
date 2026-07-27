use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ComboboxLabelProps {
    #[props(default)]
    pub class: Option<String>,
    pub children: Element,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ComboboxLabel(props: ComboboxLabelProps) -> Element {
    rsx! {
        div {
            "data-slot": "combobox-label",
            class: cn([
                "text-muted-foreground px-2 py-1.5 text-xs",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
