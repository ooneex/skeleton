use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DoorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DoorIcon(props: DoorIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 31C5 21 5 11 5 1L27 1L27 31H5ZM23 5V15L17 15L17 5L23 5ZM15 5L8.99997 5L8.99997 15L15 15V5ZM9.00003 18H12.3334V20H9.00003V18Z",
                fill: "currentColor",
            }
        }
    }
}
