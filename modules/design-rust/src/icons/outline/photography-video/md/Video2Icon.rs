use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Video2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Video2Icon(props: Video2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 6H5C3.34315 6 2 7.34315 2 9V23C2 24.6569 3.34315 26 5 26H21C22.6569 26 24 24.6569 24 23V21L30 24V8L24 11V9C24 7.34315 22.6569 6 21 6Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
        }
    }
}
