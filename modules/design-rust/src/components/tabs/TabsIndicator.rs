use dioxus::prelude::*;

use super::Tabs::TabsContext;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct TabsIndicatorProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// Animated indicator that slides to the active tab. Reads `--active-tab-*`
/// CSS variables updated by `TabsList` via a `MutationObserver`.
#[component]
pub fn TabsIndicator(props: TabsIndicatorProps) -> Element {
    let _tabs = use_context::<TabsContext>();

    rsx! {
        div {
            "data-slot": "tabs-indicator",
            class: cn([
                "absolute transition-all duration-200 ease-out",
                "data-[activation-direction=left]:duration-200 data-[activation-direction=right]:duration-200",
                "data-[activation-direction=up]:duration-200 data-[activation-direction=down]:duration-200",
                "group-data-[variant=default]/tabs-list:rounded group-data-[variant=default]/tabs-list:bg-tabs-accent",
                "group-data-[variant=line]/tabs-list:bg-foreground",
                "group-data-[orientation=horizontal]/tabs:group-data-[variant=line]/tabs-list:bottom-0 group-data-[orientation=horizontal]/tabs:group-data-[variant=line]/tabs-list:h-0.5",
                "group-data-[orientation=vertical]/tabs:group-data-[variant=line]/tabs-list:right-0 group-data-[orientation=vertical]/tabs:group-data-[variant=line]/tabs-list:w-0.5",
                props.class.as_deref().unwrap_or_default(),
            ]),
            style: "top: var(--active-tab-top); left: var(--active-tab-left); width: var(--active-tab-width); height: var(--active-tab-height);",
            ..props.attributes,
        }
    }
}
