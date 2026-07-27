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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 0.770264L29 6.18693V25.8132L3 31.2299V0.770264Z",
                fill: "currentColor",
            }
        }
    }
}
