use dioxus::prelude::*;

use crate::components::badge::{Badge, BadgeVariantType};
use crate::icons::outline::files_folders::sm::ArchiveIcon;

use super::types::StatusBadgeProps;

#[component]
pub fn StatusArchivedBadge(props: StatusBadgeProps) -> Element {
    rsx! {
        Badge {
            variant: BadgeVariantType::Neutral,
            size: props.size.unwrap_or_default(),
            class: props.class,
            attributes: props.attributes,
            ArchiveIcon { "data-icon": "inline-start" }
            {
                match props.children {
                    Some(children) => children,
                    None => rsx! { "Archived" },
                }
            }
        }
    }
}
