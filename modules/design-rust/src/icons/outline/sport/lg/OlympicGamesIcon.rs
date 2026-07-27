use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct OlympicGamesIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn OlympicGamesIcon(props: OlympicGamesIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                fill: "none",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                cx: "10",
                cy: "21",
                r: "7",
                stroke_linejoin: "miter",
            }
            circle {
                fill: "none",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                cx: "24",
                cy: "21",
                r: "7",
                stroke_linejoin: "miter",
            }
            circle {
                fill: "none",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                cx: "17",
                cy: "28",
                r: "7",
                stroke_linejoin: "miter",
            }
            circle {
                fill: "none",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                cx: "31",
                cy: "28",
                r: "7",
                stroke_linejoin: "miter",
            }
            circle {
                fill: "none",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                cx: "38",
                cy: "21",
                r: "7",
                stroke_linejoin: "miter",
            }
        }
    }
}
