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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 2H11L11 22H5C3.34314 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2ZM5 14V18H8V14H5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 22H13V2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22ZM16 14V18H19V14H16Z",
                fill: "currentColor",
            }
        }
    }
}
