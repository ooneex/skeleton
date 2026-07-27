use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VShapedArrowRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VShapedArrowRightIcon(props: VShapedArrowRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12.5 3H5L12.5 12L5 21H12.5L20 12L12.5 3Z",
                fill: "currentColor",
            }
        }
    }
}
