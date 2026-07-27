use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleDotsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleDotsIcon(props: CircleDotsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 45C35.598 45 45 35.598 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 35.598 12.402 45 24 45Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 25.5C24.8284 25.5 25.5 24.8284 25.5 24C25.5 23.1716 24.8284 22.5 24 22.5C23.1716 22.5 22.5 23.1716 22.5 24C22.5 24.8284 23.1716 25.5 24 25.5Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
            }
            path {
                d: "M34.5 25.5C35.3284 25.5 36 24.8284 36 24C36 23.1716 35.3284 22.5 34.5 22.5C33.6716 22.5 33 23.1716 33 24C33 24.8284 33.6716 25.5 34.5 25.5Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
            }
            path {
                d: "M13.5 25.5C14.3284 25.5 15 24.8284 15 24C15 23.1716 14.3284 22.5 13.5 22.5C12.6716 22.5 12 23.1716 12 24C12 24.8284 12.6716 25.5 13.5 25.5Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
            }
        }
    }
}
