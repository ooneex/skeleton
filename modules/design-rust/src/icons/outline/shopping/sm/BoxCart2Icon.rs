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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14.5 3L14.5 6",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M1 2L3.99994 2L5.5 17H21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M20 3L9 3L9 11.5C9 12.3284 9.67157 13 10.5 13L18.5 13C19.3284 13 20 12.3284 20 11.5L20 3Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M20.5001 22.5L17.5001 17L17.6839 17.3308",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6 23C6.55228 23 7 22.5523 7 22C7 21.4477 6.55228 21 6 21C5.44772 21 5 21.4477 5 22C5 22.5523 5.44772 23 6 23Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                stroke_linejoin: "round",
            }
        }
    }
}
