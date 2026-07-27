use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextScaleXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextScaleXIcon(props: TextScaleXIconProps) -> Element {
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
                d: "M43 40.5L5 40.5L5 37.5L43 37.5L43 40.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 6V34H22.5V6H25.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 6H35V9H13V6Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M38.34 32.2187L45.1213 39L38.3389 45.7824L36.2176 43.6611L40.8787 39L36.2187 34.34L38.34 32.2187Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9.6593 32.2194L2.87866 39L9.66042 45.7817L11.7817 43.6604L7.1213 39L11.7806 34.3407L9.6593 32.2194Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
