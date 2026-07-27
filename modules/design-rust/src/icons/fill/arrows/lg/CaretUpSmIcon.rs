use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretUpSmIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretUpSmIcon(props: CaretUpSmIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 29.5L34 29.5L24 15.5L14 29.5Z",
                fill: "currentColor",
            }
        }
    }
}
