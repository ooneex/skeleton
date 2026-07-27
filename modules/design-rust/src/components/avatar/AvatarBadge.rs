use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct AvatarBadgeProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = span, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn AvatarBadge(props: AvatarBadgeProps) -> Element {
    rsx! {
        span {
            "data-slot": "avatar-badge",
            class: cn([
                "bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-blend-color ring-2 select-none",
                "group-data-[size=xs]/avatar:size-2 group-data-[size=xs]/avatar:[&>svg]:hidden",
                "group-data-[size=sm]/avatar:size-2.5",
                "group-data-[size=md]/avatar:size-3",
                "group-data-[size=lg]/avatar:size-4 group-data-[size=lg]/avatar:ring-3 group-data-[size=lg]/avatar:right-2 group-data-[size=lg]/avatar:bottom-2",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
