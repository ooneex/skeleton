use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TableRowsColsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TableRowsColsIcon(props: TableRowsColsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 16H29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M3 9H29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 3L12 29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M3 23H29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M29 26L29 6C29 4.34315 27.6569 3 26 3L6 3C4.34315 3 3 4.34315 3 6L3 26C3 27.6569 4.34315 29 6 29L26 29C27.6569 29 29 27.6569 29 26Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
