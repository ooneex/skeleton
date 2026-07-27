use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::ui_layout::sm::BanIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusDisabledBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Neutral,
            size: props.size.unwrap_or_default(),
            class: props.class,
            attributes: props.attributes,
            BanIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "Disabled" },
                }
            }
        }
    }
}
