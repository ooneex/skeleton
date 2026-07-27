use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UsbIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UsbIcon(props: UsbIconProps) -> Element {
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
                d: "M7 1H25V13H20V12.0001V9.66675V8.66675H18V9.66675V12.0001V13H14V12.0001V9.66675V8.66675H12V9.66675V12.0001V13H7V1Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 21V15H27V21C27 27.0751 22.0751 32 16 32C9.92487 32 5 27.0751 5 21ZM19 21V19H13V21H19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
