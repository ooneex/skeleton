use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MapCompassIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MapCompassIcon(props: MapCompassIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 15.2277V8V9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M11 3V24",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14.7208 25.8604L11 24L2 27.5V6.5L11 3L21 8L30 4.5V13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 24.3334C24.7364 24.3334 25.3334 23.7365 25.3334 23.0001C25.3334 22.2637 24.7364 21.6667 24 21.6667C23.2636 21.6667 22.6667 22.2637 22.6667 23.0001C22.6667 23.7365 23.2636 24.3334 24 24.3334Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M30 17L27.5 26.5L18 29L20.5 19.5L30 17Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
