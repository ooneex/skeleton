use dioxus::prelude::*;

use crate::components::skeleton::Skeleton;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SidebarMenuSkeletonProps {
    #[props(default = false)]
    pub show_icon: bool,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SidebarMenuSkeleton(props: SidebarMenuSkeletonProps) -> Element {
    rsx! {
        div {
            "data-slot": "sidebar-menu-skeleton",
            "data-sidebar": "menu-skeleton",
            class: cn(["h-8 gap-2 rounded px-2 flex items-center", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            if props.show_icon {
                Skeleton {
                    class: Some("size-4 rounded".to_string()),
                    attributes: vec![Attribute::new("data-sidebar", "menu-skeleton-icon", None, false)],
                }
            }
            Skeleton {
                class: Some("h-4 max-w-(--skeleton-width) flex-1".to_string()),
                attributes: vec![
                    Attribute::new("data-sidebar", "menu-skeleton-text", None, false),
                    Attribute::new("style", "--skeleton-width: 70%;", None, false),
                ],
            }
        }
    }
}
