use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RecipeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RecipeIcon(props: RecipeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M23 45H12C9.23858 45 7 42.7614 7 40V7.99999C7 5.23856 9.23858 2.99998 12 2.99998H36C38.7614 2.99998 41 5.23856 41 7.99998L41 25",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M28.5 40H39.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M38.5455 30H39.0625C41.7894 30 44 32.2106 44 34.9375V34.9375C44 37.312 42.3099 39.3502 39.9765 39.7897L39.4545 39.888V45H28.5455V39.888L28.0235 39.7897C25.6901 39.3502 24 37.312 24 34.9375V34.9375C24 32.2106 26.2106 30 28.9375 30L29.4545 30",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M29 34L29 32C29 29.2386 31.2386 27 34 27V27C36.7614 27 39 29.2386 39 32V34",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14 19H19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M14 12L24 12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M31 12L34 12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
