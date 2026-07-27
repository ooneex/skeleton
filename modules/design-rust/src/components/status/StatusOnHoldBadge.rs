use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::time::sm::ClockIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusOnHoldBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Warning,
            size: props.size.unwrap_or_default(),
            class: props.class,
            attributes: props.attributes,
            ClockIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "On Hold" },
                }
            }
        }
    }
}
