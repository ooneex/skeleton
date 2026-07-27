use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Transform2dIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Transform2dIcon(props: Transform2dIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 0.795166V23.205L21 19.83V4.17017L3 0.795166Z",
                fill: "currentColor",
            }
        }
    }
}
