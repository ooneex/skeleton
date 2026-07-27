use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LaptopChartPieIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LaptopChartPieIcon(props: LaptopChartPieIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4 19V7C4 5.34315 5.34315 4 7 4H25C26.6569 4 28 5.34315 28 7V19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4 19V7C4 5.34315 5.34315 4 7 4H25C26.6569 4 28 5.34315 28 7V19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 19C19.0376 19 21.5 16.5376 21.5 13.5H16V8C12.9624 8 10.5 10.4624 10.5 13.5C10.5 16.5376 12.9624 19 16 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M2 23V26C2 27.1046 2.89543 28 4 28H28C29.1046 28 30 27.1046 30 26V23H21C21 23.5523 20.5523 24 20 24H12C11.4477 24 11 23.5523 11 23H2Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
