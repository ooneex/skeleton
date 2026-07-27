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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29.4896 21.4055L16.0001 10.6139L2.51061 21.4055L1.26122 19.8438L16.0001 8.05266L30.739 19.8438L29.4896 21.4055Z",
                fill: "currentColor",
            }
        }
    }
}
