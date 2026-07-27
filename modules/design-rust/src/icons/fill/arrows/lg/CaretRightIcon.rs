use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretRightIcon(props: CaretRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 42L14 6L40 24L14 42Z",
                fill: "currentColor",
            }
        }
    }
}
