use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct EditCircleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn EditCircleIcon(props: EditCircleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14.5 3.35181C17.4606 4.20611 19.7939 6.53948 20.6482 9.50004",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M9.50004 3.35181C6.53948 4.20611 4.20611 6.53948 3.35181 9.50004",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M9.50004 20.6482C6.53948 19.7939 4.20611 17.4606 3.35181 14.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14.5 20.6482C17.4606 19.7939 19.7939 17.4606 20.6482 14.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14.5 18H9.5V23H14.5V18Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M14.5 1H9.5V6H14.5V1Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6 14.5L6 9.5L1 9.5L1 14.5L6 14.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23 14.5L23 9.5L18 9.5L18 14.5L23 14.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
