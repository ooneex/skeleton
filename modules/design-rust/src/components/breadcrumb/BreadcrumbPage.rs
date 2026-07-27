use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct BreadcrumbPageProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = span, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn BreadcrumbPage(props: BreadcrumbPageProps) -> Element {
    rsx! {
        span {
            "data-slot": "breadcrumb-page",
            "aria-current": "page",
            class: cn([
                "text-foreground font-normal",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
