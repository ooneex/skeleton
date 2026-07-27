use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Microphone5IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Microphone5Icon(props: Microphone5IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10.5 40.5L6.99998 44L5.5 42.5L4 41L7.50001 37.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M22.5 8L22.7998 9.44902C24.435 17.3526 30.6606 23.4988 38.5846 25.0325L41 25.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M30.2963 28.8175L12 42L9 39L6 36L20.113 17.8409",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M32.5001 29.0001C39.4036 29.0001 45.0001 23.1798 45.0001 16.0001C45.0001 8.82035 39.4036 3.00005 32.5001 3.00005C25.5965 3.00005 20.0001 8.82035 20.0001 16.0001C20.0001 23.1798 25.5965 29.0001 32.5001 29.0001Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M17 31.1213L19.1213 29",
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
