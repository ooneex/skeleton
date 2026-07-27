use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::ui_layout::sm::EyeIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusInReviewBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Info,
            size: props.size,
            class: props.class,
            ..props.attributes,
            EyeIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "In Review" },
                }
            }
        }
    }
}
