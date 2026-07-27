use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::loaders::sm::SpinnerLoaderIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusProcessingBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Info,
            size: props.size,
            class: props.class,
            ..props.attributes,
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
