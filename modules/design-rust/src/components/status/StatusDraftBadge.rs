use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::communication::sm::PenIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusDraftBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Neutral,
            size: props.size.unwrap_or_default(),
            class: props.class,
            attributes: props.attributes,
            PenIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "Draft" },
                }
            }
        }
    }
}
