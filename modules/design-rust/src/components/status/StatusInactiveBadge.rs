use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::photography_video::sm::CircleMediaStopIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusInactiveBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Neutral,
            size: props.size,
            class: props.class,
            ..props.attributes,
            CircleMediaStopIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "Inactive" },
                }
            }
        }
    }
}
