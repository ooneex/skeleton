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
                d: "m15,30.369v-11.824l-8.175,6.358-1.228-1.579,9.403-7.336-9.403-7.313,1.228-1.579,8.175,6.358V1.631l11.709,7.806-8.437,6.562,8.437,6.562-11.709,7.806Zm2-12.824v9.087l6.291-4.194-6.291-4.893Zm0-12.176v9.087l6.291-4.893-6.291-4.194Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
