use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoxSearchIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoxSearchIcon(props: BoxSearchIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 20V36C7 38.7614 9.23858 41 12 41H24M41 20L41 24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M27 24H21C19.8954 24 19 22.966 19 21.8614C19 20.7568 19.8954 20 21 20H27C28.1046 20 29 20.8954 29 22C29 23.1046 28.1046 24 27 24Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M43 15L43 5L5 5L5 15L43 15Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M34.5 42C38.6421 42 42 38.6421 42 34.5C42 30.3579 38.6421 27 34.5 27C30.3579 27 27 30.3579 27 34.5C27 38.6421 30.3579 42 34.5 42Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M44.5 44.5L40 40L40.5 40.5",
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
