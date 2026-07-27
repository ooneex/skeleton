use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PenWritingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PenWritingIcon(props: PenWritingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                x1: "2",
                y1: "21",
                x2: "22",
                y2: "21",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m9,16l-5,1,1-5L14.168,2.832c1.105-1.105,2.895-1.105,4,0h0c1.105,1.105,1.105,2.895,0,4l-9.168,9.168Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
