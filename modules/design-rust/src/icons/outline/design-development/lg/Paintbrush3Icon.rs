use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Paintbrush3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Paintbrush3Icon(props: Paintbrush3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 22V4H15L19 12L23 4H41.0001V22",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M7 23.935V22H41V23.935C41 25.9668 39.4769 27.6757 37.4585 27.9086L28 29L29.2559 39.0463C29.6512 42.2077 27.1862 45 24.0002 45C20.8143 45 18.3492 42.2077 18.7444 39.0463L20 29L10.5415 27.9086C8.52314 27.6757 7 25.9668 7 23.935Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 38.9999C24.2761 38.9999 24.5 39.2237 24.5 39.4999C24.5 39.776 24.2761 39.9999 24 39.9999C23.7239 39.9999 23.5 39.776 23.5 39.4999C23.5 39.2237 23.7239 38.9999 24 38.9999Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 38C24.8284 38 25.5 38.6716 25.5 39.5C25.5 40.3284 24.8284 41 24 41C23.1716 41 22.5 40.3284 22.5 39.5C22.5 38.6716 23.1716 38 24 38Z",
                fill: "currentColor",
                "data-cap": "butt",
                "data-stroke": "none",
            }
        }
    }
}
