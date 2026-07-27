use dioxus::prelude::*;

use super::Avatar::{AvatarContext, AvatarImageStatusType};
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct AvatarFallbackProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = span, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn AvatarFallback(props: AvatarFallbackProps) -> Element {
    let ctx = use_context::<AvatarContext>();
    let is_loaded = *ctx.status.read() == AvatarImageStatusType::Loaded;

    rsx! {
        span {
            "data-slot": "avatar-fallback",
            hidden: is_loaded,
            class: cn([
                "bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
