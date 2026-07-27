use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VenusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VenusIcon(props: VenusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "16 18 13 18 13 14 11 14 11 18 8 18 8 20 11 20 11 23 13 23 13 20 16 20 16 18",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m12,16c-4.136,0-7.5-3.364-7.5-7.5S7.864,1,12,1s7.5,3.364,7.5,7.5-3.364,7.5-7.5,7.5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
