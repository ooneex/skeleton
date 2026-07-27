use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SidebarMenuProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = ul, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn SidebarMenu(props: SidebarMenuProps) -> Element {
    rsx! {
        ul {
            "data-slot": "sidebar-menu",
            "data-sidebar": "menu",
            class: cn(["gap-1 flex w-full min-w-0 flex-col", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
