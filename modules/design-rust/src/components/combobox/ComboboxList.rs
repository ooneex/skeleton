use dioxus::prelude::*;

use crate::components::scroll_area::ScrollArea;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ComboboxListProps {
    #[props(default)]
    pub class: Option<String>,
    pub children: Element,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ComboboxList(props: ComboboxListProps) -> Element {
    rsx! {
        ScrollArea {
            viewport_class: "max-h-[min(18rem,var(--available-height,18rem))] scroll-py-1 overscroll-contain",
            div {
                "data-slot": "combobox-list",
                class: cn(["p-1", props.class.as_deref().unwrap_or_default()]),
                ..props.attributes,
                {props.children}
            }
        }
    }
}
