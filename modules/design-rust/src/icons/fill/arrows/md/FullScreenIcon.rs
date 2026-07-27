use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FullScreenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FullScreenIcon(props: FullScreenIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m3,12H1v-5c0-2.206,1.794-4,4-4h5v2h-5c-1.103,0-2,.897-2,2v5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m31,12h-2v-5c0-1.103-.897-2-2-2h-5v-2h5c2.206,0,4,1.794,4,4v5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m27,29h-5v-2h5c1.103,0,2-.897,2-2v-5h2v5c0,2.206-1.794,4-4,4Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m10,29h-5c-2.206,0-4-1.794-4-4v-5h2v5c0,1.103.897,2,2,2h5v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "5",
                y: "7",
                width: "22",
                height: "18",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
