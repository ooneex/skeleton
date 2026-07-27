use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronDown2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronDown2Icon(props: ChevronDown2IconProps) -> Element {
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
                d: "M4.81882 15.8865L24 32.039L43.1811 15.8865L45.1136 18.1812L24 35.9611L2.88641 18.1812L4.81882 15.8865Z",
                fill: "currentColor",
            }
        }
    }
}
