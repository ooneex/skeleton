use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::ui_layout::sm::TrashIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusDeleteBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Danger,
            size: props.size,
            class: props.class,
            ..props.attributes,
            TrashIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "Delete" },
                }
            }
        }
    }
}
