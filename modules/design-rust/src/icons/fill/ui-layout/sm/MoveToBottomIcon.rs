use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MoveToBottomIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MoveToBottomIcon(props: MoveToBottomIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "3",
                y: "13",
                width: "18",
                height: "10",
                rx: "3",
                ry: "3",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m8,11h-2c-1.654,0-3-1.346-3-3v-1h2v1c0,.551.449,1,1,1h2v2Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m18,11h-2v-2h2c.551,0,1-.449,1-1v-1h2v1c0,1.654-1.346,3-3,3Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m21,5h-2v-1c0-.551-.449-1-1-1h-2V1h2c1.654,0,3,1.346,3,3v1Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m5,5h-2v-1c0-1.654,1.346-3,3-3h2v2h-2c-.551,0-1,.449-1,1v1Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "10",
                y: "9",
                width: "4",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "10",
                y: "1",
                width: "4",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
