use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SidebarMenuSubProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = ul, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn SidebarMenuSub(props: SidebarMenuSubProps) -> Element {
    rsx! {
        ul {
            "data-slot": "sidebar-menu-sub",
            "data-sidebar": "menu-sub",
            class: cn([
                "border-ring mx-3.5 translate-x-px gap-1 border-l px-2.5 py-0.5 group-data-[collapsible=icon]:hidden flex min-w-0 flex-col",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
