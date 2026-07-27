use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SelectLabelProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// A non-interactive label that identifies a group of select items.
#[component]
pub fn SelectLabel(props: SelectLabelProps) -> Element {
    rsx! {
        div {
            "data-slot": "select-label",
            class: cn([
                "text-muted-foreground px-2 py-1.5 text-xs",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
