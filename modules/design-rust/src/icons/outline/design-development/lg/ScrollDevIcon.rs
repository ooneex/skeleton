use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ScrollDevIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ScrollDevIcon(props: ScrollDevIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M45 35L45 38C45 40.7614 42.7614 43 40 43L15 43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8.00006 5L7.00006 5L34 5C36.7614 5 39 7.23858 39 10L39 35",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10.7448 13L3 13L3 9C3 6.79086 4.79086 5 7 5V5C9.20914 5 11 6.79086 11 9L11 20.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M45 35L18.9999 35L18.9999 39C18.9999 41.2092 17.2091 43 15 43V43C12.7908 43 11 41.2092 11 39L11 21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M28.5 16L33.5002 21L28.5 26.0001",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21.5002 16L16.5 21L21.5002 26.0001",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
