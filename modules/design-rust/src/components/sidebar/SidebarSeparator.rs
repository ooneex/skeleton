use dioxus::prelude::*;

use crate::components::separator::Separator;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SidebarSeparatorProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SidebarSeparator(props: SidebarSeparatorProps) -> Element {
    rsx! {
        Separator {
            class: Some(cn([
                "bg-sidebar-border mx-2 w-auto",
                props.class.as_deref().unwrap_or_default(),
            ])),
            attributes: props.attributes,
        }
    }
}
