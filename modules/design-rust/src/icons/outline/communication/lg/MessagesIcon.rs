use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MessagesIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MessagesIcon(props: MessagesIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M31 5H7C4.79086 5 3 6.79086 3 9V24C3 26.2091 4.79086 28 7 28H9.5V37L22 28H31C33.2091 28 35 26.2091 35 24V9C35 6.79086 33.2091 5 31 5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M40 12H41C43.2091 12 45 13.7909 45 16V31C45 33.2091 43.2091 35 41 35H38.5V44L26 35H22",
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
