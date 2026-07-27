use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SnappingFingersIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SnappingFingersIcon(props: SnappingFingersIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9.38324 1.82235L4 9.00001L1.00001 9.00001L1 20.5L11 21.5C12.5031 21.667 13.8955 20.6891 14.2485 19.2185L16.0001 12L21.0001 12C22.1047 12 23.0001 11.1046 23.0001 10C23.0001 8.89544 22.1047 8.00001 21.0001 8.00001L11 8.00001L12.8928 3.92129C13.5251 2.55866 12.5302 1 11.0279 0.999999C10.3808 0.999999 9.7715 1.30467 9.38324 1.82235Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17 3L17.5 2",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20 4.5L21 4",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
