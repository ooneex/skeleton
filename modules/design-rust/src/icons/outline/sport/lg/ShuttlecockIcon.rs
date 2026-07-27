use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShuttlecockIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShuttlecockIcon(props: ShuttlecockIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10.533 25.783L22.2175 37.4675",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M38 20L18.5 33.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M28 10L14.5 29.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M15.4204 40.3812L45 30L45 20L38 20L38 10L28 10L28 3L18 3L7.58939 32.6644",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M7.12134 32.3934L15.6066 40.8787L13.4853 43C11.1422 45.3432 7.34316 45.3432 5.00003 43C2.6569 40.6569 2.65689 36.8579 5.00003 34.5147L7.12134 32.3934Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
