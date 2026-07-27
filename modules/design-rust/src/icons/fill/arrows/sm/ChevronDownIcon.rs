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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1.58588 8.00003L12.0001 18.4142L22.4143 8.00003L21.0001 6.58582L12.0001 15.5858L3.00009 6.58582L1.58588 8.00003Z",
                fill: "currentColor",
            }
        }
    }
}
