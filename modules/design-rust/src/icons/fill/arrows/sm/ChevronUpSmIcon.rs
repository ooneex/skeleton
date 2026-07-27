use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronUpSmIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronUpSmIcon(props: ChevronUpSmIconProps) -> Element {
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
                d: "M11.9999 8.08582L17.4141 13.5L15.9999 14.9142L11.9999 10.9142L7.99991 14.9142L6.58569 13.5L11.9999 8.08582Z",
                fill: "currentColor",
            }
        }
    }
}
