use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GridListIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GridListIcon(props: GridListIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M27 8H43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M27 16H43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M27 32H43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M27 40H43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            rect {
                x: "5",
                y: "5",
                width: "15",
                height: "15",
                rx: "2.5",
                stroke: "currentColor",
                stroke_width: "2",
                fill: "none",
                "data-cap": "butt",
            }
            rect {
                x: "5",
                y: "28",
                width: "15",
                height: "15",
                rx: "2.5",
                stroke: "currentColor",
                stroke_width: "2",
                fill: "none",
                "data-cap": "butt",
            }
        }
    }
}
