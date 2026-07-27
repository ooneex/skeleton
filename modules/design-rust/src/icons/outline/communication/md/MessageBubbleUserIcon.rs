use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MessageBubbleUserIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MessageBubbleUserIcon(props: MessageBubbleUserIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "11",
                cy: "16",
                r: "3",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m5,28c0-3.314,2.686-6,6-6s6,2.686,6,6",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
            path {
                d: "m13,7H5c-1.657,0-3,1.343-3,3v15c0,1.657,1.343,3,3,3h20c1.657,0,3-1.343,3-3v-9",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m17,3.5v7c0,.828.672,1.5,1.5,1.5h1.5v3l5-3h4.5c.828,0,1.5-.672,1.5-1.5V3.5c0-.828-.672-1.5-1.5-1.5h-11c-.828,0-1.5.672-1.5,1.5Z",
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
