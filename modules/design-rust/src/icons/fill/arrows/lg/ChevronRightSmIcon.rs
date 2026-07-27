use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronRightSmIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronRightSmIcon(props: ChevronRightSmIconProps) -> Element {
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
                d: "M18.8787 15L27.8787 24L18.8787 33L21 35.1213L32.1213 24L21 12.8787L18.8787 15Z",
                fill: "currentColor",
            }
        }
    }
}
