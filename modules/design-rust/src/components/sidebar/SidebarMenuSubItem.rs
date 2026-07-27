use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SidebarMenuSubItemProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = li, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn SidebarMenuSubItem(props: SidebarMenuSubItemProps) -> Element {
    rsx! {
        li {
            "data-slot": "sidebar-menu-sub-item",
            "data-sidebar": "menu-sub-item",
            class: cn(["group/menu-sub-item relative", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
