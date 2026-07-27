use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronUpSmIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronUpSmIcon(props: ChevronUpSmIconProps) -> Element {
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
                d: "M15 29.1213L24 20.1213L33 29.1213L35.1213 27L24 15.8787L12.8787 27L15 29.1213Z",
                fill: "currentColor",
            }
        }
    }
}
