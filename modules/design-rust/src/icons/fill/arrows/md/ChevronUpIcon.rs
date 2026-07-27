use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronUpIcon(props: ChevronUpIconProps) -> Element {
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
                d: "M2.99991 22.4142L15.9999 9.41418L28.9999 22.4142L30.4141 21L15.9999 6.58576L1.58569 21L2.99991 22.4142Z",
                fill: "currentColor",
            }
        }
    }
}
