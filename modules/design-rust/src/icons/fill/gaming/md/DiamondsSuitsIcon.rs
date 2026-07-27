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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M28.29 16L16 31.083L3.70996 16L16 0.916992L28.29 16Z",
                fill: "currentColor",
            }
        }
    }
}
