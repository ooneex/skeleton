use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct AvatarGroupCountProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn AvatarGroupCount(props: AvatarGroupCountProps) -> Element {
    rsx! {
        div {
            "data-slot": "avatar-group-count",
            class: cn([
                "bg-muted text-muted-foreground size-8 rounded-full text-sm ring-background relative flex shrink-0 items-center justify-center ring-2",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
