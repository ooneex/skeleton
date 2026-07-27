use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::photography_video::sm::MediaRecordIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusActiveBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Success,
            size: props.size.unwrap_or_default(),
            class: props.class,
            attributes: props.attributes,
            MediaRecordIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "Active" },
                }
            }
        }
    }
}
