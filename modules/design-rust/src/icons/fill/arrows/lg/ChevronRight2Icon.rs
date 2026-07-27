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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.8864 43.1811L32.039 24L15.8864 4.81879L18.1811 2.88638L35.961 24L18.1811 45.1135L15.8864 43.1811Z",
                fill: "currentColor",
            }
        }
    }
}
