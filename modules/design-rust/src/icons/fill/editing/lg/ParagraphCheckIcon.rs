use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ParagraphCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ParagraphCheckIcon(props: ParagraphCheckIconProps) -> Element {
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
                d: "M44 19.5H4V16.5H44V19.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 7.5L4 7.5L4 4.5L44 4.5V7.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 31.5H4V28.5H19V31.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 43.5H4V40.5H19V43.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44.6176 28.3754L30.5642 44.1855L22.3787 36L24.5 33.8787L30.4358 39.8144L42.3754 26.3823L44.6176 28.3754Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
