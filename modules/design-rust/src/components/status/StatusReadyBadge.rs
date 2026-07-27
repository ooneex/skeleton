use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::ui_layout::sm::BadgeCheckIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusReadyBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Success,
            size: props.size.unwrap_or_default(),
            class: props.class,
            attributes: props.attributes,
            BadgeCheckIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "Ready" },
                }
            }
        }
    }
}
