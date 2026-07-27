use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PlusIcon(props: PlusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                fill: "none",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                x1: "24",
                y1: "4",
                x2: "24",
                y2: "44",
                stroke_linejoin: "miter",
            }
            line {
                fill: "none",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                x1: "44",
                y1: "24",
                x2: "4",
                y2: "24",
                stroke_linejoin: "miter",
            }
        }
    }
}
