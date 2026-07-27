use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BooleanUnionIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BooleanUnionIcon(props: BooleanUnionIconProps) -> Element {
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
                d: "M44 4L44 34L14 34L14 4L44 4ZM41 7L17 7L17 31L41 31L41 7Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M34 14L34 44L4 44L4 14L34 14ZM31 17L7 17L7 41L31 41L31 17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
