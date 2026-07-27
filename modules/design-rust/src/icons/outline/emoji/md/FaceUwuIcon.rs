use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FaceUwuIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FaceUwuIcon(props: FaceUwuIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 27H27C28.6569 27 30 25.6569 30 24V10C30 8.34315 28.6569 7 27 7H20V2L10 7H5C3.34315 7 2 8.34315 2 10V24C2 25.6569 3.34315 27 5 27Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M14 15C14 13.3431 12.6569 12 11 12C9.34315 12 8 13.3431 8 15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 15C24 13.3431 22.6569 12 21 12C19.3431 12 18 13.3431 18 15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M10 19C10 20.6569 11.3431 22 13 22C14.6569 22 16 20.6569 16 19C16 20.6569 17.3431 22 19 22C20.6569 22 22 20.6569 22 19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
