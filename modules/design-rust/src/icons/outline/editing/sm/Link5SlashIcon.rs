use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Link5SlashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Link5SlashIcon(props: Link5SlashIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                x1: "8.464",
                y1: "8.464",
                x2: "15.536",
                y2: "15.536",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m5.429,12.914l-2.843-2.843c-.781-.781-.781-2.047,0-2.828L7.243,2.586c.781-.781,2.047-.781,2.828,0l2.843,2.843",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m11.086,18.571l2.843,2.843c.781.781,2.047.781,2.828,0l4.657-4.657c.781-.781.781-2.047,0-2.828l-2.843-2.843",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "22",
                y1: "2",
                x2: "2",
                y2: "22",
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
