use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::ui_layout::sm::EyeSlashIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusExpiredBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Danger,
            size: props.size.unwrap_or_default(),
            class: props.class,
            attributes: props.attributes,
            EyeSlashIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "Expired" },
                }
            }
        }
    }
}
