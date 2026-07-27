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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 12L12 23L3 12L12 1L21 12Z",
                fill: "currentColor",
            }
        }
    }
}
