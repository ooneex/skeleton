use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Button2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Button2Icon(props: Button2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M23 26.9999L17.5417 21.4999L18.3084 22.2723",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21 17.9999L10.0001 14.0003L14 24.9999L21 17.9999Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M26 19H28C29.6569 19 31 17.6569 31 16V8C31 6.34315 29.6569 5 28 5L4 5C2.34315 5 1 6.34315 1 8L1 16C1 17.6569 2.34315 19 4 19H7",
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
