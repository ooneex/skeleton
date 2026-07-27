use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MessagesIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MessagesIcon(props: MessagesIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m16,1H4c-1.654,0-3,1.346-3,3v8c0,1.654,1.346,3,3,3v5.943l8.32-5.943h3.68c1.654,0,3-1.346,3-3V4c0-1.654-1.346-3-3-3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m20,24.081l-6.351-5.081h-2.649v-2h3.351l3.649,2.919v-2.919h2c.551,0,1-.448,1-1V6h2v10c0,1.654-1.346,3-3,3v5.081Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
