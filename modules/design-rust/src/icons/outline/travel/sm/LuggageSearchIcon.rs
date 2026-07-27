use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LuggageSearchIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LuggageSearchIcon(props: LuggageSearchIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9 10V17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9 6V3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V6",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10.5 21L7 21C5.89543 21 5 20.1046 5 19L5 8C5 6.89543 5.89543 6 7 6L17 6C18.1046 6 19 6.89543 19 8L19 9.42969",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16.5 20C18.433 20 20 18.433 20 16.5C20 14.567 18.433 13 16.5 13C14.567 13 13 14.567 13 16.5C13 18.433 14.567 20 16.5 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21.5 21.5L18.975 18.975",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
