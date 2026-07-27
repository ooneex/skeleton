use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DeviceConnectionIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DeviceConnectionIcon(props: DeviceConnectionIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 7L2 6C2 4.89543 2.89543 4 4 4L20 4C21.1046 4 22 4.89543 22 6L22 18C22 19.1046 21.1046 20 20 20L15 20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M2 19C2.5 19 3 19.5 3 20L2 20L2 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M2 15C4.76142 15 7 17.2386 7 20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M2 11C6.97056 11 11 15.0294 11 20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
