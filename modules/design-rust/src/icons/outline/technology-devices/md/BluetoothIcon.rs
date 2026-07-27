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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m7,23.5l9.643-7.5m-9.643-7.5l9.643,7.5m0,0l8.357,6.5-9,6V3.5l9,6-8.357,6.5Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
