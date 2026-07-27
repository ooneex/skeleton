use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronDown2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronDown2Icon(props: ChevronDown2IconProps) -> Element {
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
                d: "M2.5105 10.5945L16 21.3861L29.4895 10.5945L30.7389 12.1562L16 23.9473L1.26111 12.1562L2.5105 10.5945Z",
                fill: "currentColor",
            }
        }
    }
}
