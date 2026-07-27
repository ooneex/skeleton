use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Connections2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Connections2Icon(props: Connections2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21.3033 7.3033L16 2L10.6967 7.3033L16 12.6066L21.3033 7.3033Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21.3033 24.6967L16 19.3934L10.6967 24.6967L16 30L21.3033 24.6967Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24.6968 21.3034L30.0001 16.0001L24.6968 10.6968L19.3935 16.0001L24.6968 21.3034Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7.30327 21.3033L12.6066 16L7.30327 10.6967L1.99997 16L7.30327 21.3033Z",
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
