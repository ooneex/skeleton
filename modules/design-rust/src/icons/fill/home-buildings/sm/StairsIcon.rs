use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct StairsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn StairsIcon(props: StairsIconProps) -> Element {
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
                d: "M15 3H22V22H3V15H9V9H15V3Z",
                fill: "currentColor",
            }
        }
    }
}
