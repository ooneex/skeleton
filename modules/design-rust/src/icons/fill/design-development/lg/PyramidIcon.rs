use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PyramidIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PyramidIcon(props: PyramidIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22.5 3.81641L1.56836 31.2269L22.5 45.6797V3.81641Z",
                fill: "currentColor",
            }
            path {
                d: "M25.5 45.6794L46.4313 31.2269L25.5 3.81689V45.6794Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
