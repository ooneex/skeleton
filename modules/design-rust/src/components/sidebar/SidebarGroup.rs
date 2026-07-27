use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SidebarGroupProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn SidebarGroup(props: SidebarGroupProps) -> Element {
    rsx! {
        div {
            "data-slot": "sidebar-group",
            "data-sidebar": "group",
            class: cn(["relative flex w-full min-w-0 flex-col", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
