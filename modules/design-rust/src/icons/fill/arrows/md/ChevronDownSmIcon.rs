use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronDownSmIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronDownSmIcon(props: ChevronDownSmIconProps) -> Element {
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
                d: "M9.99991 12.5858L15.9999 18.5858L21.9999 12.5858L23.4141 14L15.9999 21.4142L8.58569 14L9.99991 12.5858Z",
                fill: "currentColor",
            }
        }
    }
}
