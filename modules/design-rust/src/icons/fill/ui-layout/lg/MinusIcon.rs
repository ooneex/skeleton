use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MinusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MinusIcon(props: MinusIconProps) -> Element {
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
                d: "M4 22.5H44V25.5H4V22.5Z",
                fill: "currentColor",
            }
        }
    }
}
