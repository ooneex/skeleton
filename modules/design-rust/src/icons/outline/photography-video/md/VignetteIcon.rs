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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 22C20.9706 22 25 19.3137 25 16C25 12.6863 20.9706 10 16 10C11.0294 10 7 12.6863 7 16C7 19.3137 11.0294 22 16 22Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M30 24L30 8C30 6.34315 28.6569 5 27 5L5 5C3.34315 5 2 6.34314 2 8L2 24C2 25.6569 3.34314 27 5 27L27 27C28.6569 27 30 25.6569 30 24Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
