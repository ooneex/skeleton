use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NecktieIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NecktieIcon(props: NecktieIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 13.5L13.5 9.5M18.5 9.5L18 13.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M14 13.5L10.5 26.5L16 32L21.5 26.5L18 13.5H14Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 9.00001L22 10.5L25 4.00001L24.5289 3.79064C19.099 1.37736 12.901 1.37736 7.47109 3.79064L7 4.00001L10 10.5L16 9.00001ZM16 9.00001L7.33984 4.18882M16 9.00001L24.6602 4.18882",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
