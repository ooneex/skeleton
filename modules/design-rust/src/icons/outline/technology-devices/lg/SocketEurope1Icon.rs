use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SocketEurope1IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SocketEurope1Icon(props: SocketEurope1IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 5V43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M34 5V43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M43 38L43 10C43 7.23858 40.7614 5 38 5L10 5C7.23858 5 5 7.23857 5 10L5 38C5 40.7614 7.23857 43 10 43L38 43C40.7614 43 43 40.7614 43 38Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21 24C21 25.6569 22.3431 27 24 27C25.6569 27 27 25.6569 27 24C27 22.3431 25.6569 21 24 21C22.3431 21 21 22.3431 21 24Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21 13C21 14.6569 22.3431 16 24 16C25.6569 16 27 14.6569 27 13C27 11.3431 25.6569 10 24 10C22.3431 10 21 11.3431 21 13Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21 35C21 36.6569 22.3431 38 24 38C25.6569 38 27 36.6569 27 35C27 33.3431 25.6569 32 24 32C22.3431 32 21 33.3431 21 35Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
