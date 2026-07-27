use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Link5IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Link5Icon(props: Link5IconProps) -> Element {
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
                d: "m8.257,12.914c-.781.781-2.047.781-2.828,0l-2.843-2.843c-.781-.781-.781-2.047,0-2.828L7.243,2.586c.781-.781,2.047-.781,2.828,0l2.843,2.843c.781.781.781,2.047,0,2.828",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m11.086,15.743c-.781.781-.781,2.047,0,2.828l2.843,2.843c.781.781,2.047.781,2.828,0l4.657-4.657c.781-.781.781-2.047,0-2.828l-2.843-2.843c-.781-.781-2.047-.781-2.828,0",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
