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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m10,23.943v-9.864l-5.118,4.33-1.292-1.526,6.361-5.383L3.591,6.117l1.292-1.526,5.118,4.33V.276l9.736,5.564-6.688,5.659,6.579,5.566-9.627,6.877Zm2-10.71v6.823l4.373-3.123-4.373-3.7Zm0-9.51v6.043l4.264-3.607-4.264-2.436Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
