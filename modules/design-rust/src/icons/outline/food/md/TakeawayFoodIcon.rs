use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TakeawayFoodIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TakeawayFoodIcon(props: TakeawayFoodIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M29 17V16C29 13.2386 26.7614 11 24 11H8C5.23858 11 3 13.2386 3 16L3 17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M29 21V23C29 25.7614 26.7614 28 24 28H8C5.23858 28 3 25.7614 3 23L3 21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M31 20V18C31 17.4477 30.5523 17 30 17H2C1.44772 17 1 17.4477 1 18V20C1 20.5523 1.44772 21 2 21H12.25L13.5 24H18.5L19.75 21H30C30.5523 21 31 20.5523 31 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 5V2",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M22 7V5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M10 7V5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
