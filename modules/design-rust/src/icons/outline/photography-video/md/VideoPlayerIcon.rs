use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VideoPlayerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VideoPlayerIcon(props: VideoPlayerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 10L22 16L12 22V10Z",
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
