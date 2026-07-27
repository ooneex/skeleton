use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DiskDriveIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DiskDriveIcon(props: DiskDriveIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 16C17.6569 16 19 14.6569 19 13C19 11.3431 17.6569 10 16 10C14.3431 10 13 11.3431 13 13C13 14.6569 14.3431 16 16 16Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M27 21H5C3.89543 21 3 21.8954 3 23V27C3 28.1046 3.89543 29 5 29H27C28.1046 29 29 28.1046 29 27V23C29 21.8954 28.1046 21 27 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9 25L23 25",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M5.74988 17C5.26573 15.7603 5 14.4112 5 13C5 6.92487 9.92487 2 16 2C22.0751 2 27 6.92487 27 13C27 14.4112 26.7343 15.7603 26.2501 17",
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
