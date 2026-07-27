use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextUnderlineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextUnderlineIcon(props: TextUnderlineIconProps) -> Element {
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
                d: "M14 5V24C14 29.5228 18.4772 34 24 34C29.5228 34 34 29.5228 34 24V5H37V24C37 31.1797 31.1797 37 24 37C16.8203 37 11 31.1797 11 24V5H14Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 40H44V43H4V40Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
