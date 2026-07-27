use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PaginationItemProps {
    #[props(extends = li, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn PaginationItem(props: PaginationItemProps) -> Element {
    rsx! {
        li {
            "data-slot": "pagination-item",
            ..props.attributes,
            {props.children}
        }
    }
}
