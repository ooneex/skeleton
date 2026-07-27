use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BluetoothIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BluetoothIcon(props: BluetoothIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9 36L23.5 24M9 12L23.5 24M23.5 24L38 34.4L23.5 44V4L38 13.6L23.5 24Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
