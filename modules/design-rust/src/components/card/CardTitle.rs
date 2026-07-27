use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct CardTitleProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn CardTitle(props: CardTitleProps) -> Element {
    rsx! {
        div {
            "data-slot": "card-title",
            class: cn([
                "p-0 text-sm leading-normal font-medium group-data-[size=sm]/card:text-sm",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
