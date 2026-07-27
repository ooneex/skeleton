use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CameraClockIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CameraClockIcon(props: CameraClockIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 12.5V18H23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M30 25L30 10C30 8.34315 28.6569 7 27 7L23 7L20 3L12 3L9 7L5 7C3.34315 7 2 8.34315 2 10L2 25C2 26.6569 3.34315 28 5 28L27 28C28.6569 28 30 26.6569 30 25Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
