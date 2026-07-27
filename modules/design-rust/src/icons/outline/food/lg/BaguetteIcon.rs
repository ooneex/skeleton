use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BaguetteIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BaguetteIcon(props: BaguetteIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18.8689 40.0545C13.8869 43.6367 8.4607 46.1875 5.13531 42.8622C1.80993 39.5368 4.36079 34.1106 7.94296 29.1286C13.761 21.0369 21.0369 13.761 29.1286 7.94298C34.1106 4.36081 39.5368 1.80995 42.8622 5.13533C46.1875 8.46071 43.6367 13.8869 40.0545 18.8689C34.2365 26.9606 26.9605 34.2365 18.8689 40.0545Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M28 15.5V25.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M35 10.5V17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M13 31V37.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20 22.5V32.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
