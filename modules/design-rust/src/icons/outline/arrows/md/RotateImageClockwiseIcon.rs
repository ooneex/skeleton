use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RotateImageClockwiseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RotateImageClockwiseIcon(props: RotateImageClockwiseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25 9L8 9C6.34315 9 5 10.3431 5 12L5 25C5 26.6569 6.34315 28 8 28L25 28C26.6569 28 28 26.6569 28 25L28 12C28 10.3431 26.6569 9 25 9Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10 28L20.5 15.5L28 23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M11.5 17C12.6046 17 13.5 16.1046 13.5 15C13.5 13.8954 12.6046 13 11.5 13C10.3954 13 9.5 13.8954 9.5 15C9.5 16.1046 10.3954 17 11.5 17Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9 1.5L12.5 5C11.9953 5 9.52347 5 7.0002 5C3.68649 5 1 7.68629 1 11V12",
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
