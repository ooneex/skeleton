use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SidebarGroupContentProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn SidebarGroupContent(props: SidebarGroupContentProps) -> Element {
    rsx! {
        div {
            "data-slot": "sidebar-group-content",
            "data-sidebar": "group-content",
            class: cn(["text-sm w-full", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
