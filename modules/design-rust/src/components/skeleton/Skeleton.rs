use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SkeletonProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    #[props(default)]
    pub children: Element,
}

#[component]
pub fn Skeleton(props: SkeletonProps) -> Element {
    rsx! {
        div {
            "data-slot": "skeleton",
            class: cn(["bg-muted rounded animate-pulse", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
