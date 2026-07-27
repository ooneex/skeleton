use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PosIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PosIcon(props: PosIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10.9375 29C9.48775 29 8.3125 27.8359 8.3125 26.4V18.6L6 16V6C6 4.34315 7.34315 3 9 3H23C24.6569 3 26 4.34315 26 6V14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M22 14H10V7H22V14Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M15 23L31 23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M15 19.5L15 28.5C15 29.3284 15.6716 30 16.5 30L29.5 30C30.3284 30 31 29.3284 31 28.5L31 19.5C31 18.6716 30.3284 18 29.5 18L16.5 18C15.6716 18 15 18.6716 15 19.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
