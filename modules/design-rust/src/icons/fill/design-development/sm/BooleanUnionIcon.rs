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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 1L7 17L23 17L23 0.999999L7 1ZM9 3L21 3L21 15L9 15L9 3Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 7L1 23L17 23L17 7L1 7ZM3 9L15 9L15 21L3 21L3 9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
