use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MagnetIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MagnetIcon(props: MagnetIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4 9.99988H12",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M20 9.99988H28",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M29 16V3H20.3333V16C20.3333 18.3932 18.3932 20.3333 16 20.3333C13.6068 20.3333 11.6667 18.3932 11.6667 16V3H3V16C3 23.1797 8.8203 29 16 29C23.1797 29 29 23.1797 29 16Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
