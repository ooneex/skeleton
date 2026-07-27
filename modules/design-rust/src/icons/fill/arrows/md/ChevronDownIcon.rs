use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronDownIcon(props: ChevronDownIconProps) -> Element {
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
                d: "M2.99991 9.58582L15.9999 22.5858L28.9999 9.58582L30.4141 11L15.9999 25.4142L1.58569 11L2.99991 9.58582Z",
                fill: "currentColor",
            }
        }
    }
}
