use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::security::sm::ShieldCheckIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusValidBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Success,
            size: props.size,
            class: props.class,
            ..props.attributes,
            ShieldCheckIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "Valid" },
                }
            }
        }
    }
}
