use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::communication::sm::EnvelopeOpenIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusReadBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Success,
            size: props.size,
            class: props.class,
            ..props.attributes,
            EnvelopeOpenIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "Read" },
                }
            }
        }
    }
}
