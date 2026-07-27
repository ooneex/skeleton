use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SidebarMenuItemProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = li, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn SidebarMenuItem(props: SidebarMenuItemProps) -> Element {
    rsx! {
        li {
            "data-slot": "sidebar-menu-item",
            "data-sidebar": "menu-item",
            class: cn(["group/menu-item relative", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
