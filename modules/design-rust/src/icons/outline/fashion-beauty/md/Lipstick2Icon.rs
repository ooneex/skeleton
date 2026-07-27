use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Lipstick2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Lipstick2Icon(props: Lipstick2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6.00001 18L6 14H12L12 18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4 24H14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M18 27C18 28.1046 18.8954 29 20 29H26C27.1046 29 28 28.1046 28 27L28 16H18L18 27Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4.00001 27C4.00001 28.1046 4.89544 29 6.00001 29H12C13.1046 29 14 28.1046 14 27L14 18H4L4.00001 27Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6 10V7.66366C6 6.4279 6.38157 5.22228 7.09257 4.21154L8.1821 2.66271C8.58038 2.09651 9.41962 2.09651 9.8179 2.66271L10.9074 4.21154C11.6184 5.22228 12 6.4279 12 7.66366V10",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
