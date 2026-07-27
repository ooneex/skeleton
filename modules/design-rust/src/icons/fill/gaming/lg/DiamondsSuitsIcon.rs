use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DiamondsSuitsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DiamondsSuitsIcon(props: DiamondsSuitsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M42.2988 24L24 46.0664L5.70117 24L24 1.93359L42.2988 24Z",
                fill: "currentColor",
            }
        }
    }
}
