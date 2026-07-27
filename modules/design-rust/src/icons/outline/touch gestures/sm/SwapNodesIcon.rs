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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17 6.4792C16.479 5.95996 15.8909 5.50791 15.25 5.13715C13.9998 4.41393 12.5482 4 11 4C6.30558 4 2.5 7.80558 2.5 12.5C2.5 13.1889 2.58195 13.8586 2.73663 14.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            circle {
                cx: "5",
                cy: "18",
                r: "4",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            circle {
                cx: "19",
                cy: "10",
                r: "4",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
