use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowBoldRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowBoldRightIcon(props: ArrowBoldRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22.5 12L12.5 20L12.5 15L2 15L2 9L12.5 9L12.5 4L22.5 12Z",
                fill: "currentColor",
            }
        }
    }
}
