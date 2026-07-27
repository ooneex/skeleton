use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VShapedArrowUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VShapedArrowUpIcon(props: VShapedArrowUpIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M42 23L42 37.5L24 23L6 37.5L6 23L24 8.5L42 23Z",
                fill: "currentColor",
            }
        }
    }
}
