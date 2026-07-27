use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoltLightningIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoltLightningIcon(props: BoltLightningIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7.35846 1L4.21744 15H9.85269L9.25347 23.8042L21.5906 8.5H14.1938L15.74 1H7.35846Z",
                fill: "currentColor",
            }
        }
    }
}
