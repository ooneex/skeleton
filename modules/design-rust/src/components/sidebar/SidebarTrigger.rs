use dioxus::prelude::*;

use super::useSidebar::use_sidebar;
use crate::components::button::{ButtonSizeType, ButtonVariantType, button_variants};
use crate::icons::outline::design_development::sm::SidebarRightIcon;

#[derive(Props, Clone, PartialEq)]
pub struct SidebarTriggerProps {
    #[props(default)]
    pub class: Option<String>,
    pub onclick: Option<EventHandler<MouseEvent>>,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SidebarTrigger(props: SidebarTriggerProps) -> Element {
    let context = use_sidebar();

    rsx! {
        button {
            r#type: "button",
            "data-sidebar": "trigger",
            "data-slot": "sidebar-trigger",
            class: button_variants(ButtonVariantType::Ghost, ButtonSizeType::IconSm, props.class.as_deref()),
            onclick: move |event| {
                if let Some(handler) = &props.onclick {
                    handler.call(event);
                }
                context.toggle_sidebar.call(());
            },
            ..props.attributes,
            SidebarRightIcon { class: "size-4" }
            span { class: "sr-only", "Toggle Sidebar" }
        }
    }
}
