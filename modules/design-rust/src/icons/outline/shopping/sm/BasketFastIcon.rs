use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BasketFastIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BasketFastIcon(props: BasketFastIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 21H17.7099C18.729 21 19.5851 20.2337 19.6977 19.2209L20.5 12H20.49",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6 17L2 17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M10 17L9.99 17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14 13L5 13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M2 8H22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                fill: "none",
            }
            path {
                d: "M8.75 1.5L5 8H6",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                fill: "none",
            }
            path {
                d: "M15.25 1.5L19 8H18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                fill: "none",
            }
        }
    }
}
