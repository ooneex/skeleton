use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct InputPasswordCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn InputPasswordCheckIcon(props: InputPasswordCheckIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "12",
                cy: "11",
                r: "1.25",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "7.25",
                cy: "11",
                r: "1.25",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "16.75",
                cy: "11",
                r: "1.25",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m10,18h-6c-1.654,0-3-1.346-3-3V7c0-1.654,1.346-3,3-3h16c1.654,0,3,1.346,3,3v4h-2v-4c0-.551-.449-1-1-1H4c-.551,0-1,.449-1,1v8c0,.551.449,1,1,1h6v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "15.5 21.914 11.586 18 13 16.586 15.5 19.086 22 12.586 23.414 14 15.5 21.914",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
