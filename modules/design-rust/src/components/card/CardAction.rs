use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct CardActionProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn CardAction(props: CardActionProps) -> Element {
    rsx! {
        div {
            "data-slot": "card-action",
            class: cn([
                "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
