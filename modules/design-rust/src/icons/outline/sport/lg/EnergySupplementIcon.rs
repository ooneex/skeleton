use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct EnergySupplementIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn EnergySupplementIcon(props: EnergySupplementIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 2.97778V9.99997",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M32 3V10",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M16 3V10",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M34.5177 10L40.3235 19.9945C40.7666 20.7573 41 21.6238 41 22.506V40C41 42.7614 38.7614 45 36 45H12C9.23858 45 7 42.7614 7 40L7 22.506C7 21.6238 7.23341 20.7573 7.67654 19.9945L13.4823 10",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M9 10L39 10L39 3L9 3L9 10Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15 30L22.875 16H25.125L24 25H33L25.125 39H22.875L24 30H15Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
