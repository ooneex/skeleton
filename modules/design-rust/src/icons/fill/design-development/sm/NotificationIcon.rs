use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NotificationIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NotificationIcon(props: NotificationIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "19",
                cy: "5",
                r: "4",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m19,21H6c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h7v2h-7c-.551,0-1,.448-1,1v13c0,.552.449,1,1,1h13c.551,0,1-.448,1-1v-7h2v7c0,1.654-1.346,3-3,3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
