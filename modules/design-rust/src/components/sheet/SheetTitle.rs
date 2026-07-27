use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SheetTitleProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = h2, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn SheetTitle(props: SheetTitleProps) -> Element {
    rsx! {
        h2 {
            "data-slot": "sheet-title",
            class: cn([
                "text-foreground font-medium",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
