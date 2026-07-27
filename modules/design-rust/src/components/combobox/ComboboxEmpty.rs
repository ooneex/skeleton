use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ComboboxEmptyProps {
    #[props(default)]
    pub class: Option<String>,
    pub children: Element,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ComboboxEmpty(props: ComboboxEmptyProps) -> Element {
    rsx! {
        div {
            "data-slot": "combobox-empty",
            class: cn([
                "text-muted-foreground flex w-full justify-center py-2 text-center text-sm",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
