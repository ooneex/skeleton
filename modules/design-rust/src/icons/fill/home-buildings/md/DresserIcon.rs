use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DresserIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DresserIcon(props: DresserIconProps) -> Element {
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
                d: "M6 25V30H4V25H6Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M28 25V30H26V25H28Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31 14H1V7C1 4.79086 2.79086 3 5 3H27C29.2091 3 31 4.79086 31 7L31 14ZM19 10V8H13V10H19Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 27V16H31L31 27H1ZM19 22V20H13V22H19Z",
                fill: "currentColor",
            }
        }
    }
}
