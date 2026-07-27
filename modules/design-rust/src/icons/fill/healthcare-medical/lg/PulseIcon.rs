use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PulseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PulseIcon(props: PulseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M38.0391 27.0986L40.0107 22.5H46V25.5H41.9893L37.96 34.9004L29.5205 14.0498L18.5205 42.0498L9.95996 20.9004L7.98926 25.5H2V22.5H6.01074L10.04 13.0996L18.4785 33.9492L29.4795 5.9502L38.0391 27.0986Z",
                fill: "currentColor",
            }
        }
    }
}
