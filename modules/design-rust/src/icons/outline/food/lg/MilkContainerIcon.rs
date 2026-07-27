use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MilkContainerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MilkContainerIcon(props: MilkContainerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 10H36",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8 19H40",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8 19L8 42C8 43.6569 9.34315 45 11 45L37 45C38.6569 45 40 43.6569 40 42L40 19L36 10L36 2.99999L12 2.99999L12 10L8 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 38C27.3137 38 30 35.3137 30 32C30 28.6863 27.3137 26 24 26C20.6863 26 18 28.6863 18 32C18 35.3137 20.6863 38 24 38Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
