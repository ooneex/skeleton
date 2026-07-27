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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "3",
                y: "3",
                width: "1.5",
                height: "1.5",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "19.5",
                y: "3",
                width: "1.5",
                height: "1.5",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            rect {
                x: "8.5",
                y: "3",
                width: "1.5",
                height: "1.5",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "14",
                y: "3",
                width: "1.5",
                height: "1.5",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "3",
                y: "8.5",
                width: "1.5",
                height: "1.5",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "19.5",
                y: "8.5",
                width: "1.5",
                height: "1.5",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "8.5",
                y: "8.5",
                width: "1.5",
                height: "1.5",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "14",
                y: "8.5",
                width: "1.5",
                height: "1.5",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            rect {
                x: "3",
                y: "14",
                width: "1.5",
                height: "1.5",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "19.5",
                y: "14",
                width: "1.5",
                height: "1.5",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "8.5",
                y: "14",
                width: "1.5",
                height: "1.5",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            rect {
                x: "14",
                y: "14",
                width: "1.5",
                height: "1.5",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "3",
                y: "19.5",
                width: "1.5",
                height: "1.5",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            rect {
                x: "19.5",
                y: "19.5",
                width: "1.5",
                height: "1.5",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "8.5",
                y: "19.5",
                width: "1.5",
                height: "1.5",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            rect {
                x: "14",
                y: "19.5",
                width: "1.5",
                height: "1.5",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
        }
    }
}
