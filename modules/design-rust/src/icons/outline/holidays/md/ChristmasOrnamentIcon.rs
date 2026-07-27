use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChristmasOrnamentIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChristmasOrnamentIcon(props: ChristmasOrnamentIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5.5 16H26.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M5.5 22H26.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M16 4V1",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 8.77297L12 4H20L20 8.77297",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M27 19C27 25.0751 22.0751 30 16 30C9.92487 30 5 25.0751 5 19C5 12.9249 9.92487 8 16 8C22.0751 8 27 12.9249 27 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
