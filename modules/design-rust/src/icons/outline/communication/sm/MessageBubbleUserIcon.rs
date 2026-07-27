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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m8,5H3c-1.105,0-2,.895-2,2v12c0,1.105.895,2,2,2h16c1.105,0,2-.895,2-2v-6",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m12,3v4c0,1.105.895,2,2,2h1v3l4-3h2c1.105,0,2-.895,2-2V3c0-1.105-.895-2-2-2h-7c-1.105,0-2,.895-2,2Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            circle {
                cx: "7",
                cy: "11",
                r: "2",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m2.009,20.738c.134-2.642,2.316-4.738,4.991-4.738,2.761,0,5,2.239,5,5",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
        }
    }
}
