use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Link3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Link3Icon(props: Link3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M30 18H17C14.7909 18 13 19.7909 13 22V37C13 39.2091 14.7909 41 17 41H41C43.2091 41 45 39.2091 45 37V22C45 19.7909 43.2091 18 41 18H40",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M18 30H31C33.2091 30 35 28.2091 35 26V11C35 8.79086 33.2091 7 31 7H7C4.79086 7 3 8.79086 3 11V26C3 28.2091 4.79086 30 7 30H8",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
