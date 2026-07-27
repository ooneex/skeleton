use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::communication::sm::PaperPlaneIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusSentBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Info,
            size: props.size,
            class: props.class,
            ..props.attributes,
            PaperPlaneIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "Sent" },
                }
            }
        }
    }
}
