use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AirplayIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AirplayIcon(props: AirplayIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M26 26H27C28.6569 26 30 24.6569 30 23V7C30 5.34315 28.6569 4 27 4H5C3.34315 4 2 5.34315 2 7V23C2 24.6569 3.34315 26 5 26H6",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9 29H23L16 18L9 29Z",
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
