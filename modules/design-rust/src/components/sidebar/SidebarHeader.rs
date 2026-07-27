use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SidebarHeaderProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn SidebarHeader(props: SidebarHeaderProps) -> Element {
    rsx! {
        div {
            "data-slot": "sidebar-header",
            "data-sidebar": "header",
            class: cn(["gap-2 p-2 flex flex-col", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
