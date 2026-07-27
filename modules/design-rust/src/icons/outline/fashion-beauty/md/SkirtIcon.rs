use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SkirtIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SkirtIcon(props: SkirtIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13 4V9",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M19 4V9",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8 9V4H24V9",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M10.1085 27C7.05711 26.3249 4.20031 25.1322 1.9986 23.4766L7.68561 9H24.3183L29.9986 23.4426C27.7847 25.1073 24.9095 26.3171 21.8399 27",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M11.9905 18L9.9986 28.2045C11.9216 28.727 13.9437 29 15.9986 29C18.0535 29 20.0755 28.727 21.9986 28.2045L20.0067 18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
