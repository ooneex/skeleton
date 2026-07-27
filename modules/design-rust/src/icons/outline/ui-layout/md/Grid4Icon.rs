use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Grid4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Grid4Icon(props: Grid4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "4",
                y: "4",
                width: "3",
                height: "3",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "4",
                y: "11",
                width: "3",
                height: "3",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "11",
                y: "11",
                width: "3",
                height: "3",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "18",
                y: "11",
                width: "3",
                height: "3",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            rect {
                x: "25",
                y: "11",
                width: "3",
                height: "3",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "11",
                y: "4",
                width: "3",
                height: "3",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "18",
                y: "4",
                width: "3",
                height: "3",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "25",
                y: "4",
                width: "3",
                height: "3",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            rect {
                x: "4",
                y: "18",
                width: "3",
                height: "3",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "4",
                y: "25",
                width: "3",
                height: "3",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            rect {
                x: "11",
                y: "25",
                width: "3",
                height: "3",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "18",
                y: "25",
                width: "3",
                height: "3",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "25",
                y: "25",
                width: "3",
                height: "3",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "11",
                y: "18",
                width: "3",
                height: "3",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            rect {
                x: "18",
                y: "18",
                width: "3",
                height: "3",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "25",
                y: "18",
                width: "3",
                height: "3",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
        }
    }
}
