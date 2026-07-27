use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SwapNodesIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SwapNodesIcon(props: SwapNodesIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6.28691 30.5C5.45764 28.4976 5 26.3022 5 24C5 14.6112 12.6112 7 22 7C27.0773 7 31.6347 9.22581 34.7497 12.7549",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            circle {
                cx: "11",
                cy: "37",
                r: "8",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            circle {
                cx: "38",
                cy: "20",
                r: "8",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
