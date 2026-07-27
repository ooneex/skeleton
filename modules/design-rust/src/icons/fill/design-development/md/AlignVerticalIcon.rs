use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AlignVerticalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AlignVerticalIcon(props: AlignVerticalIconProps) -> Element {
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
                d: "M25 17H31V15H25V17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 17H20V15H12V17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 17H7V15H1L1 17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M5 3L5 29L14 29L14 3L5 3Z",
                fill: "currentColor",
            }
            path {
                d: "M18 8L18 25L27 25L27 8L18 8Z",
                fill: "currentColor",
            }
        }
    }
}
