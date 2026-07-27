use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CloudIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CloudIcon(props: CloudIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m15,3c-3.918,0-7.288,2.436-8.51,6.032-.159-.02-.322-.032-.49-.032-3.364,0-6,2.636-6,6s2.636,6,6,6h9c4.963,0,9-4.037,9-9S19.963,3,15,3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
