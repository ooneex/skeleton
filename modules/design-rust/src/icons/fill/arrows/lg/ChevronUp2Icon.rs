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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M43.1812 32.1135L24 15.961L4.81885 32.1135L2.88644 29.8188L24 12.0389L45.1136 29.8188L43.1812 32.1135Z",
                fill: "currentColor",
            }
        }
    }
}
