use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GymBuildingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GymBuildingIcon(props: GymBuildingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13 20H19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9 20H7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M25 20H23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M19 17L19 23C19 24.1046 19.8954 25 21 25C22.1046 25 23 24.1046 23 23L23 17C23 15.8954 22.1046 15 21 15C19.8954 15 19 15.8954 19 17Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9 17L9 23C9 24.1046 9.89543 25 11 25C12.1046 25 13 24.1046 13 23L13 17C13 15.8954 12.1046 15 11 15C9.89543 15 9 15.8954 9 17Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3 12L16 2L29 12V26C29 27.6569 27.6569 29 26 29H6C4.34315 29 3 27.6569 3 26V12Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
