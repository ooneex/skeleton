use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct StickerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn StickerIcon(props: StickerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11.5 22V19.5C11.5 15.0817 15.0817 11.5 19.5 11.5H22",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M2 12C2 17.5228 6.47715 22 12 22L22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
