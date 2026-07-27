use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VignetteIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VignetteIcon(props: VignetteIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 33C31.732 33 38 28.9706 38 24C38 19.0294 31.732 15 24 15C16.268 15 10 19.0294 10 24C10 28.9706 16.268 33 24 33Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M45 36L45 12C45 9.23858 42.7614 7 40 7L8 7C5.23858 7 3 9.23858 3 12L3 36C3 38.7614 5.23857 41 8 41L40 41C42.7614 41 45 38.7614 45 36Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
