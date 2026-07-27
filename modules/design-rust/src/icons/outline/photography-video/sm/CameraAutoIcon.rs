use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CameraAutoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CameraAutoIcon(props: CameraAutoIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 18L22 8C22 6.89543 21.1046 6 20 6L17 6L15 3L9 3L7 6L4 6C2.89543 6 2 6.89543 2 8L2 18C2 19.1046 2.89543 20 4 20L20 20C21.1046 20 22 19.1046 22 18Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9.5 14H14.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M9.07832 16H9L11.5 9H12.5L15 16H14.9148",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
