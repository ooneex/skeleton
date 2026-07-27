use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Link4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Link4Icon(props: Link4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m9,18h-2c-3.314,0-6-2.686-6-6h0c0-3.314,2.686-6,6-6h2",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m15,18h2c3.314,0,6-2.686,6-6h0c0-3.314-2.686-6-6-6h-2",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "8",
                y1: "12",
                x2: "16",
                y2: "12",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
