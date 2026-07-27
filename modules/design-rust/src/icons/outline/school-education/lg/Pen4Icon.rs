use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Pen4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Pen4Icon(props: Pen4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8.5 29.8197L18.1802 39.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M27 11.6094L36.5 21.1094",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M17.228 40.0924L42.2322 15.0881C43.2085 14.1118 43.2085 12.5289 42.2322 11.5526L36.4473 5.76767C35.471 4.79136 33.8881 4.79136 32.9118 5.76767L7.90758 30.772L5.5 42.5066L17.228 40.0924Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
