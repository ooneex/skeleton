use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VShapedArrowDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VShapedArrowDownIcon(props: VShapedArrowDownIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M29 16.5L29 6L16 16.5L3 6L3 16.5L16 27L29 16.5Z",
                fill: "currentColor",
            }
        }
    }
}
