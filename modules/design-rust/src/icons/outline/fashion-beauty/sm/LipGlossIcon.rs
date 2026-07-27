use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LipGlossIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LipGlossIcon(props: LipGlossIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6.5 7V14",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14 17H17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14 20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20L21 8H14L14 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3.00001 20C3.00001 20.5523 3.44772 21 4.00001 21H9C9.55228 21 10 20.5523 10 20L9.99999 14H3L3.00001 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4.5 5C4.5 5.53043 4.71071 6.03914 5.08579 6.41421C5.46086 6.78929 5.96957 7 6.5 7C7.03043 7 7.53914 6.78929 7.91421 6.41421C8.28929 6.03914 8.5 5.53043 8.5 5C8.5 3.9 7.605 2 6.5 2C5.395 2 4.5 3.9 4.5 5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                stroke_linejoin: "round",
                fill: "none",
            }
        }
    }
}
