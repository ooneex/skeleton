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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7.99991 9.08582L11.9999 13.0858L15.9999 9.08582L17.4141 10.5L11.9999 15.9142L6.58569 10.5L7.99991 9.08582Z",
                fill: "currentColor",
            }
        }
    }
}
