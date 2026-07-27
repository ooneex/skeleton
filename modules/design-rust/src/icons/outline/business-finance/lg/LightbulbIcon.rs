use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LightbulbIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LightbulbIcon(props: LightbulbIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 2V3",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M45 23L44 23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M4 23L3 23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M38.8492 8.15076L38.1421 8.85786",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9.85791 8.85791L9.1508 8.1508",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 32V38",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M24 38C32.2843 38 39 31.2843 39 23C39 14.7157 32.2843 8 24 8C15.7157 8 9 14.7157 9 23C9 31.2843 15.7157 38 24 38Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17 36.5L18.0391 42.5455H18.9526C19.3592 42.5455 19.7253 42.7916 19.8787 43.1682L20.625 45H27.375L28.1213 43.1682C28.2747 42.7916 28.6408 42.5455 29.0474 42.5455H30.125L31 36.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M20 28L24 32L28 28",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
