use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsExpandYIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsExpandYIcon(props: ArrowsExpandYIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 44V4H22.5V44H25.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.2721 18.8492L24 6.12131L36.7279 18.8492L38.8492 16.7279L24 1.87867L9.15076 16.7279L11.2721 18.8492Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.2721 29.1508L24 41.8787L36.7279 29.1508L38.8492 31.2721L24 46.1213L9.15076 31.2721L11.2721 29.1508Z",
                fill: "currentColor",
            }
        }
    }
}
