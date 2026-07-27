use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronDownSmIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronDownSmIcon(props: ChevronDownSmIconProps) -> Element {
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
                d: "M15 18.8787L24 27.8787L33 18.8787L35.1213 21L24 32.1213L12.8787 21L15 18.8787Z",
                fill: "currentColor",
            }
        }
    }
}
