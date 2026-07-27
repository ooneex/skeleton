use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DragDown2fIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DragDown2fIcon(props: DragDown2fIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13 21L13 44",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M34.9999 21L35 44",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M5.50007 36.5L13.0001 44L20.5001 36.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M27.5 36.4999L35 43.9999L42.5 36.4999",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M13 21C8.58172 21 5 17.4183 5 13C5 8.58172 8.58172 5 13 5C17.4183 5 21 8.58172 21 13C21 17.4183 17.4183 21 13 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M35 21C30.5817 21 27 17.4183 27 13C27 8.58172 30.5817 5 35 5C39.4183 5 43 8.58172 43 13C43 17.4183 39.4183 21 35 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
