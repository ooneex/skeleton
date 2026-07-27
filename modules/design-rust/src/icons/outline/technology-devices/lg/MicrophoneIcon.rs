use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MicrophoneIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MicrophoneIcon(props: MicrophoneIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 38V45",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M33 23L33 12C33 7.02944 28.9706 3 24 3C19.0294 3 15 7.02944 15 12L15 23C15 27.9706 19.0294 32 24 32C28.9706 32 33 27.9706 33 23Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M17 45H31",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9 21L9 23C9 31.2843 15.7157 38 24 38V38C32.2843 38 39 31.2843 39 23L39 21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
