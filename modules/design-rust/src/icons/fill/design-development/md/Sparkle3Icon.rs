use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Sparkle3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Sparkle3Icon(props: Sparkle3IconProps) -> Element {
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
                d: "M16 2.152L19.7767 12.2233L29.848 16L19.7767 19.7767L16 29.848L12.2233 19.7767L2.152 16L12.2233 12.2233L16 2.152Z",
                fill: "currentColor",
            }
            path {
                d: "M8.2 5.8L7 3L5.8 5.8L3 7L5.8 8.2L7 11L8.2 8.2L11 7L8.2 5.8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
