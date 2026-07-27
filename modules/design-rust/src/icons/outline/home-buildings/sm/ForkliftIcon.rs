use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ForkliftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ForkliftIcon(props: ForkliftIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15 12H5.97402",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M5 18H12",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M20 4L20 18C20 19.1046 20.8954 20 22 20L23 20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M15 16.2405V12L12 4H6V12H4C2.89543 12 2 12.8954 2 14V16.2903",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M3 20C4.10457 20 5 19.1046 5 18C5 16.8954 4.10457 16 3 16C1.89543 16 1 16.8954 1 18C1 19.1046 1.89543 20 3 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14 20C15.1046 20 16 19.1046 16 18C16 16.8954 15.1046 16 14 16C12.8954 16 12 16.8954 12 18C12 19.1046 12.8954 20 14 20Z",
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
