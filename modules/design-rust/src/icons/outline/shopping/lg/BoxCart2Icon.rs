use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoxCart2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoxCart2Icon(props: BoxCart2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M42 44.5002L37 33.0002L37.7342 34.689",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M25 7L25 16L31 16L31 7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M41 7L15 7L15 25.5C15 26.8807 16.1193 28 17.5 28L38.5 28C39.8807 28 41 26.8807 41 25.5L41 7Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4.00037 5H7.00025L10.0001 33H43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13.5 45C15.433 45 17 43.433 17 41.5C17 39.567 15.433 38 13.5 38C11.567 38 10 39.567 10 41.5C10 43.433 11.567 45 13.5 45Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
