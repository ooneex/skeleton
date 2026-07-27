use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::ui_layout::sm::XmarkIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusFailedBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Danger,
            size: props.size.unwrap_or_default(),
            class: props.class,
            attributes: props.attributes,
            XmarkIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "Failed" },
                }
            }
        }
    }
}
