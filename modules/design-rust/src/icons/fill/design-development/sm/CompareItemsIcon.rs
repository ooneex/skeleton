use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CompareItemsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CompareItemsIcon(props: CompareItemsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "1",
                y: "3",
                width: "10",
                height: "18",
                rx: "3",
                ry: "3",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m15,8h-2v-2c0-1.654,1.346-3,3-3h1v2h-1c-.551,0-1,.449-1,1v2Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m17,21h-1c-1.654,0-3-1.346-3-3v-2h2v2c0,.551.449,1,1,1h1v2Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m20,21h-1v-2h1c.551,0,1-.449,1-1v-2h2v2c0,1.654-1.346,3-3,3Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m23,8h-2v-2c0-.551-.449-1-1-1h-1v-2h1c1.654,0,3,1.346,3,3v2Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "13",
                y: "10",
                width: "2",
                height: "4",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "21",
                y: "10",
                width: "2",
                height: "4",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
