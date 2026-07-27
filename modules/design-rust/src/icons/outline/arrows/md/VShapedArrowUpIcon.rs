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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M29 15.5L29 26L16 15.5L3 26L3 15.5L16 5L29 15.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
