use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TowelRackIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TowelRackIcon(props: TowelRackIconProps) -> Element {
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
                d: "M7 5L2 5L2 7L7 7L7 5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25 5L30 5L30 7L25 7L25 5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 25V30H25V25H27Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 25V30H15V25H17Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 25V30H20V25H22Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 25V30H5V25H7Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 25V30H10V25H12Z",
                fill: "currentColor",
            }
            path {
                d: "M5 21L5 2L27 2L27 21H5Z",
                fill: "currentColor",
            }
            path {
                d: "M5 23L5 27H27V23H5Z",
                fill: "currentColor",
            }
        }
    }
}
