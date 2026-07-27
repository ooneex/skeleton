use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::ui_layout::sm::TrashIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusDeletedBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Danger,
            size: props.size.unwrap_or_default(),
            class: props.class,
            attributes: props.attributes,
            TrashIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "Deleted" },
                }
            }
        }
    }
}
