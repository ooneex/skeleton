use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextSparkleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextSparkleIcon(props: TextSparkleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10.5 19.5L9 16L7.5 19.5L4 21L7.5 22.5L9 26L10.5 22.5L14 21L10.5 19.5Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M15.9 34.1L15 32L14.1 34.1L12 35L14.1 35.9L15 38L15.9 35.9L18 35L15.9 34.1Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M24 41V7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 7H40",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M39.3 23.7L37.5 20L35.7 23.7L32 25.5L35.7 27.3L37.5 31L39.3 27.3L43 25.5L39.3 23.7Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
