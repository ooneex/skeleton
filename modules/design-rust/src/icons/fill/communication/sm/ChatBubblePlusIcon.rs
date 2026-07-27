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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m20,3h-10v2c0,1.104-.896,2-2,2h-1v1c0,1.104-.896,2-2,2h-2v13.135l7.362-6.135h9.638c1.654,0,3-1.346,3-3V6c0-1.654-1.346-3-3-3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "8 3 5 3 5 0 3 0 3 3 0 3 0 5 3 5 3 8 5 8 5 5 8 5 8 3",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
