use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronUp2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronUp2Icon(props: ChevronUp2IconProps) -> Element {
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
                d: "M22.1561 16.4055L12 8.28058L1.84378 16.4055L0.594389 14.8438L12 5.71933L23.4055 14.8438L22.1561 16.4055Z",
                fill: "currentColor",
            }
        }
    }
}
