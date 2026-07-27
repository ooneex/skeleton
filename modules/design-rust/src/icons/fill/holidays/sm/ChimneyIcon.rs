use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChimneyIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChimneyIcon(props: ChimneyIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 7V3H21V7H3Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
            }
            path {
                d: "M2 2H22V8H2V2Z",
                fill: "currentColor",
            }
            rect {
                x: "4",
                y: "10",
                width: "9",
                height: "3",
                fill: "currentColor",
            }
            rect {
                x: "4",
                y: "20",
                width: "9",
                height: "3",
                fill: "currentColor",
            }
            rect {
                width: "9",
                height: "3",
                transform: "matrix(-1 0 0 1 20 15)",
                fill: "currentColor",
            }
            rect {
                x: "15",
                y: "10",
                width: "5",
                height: "3",
                fill: "currentColor",
                "data-color": "color-2",
            }
            rect {
                x: "15",
                y: "20",
                width: "5",
                height: "3",
                fill: "currentColor",
                "data-color": "color-2",
            }
            rect {
                width: "5",
                height: "3",
                transform: "matrix(-1 0 0 1 9 15)",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
