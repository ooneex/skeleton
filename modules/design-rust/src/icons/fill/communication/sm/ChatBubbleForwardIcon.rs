use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChatBubbleForwardIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChatBubbleForwardIcon(props: ChatBubbleForwardIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m20,2H4c-1.654,0-3,1.346-3,3v4h9.586l-2-2,1.414-1.414,4.414,4.414-4.414,4.414-1.414-1.414,2-2H1v4c0,1.654,1.346,3,3,3h1v5.943l8.32-5.943h6.68c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
