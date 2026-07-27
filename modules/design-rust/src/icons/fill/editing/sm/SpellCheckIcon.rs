use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SpellCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SpellCheckIcon(props: SpellCheckIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.8159 2H13.1841L18.7234 16.2441L16.8594 16.969L12 4.47332L5.61527 20.8912V22H3.03815L10.8159 2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16.7651 15L7.17638 15L7.17638 13L16.7651 13V15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23.4142 16.5L16.5 23.4142L12.5858 19.5L14 18.0858L16.5 20.5858L22 15.0858L23.4142 16.5Z",
                fill: "currentColor",
            }
        }
    }
}
