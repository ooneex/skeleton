use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MedicalClipboardIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MedicalClipboardIcon(props: MedicalClipboardIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9.99707 3H8C6.34315 3 5 4.34314 5 6V27C5 28.6569 6.34314 30 8 30H24C25.6569 30 27 28.6569 27 27V6C27 4.34315 25.6569 3 24 3H22.0059",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M10 6V3C10 1.89543 10.8954 1 12 1H20C21.1046 1 22 1.89543 22 3V6H10Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M14 17L14 13H18L18 17H22L22 21H18V25H14V21H10L10 17H14Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
