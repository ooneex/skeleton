use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct BreadcrumbLinkProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = a, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn BreadcrumbLink(props: BreadcrumbLinkProps) -> Element {
    rsx! {
        a {
            "data-slot": "breadcrumb-link",
            class: cn([
                "hover:text-foreground transition-colors",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
