use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct BreadcrumbProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = nav, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Breadcrumb compound component.
///
/// Use the namespaced sub-components: `Breadcrumb.List`, `Breadcrumb.Item`,
/// `Breadcrumb.Link`, `Breadcrumb.Page`, `Breadcrumb.Separator`,
/// `Breadcrumb.Ellipsis`.
#[component]
pub fn Breadcrumb(props: BreadcrumbProps) -> Element {
    rsx! {
        nav {
            "aria-label": "breadcrumb",
            "data-slot": "breadcrumb",
            class: cn([props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
