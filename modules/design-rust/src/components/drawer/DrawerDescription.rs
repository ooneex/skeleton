use dioxus::prelude::*;

use crate::utils::cn;

use super::drawerContext::use_register_drawer_description;

#[derive(Props, Clone, PartialEq)]
pub struct DrawerDescriptionProps {
    #[props(default)]
    pub id: Option<String>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = p, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn DrawerDescription(props: DrawerDescriptionProps) -> Element {
    let ctx_id = use_register_drawer_description();
    let description_id = props.id.or(ctx_id).unwrap_or_default();

    rsx! {
        p {
            id: description_id,
            "data-slot": "drawer-description",
            class: cn([
                "text-muted-foreground text-sm",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
