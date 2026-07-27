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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 1.77026L44 9.68693V38.3132L6 46.2299V1.77026Z",
                fill: "currentColor",
            }
        }
    }
}
