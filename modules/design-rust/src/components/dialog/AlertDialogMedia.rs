use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct AlertDialogMediaProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn AlertDialogMedia(props: AlertDialogMediaProps) -> Element {
    rsx! {
        div {
            "data-slot": "alert-dialog-media",
            class: cn([
                "bg-muted mb-2 inline-flex size-16 items-center justify-center rounded sm:group-data-[size=md]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-8",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
