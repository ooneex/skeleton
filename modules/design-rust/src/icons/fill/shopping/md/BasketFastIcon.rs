use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BasketFastIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BasketFastIcon(props: BasketFastIconProps) -> Element {
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
                d: "M7 23L-8.74228e-08 23L0 21L7 21L7 23Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13.7293 1.77289L5.29315 13.4855L3.67029 12.3166L12.1064 0.604004L13.7293 1.77289Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19.8913 0.60376L28.1316 12.0053L26.5107 13.1768L18.2704 1.77529L19.8913 0.60376Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M31 8H1V14H31V8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2.91309 16H29.0867L28.2257 26.3322C28.0529 28.4054 26.3198 30 24.2395 30H7.76028C5.67993 30 3.94687 28.4054 3.7741 26.3322L3.66309 25H7V23H3.49642L3.32975 21L15 21V19L3.16309 19L2.91309 16ZM11 25H8.99L8.99 23H11V25Z",
                fill: "currentColor",
            }
        }
    }
}
