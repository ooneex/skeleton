use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::loaders::sm::SpinnerLoaderIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusProcessingBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Info,
            size: props.size.unwrap_or_default(),
            class: props.class,
            attributes: props.attributes,
            SpinnerLoaderIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "Processing" },
                }
            }
        }
    }
}
