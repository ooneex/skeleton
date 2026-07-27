use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::ui_layout::sm::TriangleWarningIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusSuspendedBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Danger,
            size: props.size.unwrap_or_default(),
            class: props.class,
            attributes: props.attributes,
            TriangleWarningIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "Suspended" },
                }
            }
        }
    }
}
