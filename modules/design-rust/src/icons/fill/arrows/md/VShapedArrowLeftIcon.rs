use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VShapedArrowLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VShapedArrowLeftIcon(props: VShapedArrowLeftIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15.5 3H26L15.5 16L26 29H15.5L5 16L15.5 3Z",
                fill: "currentColor",
            }
        }
    }
}
