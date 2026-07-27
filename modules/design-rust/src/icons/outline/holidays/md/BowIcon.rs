use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BowIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BowIcon(props: BowIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21.0625 23.5L23.5 27L20 29L16 23.1538L12 29L8.5 27L10.9375 23.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            circle {
                cx: "16",
                cy: "13.6667",
                r: "4",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M19 11L26.2 5.6C28.1777 4.11672 31 5.52786 31 8V20.0326C31 22.4987 28.1898 23.9115 26.2105 22.4404L18.5685 16.7608",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M13 11L5.79999 5.6C3.82228 4.11672 0.99999 5.52786 0.99999 8V19.9999C0.99999 22.472 3.82233 23.8832 5.80003 22.3998L13.3721 16.7206",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
