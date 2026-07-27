use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChatBubbleForwardIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChatBubbleForwardIcon(props: ChatBubbleForwardIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polyline {
                points: "12 8 17 13 12 18",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m2,13h15-1",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m2,8v-2c0-1.657,1.343-3,3-3h22c1.657,0,3,1.343,3,3v13c0,1.657-1.343,3-3,3h-9l-9,6v-6h-4c-1.657,0-3-1.343-3-3v-6",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
