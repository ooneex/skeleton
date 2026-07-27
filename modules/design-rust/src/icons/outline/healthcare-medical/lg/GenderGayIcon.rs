use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GenderGayIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GenderGayIcon(props: GenderGayIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M35.0208 13L45.0208 3",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M25 31.5859C25.9537 31.8557 26.96 32 28 32C34.0751 32 39 27.0751 39 21C39 14.9249 34.0751 10 28 10C21.9249 10 17 14.9249 17 21C17 24.2165 18.3805 27.1105 20.5813 29.1219L20.5 29.0468",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M13 32V39V45.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M13 32C19.0751 32 24 27.0751 24 21C24 14.9249 19.0751 10 13 10C6.92487 10 2 14.9249 2 21C2 27.0751 6.92487 32 13 32Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M35 3.02081H45V13.0208",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20.0711 38.4289L13 45.5L5.92893 38.4289",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
