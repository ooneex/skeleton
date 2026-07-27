use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleComposeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleComposeIcon(props: CircleComposeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m14.581,2.349c-.825-.22-1.687-.349-2.581-.349C6.477,2,2,6.477,2,12s4.477,10,10,10,10-4.477,10-10c0-.894-.128-1.756-.349-2.581",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "22",
                y1: "2",
                x2: "11",
                y2: "13",
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
