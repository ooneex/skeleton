use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GridObjSnapToBottomRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GridObjSnapToBottomRightIcon(props: GridObjSnapToBottomRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m5.5,22h-1.5c-1.103,0-2-.897-2-2v-1.5h2v1.5h1.5v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m9,22h-1.5v-2h1.5v-1.5h2v1.5c0,1.103-.897,2-2,2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m11,16.5h-2v-1.5h-1.5v-2h1.5c1.103,0,2,.897,2,2v1.5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m4,16.5h-2v-1.5c0-1.103.897-2,2-2h1.5v2h-1.5v1.5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m5.5,11h-1.5c-1.103,0-2-.897-2-2v-1.5h2v1.5h1.5v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m9,11h-1.5v-2h1.5v-1.5h2v1.5c0,1.103-.897,2-2,2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m11,5.5h-2v-1.5h-1.5v-2h1.5c1.103,0,2,.897,2,2v1.5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m4,5.5h-2v-1.5c0-1.103.897-2,2-2h1.5v2h-1.5v1.5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m16.5,11h-1.5c-1.103,0-2-.897-2-2v-1.5h2v1.5h1.5v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m20,11h-1.5v-2h1.5v-1.5h2v1.5c0,1.103-.897,2-2,2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m22,5.5h-2v-1.5h-1.5v-2h1.5c1.103,0,2,.897,2,2v1.5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m15,5.5h-2v-1.5c0-1.103.897-2,2-2h1.5v2h-1.5v1.5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "13",
                y: "13",
                width: "9",
                height: "9",
                rx: "2",
                ry: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
