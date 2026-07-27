use dioxus::prelude::*;

use crate::utils::cn;

use super::drawerContext::use_register_drawer_title;

#[derive(Props, Clone, PartialEq)]
pub struct DrawerTitleProps {
    #[props(default)]
    pub id: Option<String>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = h2, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn DrawerTitle(props: DrawerTitleProps) -> Element {
    let ctx_id = use_register_drawer_title();
    let title_id = props.id.or(ctx_id).unwrap_or_default();

    rsx! {
        h2 {
            id: title_id,
            "data-slot": "drawer-title",
            class: cn([
                "text-foreground font-semibold",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
