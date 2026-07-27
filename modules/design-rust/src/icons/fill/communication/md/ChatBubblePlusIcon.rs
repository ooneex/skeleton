use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChatBubblePlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChatBubblePlusIcon(props: ChatBubblePlusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m27,4h-15v2c0,1.104-.896,2-2,2h-2v2c0,1.104-.896,2-2,2h-2v19.204l9.376-8.204h13.624c2.206,0,4-1.794,4-4v-11c0-2.206-1.794-4-4-4Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "10 4 6 4 6 0 4 0 4 4 0 4 0 6 4 6 4 10 6 10 6 6 10 6 10 4",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
