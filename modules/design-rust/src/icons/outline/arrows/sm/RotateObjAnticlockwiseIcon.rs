use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RotateObjAnticlockwiseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RotateObjAnticlockwiseIcon(props: RotateObjAnticlockwiseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 8H16C16.5523 8 17 8.44772 17 9V20C17 20.5523 16.5523 21 16 21H5C4.44772 21 4 20.5523 4 20V9C4 8.44772 4.44771 8 5 8Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 1.5L13.5 4C13.8733 4 14.8599 4 15.9996 4C18.761 4 21 6.23858 21 9V11",
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
