use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SidebarMenuBadgeProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn SidebarMenuBadge(props: SidebarMenuBadgeProps) -> Element {
    rsx! {
        div {
            "data-slot": "sidebar-menu-badge",
            "data-sidebar": "menu-badge",
            class: cn([
                "text-primary peer-hover/menu-button:text-primary peer-data-active/menu-button:text-primary pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded px-1 text-xs font-medium tabular-nums select-none peer-data-[size=md]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 group-data-[collapsible=icon]:hidden",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
