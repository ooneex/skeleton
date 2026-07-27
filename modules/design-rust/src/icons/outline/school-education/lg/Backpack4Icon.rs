use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Backpack4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Backpack4Icon(props: Backpack4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M39 25L40.1562 25.0361C42.8555 25.1205 45 27.3331 45 30.0337L45 43L39 43",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M9 25L7.84383 25.0361C5.14453 25.1205 3 27.3331 3 30.0337L3 43L9 43",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14 43V32C14 29.2386 16.2386 27 19 27H29C31.7614 27 34 29.2386 34 32V43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M32 10L32 6.99999C32 4.79086 30.2091 3 28 3L20 3C17.7909 3 16 4.79086 16 7.00001L16 10",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M39 21L39 43L9 43L9 21C9 14.3726 14.3726 9 21 9L27 9C33.6274 9 39 14.3726 39 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M20 33H28",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M30 20L30 15L18 15L18 20L30 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
