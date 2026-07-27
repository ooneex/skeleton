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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1.84387 7.59448L12 15.7194L22.1562 7.59448L23.4056 9.15622L12 18.2807L0.594482 9.15622L1.84387 7.59448Z",
                fill: "currentColor",
            }
        }
    }
}
