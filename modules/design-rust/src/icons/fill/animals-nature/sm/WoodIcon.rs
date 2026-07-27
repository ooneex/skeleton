use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WoodIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WoodIcon(props: WoodIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 2V12L4 9L2 11L8 19V22H12V15H14V22H21L22 3.5L18 3L16 7.5L14 1.5L8 2ZM14 10H12V13H14V10Z",
                fill: "currentColor",
            }
        }
    }
}
