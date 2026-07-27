use dioxus::prelude::*;

use crate::utils::cn;

use super::useDialogPresence::use_register_dialog_description;

#[derive(Props, Clone, PartialEq)]
pub struct AlertDialogDescriptionProps {
    #[props(default)]
    pub id: Option<String>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = p, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn AlertDialogDescription(props: AlertDialogDescriptionProps) -> Element {
    let description_id = use_register_dialog_description();
    let resolved_id = props.id.or(description_id);

    rsx! {
        p {
            id: resolved_id,
            "data-slot": "alert-dialog-description",
            class: cn([
                "text-muted-foreground *:[a]:hover:text-foreground text-sm text-balance md:text-pretty *:[a]:underline *:[a]:underline-offset-3",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
