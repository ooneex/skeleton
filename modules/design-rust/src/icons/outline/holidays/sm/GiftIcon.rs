use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GiftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GiftIcon(props: GiftIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                x1: "12",
                y1: "7.001",
                x2: "12",
                y2: "21",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m4,4.501c.047-1.426,1.241-2.545,2.667-2.5,3.944,0,5.333,5,5.333,5h-5.333c-1.426.045-2.62-1.074-2.667-2.5Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m17.333,7.001h-5.333s1.389-5,5.333-5c1.426-.045,2.62,1.074,2.667,2.5-.047,1.426-1.241,2.545-2.667,2.5Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m20,11v8c0,1.105-.895,2-2,2H6c-1.105,0-2-.895-2-2v-8",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "2",
                y1: "7.001",
                x2: "22",
                y2: "7.001",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
