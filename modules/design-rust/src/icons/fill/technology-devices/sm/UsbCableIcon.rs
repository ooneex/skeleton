use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UsbCableIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UsbCableIcon(props: UsbCableIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 19V15H7V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V15H19V19C19 20.6569 17.6569 22 16 22H8C6.34315 22 5 20.6569 5 19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M15 2H21V5H15V2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M3 2H9V5H3V2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 16L17 16C15.3431 16 14 14.6569 14 13L14 7L22 7L22 13C22 14.6569 20.6569 16 19 16Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 16L5 16C3.34314 16 2 14.6569 2 13L2 7L10 7L10 13C10 14.6569 8.65685 16 7 16Z",
                fill: "currentColor",
            }
        }
    }
}
