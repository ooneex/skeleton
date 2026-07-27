use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::time::sm::CalendarIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusScheduledBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Info,
            size: props.size.unwrap_or_default(),
            class: props.class,
            attributes: props.attributes,
            CalendarIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "Scheduled" },
                }
            }
        }
    }
}
