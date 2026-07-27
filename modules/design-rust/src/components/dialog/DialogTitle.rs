use dioxus::prelude::*;

use crate::utils::cn;

use super::useDialogPresence::use_register_dialog_title;

#[derive(Props, Clone, PartialEq)]
pub struct DialogTitleProps {
    #[props(default)]
    pub id: Option<String>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = h2, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn DialogTitle(props: DialogTitleProps) -> Element {
    let title_id = use_register_dialog_title();
    let resolved_id = props.id.or(title_id);

    rsx! {
        h2 {
            id: resolved_id,
            "data-slot": "dialog-title",
            class: cn([
                "leading-none font-medium",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
