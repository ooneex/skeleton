use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Link2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Link2Icon(props: Link2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m8,19H3c-1.654,0-3-1.346-3-3v-8c0-1.654,1.346-3,3-3h5c1.654,0,3,1.346,3,3v1h-2v-1c0-.552-.449-1-1-1H3c-.551,0-1,.448-1,1v8c0,.552.449,1,1,1h5c.551,0,1-.448,1-1v-1h2v1c0,1.654-1.346,3-3,3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m21,19h-5c-1.654,0-3-1.346-3-3v-1h2v1c0,.552.449,1,1,1h5c.551,0,1-.448,1-1v-8c0-.552-.449-1-1-1h-5c-.551,0-1,.448-1,1v1h-2v-1c0-1.654,1.346-3,3-3h5c1.654,0,3,1.346,3,3v8c0,1.654-1.346,3-3,3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "6",
                y: "11",
                width: "12",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
