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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18 15.5L6 15.5L12 6.5L18 15.5Z",
                fill: "currentColor",
            }
        }
    }
}
