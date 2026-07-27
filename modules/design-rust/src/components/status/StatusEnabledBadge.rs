use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::photography_video::sm::MediaPlayIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusEnabledBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Success,
            size: props.size,
            class: props.class,
            ..props.attributes,
            MediaPlayIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "Enabled" },
                }
            }
        }
    }
}
