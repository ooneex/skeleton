use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PunchingBagIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PunchingBagIcon(props: PunchingBagIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 16V12L23 3H22.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M29 16V12L25 3H25.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M14 38H34",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14 21H34",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14 2.99994H34",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M34 12H24H14V40C14 42.7614 16.2386 45 19 45H29C31.7614 45 34 42.7614 34 40V12Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
