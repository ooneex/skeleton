use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Repeat4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Repeat4Icon(props: Repeat4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M28 12H33C39.6274 12 45 17.3726 45 24V24C45 30.6274 39.6274 36 33 36H28L34.5 42.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20 36H15C8.37258 36 3 30.6274 3 24V24C3 17.3726 8.37258 12 15 12H20L13.5 5.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
