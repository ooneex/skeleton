use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MapIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MapIcon(props: MapIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 2.00562L1 4.31331V21.9561L7 19.6484V2.00562Z",
                fill: "currentColor",
            }
            path {
                d: "M9 19.3681L15 22.3681L15 4.63208L9 1.63208V19.3681Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M17 21.9945L17 4.35164L23 2.04395V19.6868L17 21.9945Z",
                fill: "currentColor",
            }
        }
    }
}
