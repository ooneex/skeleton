use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsBoldOppositeDirectionXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsBoldOppositeDirectionXIcon(props: ArrowsBoldOppositeDirectionXIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 15.9432L30.7205 8.99999L21 2.0568V5.99999H3V12H21V15.9432Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11 29.9432L1.27954 23L11 16.0568V20H29V26H11V29.9432Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
