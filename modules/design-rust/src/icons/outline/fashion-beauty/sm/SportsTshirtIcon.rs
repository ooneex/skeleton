use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SportsTshirtIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SportsTshirtIcon(props: SportsTshirtIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6 15.5L18.0144 9.62583",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6 20.5L17.9922 14.6328",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6 12H2V6C2 4.34315 3.34315 3 5 3H8L8.27239 4.08957C8.70001 5.80005 10.2369 7 12 7V7C13.7631 7 15.3 5.80005 15.7276 4.08957L16 3H19C20.6569 3 22 4.34315 22 6V12H18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6 9V21H18V9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
