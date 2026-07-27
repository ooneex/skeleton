use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronRight2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronRight2Icon(props: ChevronRight2IconProps) -> Element {
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
                d: "M7.59448 22.1561L15.7194 12L7.59448 1.84378L9.15622 0.594389L18.2807 12L9.15622 23.4055L7.59448 22.1561Z",
                fill: "currentColor",
            }
        }
    }
}
