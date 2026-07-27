use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VideoStreamingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VideoStreamingIcon(props: VideoStreamingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 11L6 11C4.34315 11 3 12.3431 3 14L3 26C3 27.6569 4.34315 29 6 29L26 29C27.6569 29 29 27.6569 29 26L29 14C29 12.3431 27.6569 11 26 11L25 11",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M7.15082 5.15084C9.5626 3.1813 12.6433 2 16 2C19.3566 2 22.4374 3.18129 24.8491 5.15083",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M10.7146 8.71464C12.1987 7.63612 14.025 7 16 7C17.9749 7 19.8013 7.63612 21.2853 8.71464",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M13.5 16L20.5 20L13.5 24V16Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
