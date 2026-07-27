use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct InputPasswordPointerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn InputPasswordPointerIcon(props: InputPasswordPointerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "7.25",
                cy: "11",
                r: "1.25",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m11,18h-7c-1.654,0-3-1.346-3-3V7c0-1.654,1.346-3,3-3h16c1.654,0,3,1.346,3,3v5h-2v-5c0-.551-.449-1-1-1H4c-.551,0-1,.449-1,1v8c0,.551.449,1,1,1h7v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "11.271 11.021 15.013 23.712 17.976 17.726 23.962 14.763 11.271 11.021",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
