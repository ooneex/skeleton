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
                "bg-ring mx-2 h-px w-auto shrink-0",
                props.class.as_deref().unwrap_or_default(),
            ])),
            attributes: props.attributes,
        }
    }
}
