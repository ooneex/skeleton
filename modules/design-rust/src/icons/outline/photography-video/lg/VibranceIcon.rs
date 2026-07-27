use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VibranceIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VibranceIcon(props: VibranceIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 33C26.4853 33 28.5 30.9853 28.5 28.5C28.5 26.0147 26.4853 24 24 24C21.5147 24 19.5 26.0147 19.5 28.5C19.5 30.9853 21.5147 33 24 33Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 5L44.0001 41H4.0001L24 5Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
