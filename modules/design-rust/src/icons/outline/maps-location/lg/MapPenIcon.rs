use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MapPenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MapPenIcon(props: MapPenIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M31 28V12V13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17 5V36",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M45 20.7852V7L31 12L17 5L3 10V41L17 36L22.8954 38.9477",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M33.1139 43.3863L44.9315 31.5686C46.35 30.1501 46.35 27.8501 44.9315 26.4316C43.5129 25.013 41.213 25.013 39.7944 26.4316L27.9768 38.2492L27.5 43.863L33.1139 43.3863Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
