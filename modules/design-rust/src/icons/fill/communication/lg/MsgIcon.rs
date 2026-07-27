use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MsgIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MsgIcon(props: MsgIconProps) -> Element {
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
                d: "M2 24C2 13.3682 11.9999 5 24 5C36.0001 5 46 13.3682 46 24C46 34.6318 36.0001 43 24 43C20.3222 43 16.8529 42.218 13.8004 40.8369L3.15618 43.3439L5.34307 34.0573C3.23905 31.1514 2 27.7073 2 24Z",
                fill: "currentColor",
            }
        }
    }
}
