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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 12H4L5.5 9L9.5 18L14.5 6L18.5 15L20 12H22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
