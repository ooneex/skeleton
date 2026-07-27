use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretUpIcon(props: CaretUpIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 17H21L12 5L3 17Z",
                fill: "currentColor",
            }
        }
    }
}
