use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct StorageCabinetIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn StorageCabinetIcon(props: StorageCabinetIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 38H12.618L9.61803 44H6V38Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M42 38H35.382L38.382 44H42V38Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M46 40H20.5L20.5 4L40 4C43.3137 4 46 6.68629 46 10L46 40ZM32 24.5V21.5H24L24 24.5H32Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 4H17.5V40H2L2 10C2 6.68629 4.68629 4 8 4ZM14 24.5V21.5H8V24.5H14Z",
                fill: "currentColor",
            }
        }
    }
}
