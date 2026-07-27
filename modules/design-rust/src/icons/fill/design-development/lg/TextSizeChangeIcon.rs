use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextSizeChangeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextSizeChangeIcon(props: TextSizeChangeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 43L22 11H34V5H4V11H16L16 43H22Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M39 19L47 27H31L39 19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M39 42L47 34H31L39 42Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
