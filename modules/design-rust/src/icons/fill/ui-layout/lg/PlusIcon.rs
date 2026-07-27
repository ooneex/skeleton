use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PlusIcon(props: PlusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25.5 22.5V4H22.5V22.5H4V25.5H22.5V44H25.5V25.5H44V22.5H25.5Z",
                fill: "currentColor",
            }
        }
    }
}
