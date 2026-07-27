use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextSizeIncreaseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextSizeIncreaseIcon(props: TextSizeIncreaseIconProps) -> Element {
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
                d: "M13 3V21H11V3H13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 3H20V5H4V3Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 12H24V14H15V12Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20.5 8.5L20.5 17.5L18.5 17.5L18.5 8.5L20.5 8.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
