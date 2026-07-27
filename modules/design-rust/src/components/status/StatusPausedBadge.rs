use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::photography_video::sm::MediaPauseIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusPausedBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Warning,
            size: props.size,
            class: props.class,
            ..props.attributes,
            MediaPauseIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "Paused" },
                }
            }
        }
    }
}
