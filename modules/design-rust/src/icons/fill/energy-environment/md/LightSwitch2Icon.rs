use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LightSwitch2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LightSwitch2Icon(props: LightSwitch2IconProps) -> Element {
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
                d: "M26 30H17V2H26C28.2091 2 30 3.79086 30 6L30 26C30 28.2091 28.2091 30 26 30ZM22 18V24H25V18H22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 2H15V30H6C3.79086 30 2 28.2091 2 26V6C2 3.79086 3.79086 2 6 2ZM7 18V24H10V18H7Z",
                fill: "currentColor",
            }
        }
    }
}
