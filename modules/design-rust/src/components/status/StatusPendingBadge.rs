use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::time::sm::HourglassIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusPendingBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Warning,
            size: props.size,
            class: props.class,
            ..props.attributes,
            HourglassIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "Pending" },
                }
            }
        }
    }
}
