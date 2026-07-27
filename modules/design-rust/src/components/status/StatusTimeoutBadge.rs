use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::time::sm::StopwatchIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusTimeoutBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Danger,
            size: props.size,
            class: props.class,
            ..props.attributes,
            StopwatchIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "Timeout" },
                }
            }
        }
    }
}
