use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct InputGroupTextProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn InputGroupText(props: InputGroupTextProps) -> Element {
    rsx! {
        div {
            "data-slot": "input-group-text",
            class: cn([
                "text-muted-foreground flex items-center px-2.5 text-sm group-data-[size=xs]/input-group:text-xs",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
