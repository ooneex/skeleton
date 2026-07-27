use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FacePowderIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FacePowderIcon(props: FacePowderIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            ellipse {
                cx: "24",
                cy: "9",
                rx: "15",
                ry: "6",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M25.5 44.9259C25.0066 44.9749 24.5062 45 24 45C15.7157 45 9 38.2843 9 30C9 21.7157 15.7157 15 24 15C29.7561 15 34.7549 18.2422 37.2699 23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23.2996 39.9759C18.1035 39.6163 14 35.2874 14 30C14 24.4772 18.4772 20 24 20C27.2319 20 30.1057 21.5332 31.9338 23.9118",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            circle {
                cx: "37",
                cy: "37",
                r: "9",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
