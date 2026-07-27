use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowBoldLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowBoldLeftIcon(props: ArrowBoldLeftIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M1.5 12L11.5 20L11.5 15L22 15L22 9L11.5 9L11.5 4L1.5 12Z",
                fill: "currentColor",
            }
        }
    }
}
