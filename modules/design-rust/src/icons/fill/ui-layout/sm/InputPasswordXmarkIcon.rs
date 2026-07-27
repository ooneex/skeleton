use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct InputPasswordXmarkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn InputPasswordXmarkIcon(props: InputPasswordXmarkIconProps) -> Element {
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
            path {
                d: "m14,18H4c-1.654,0-3-1.346-3-3V7c0-1.654,1.346-3,3-3h16c1.654,0,3,1.346,3,3v3.5h-2v-3.5c0-.551-.448-1-1-1H4c-.552,0-1,.449-1,1v8c0,.551.448,1,1,1h10v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "23.914 13.5 22.5 12.086 19 15.586 15.5 12.086 14.086 13.5 17.586 17 14.086 20.5 15.5 21.914 19 18.414 22.5 21.914 23.914 20.5 20.414 17 23.914 13.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
