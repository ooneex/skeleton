use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CameraSlashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CameraSlashIcon(props: CameraSlashIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 20L4 20C2.89543 20 2 19.1046 2 18L2 8C2 6.89543 2.89543 6 4 6L7 6L9 3L15 3L17 6L19 6",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14.6943 10.2658C14.0523 9.49248 13.0837 9 12 9C10.067 9 8.5 10.567 8.5 12.5C8.5 13.5925 9.00057 14.5681 9.78487 15.21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M10.6517 20L20 20C21.1046 20 22 19.1046 22 18L22 8.70288",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21.5 3.5L3 22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
