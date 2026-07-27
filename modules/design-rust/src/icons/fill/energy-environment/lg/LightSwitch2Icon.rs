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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M38 44H25.5V4H38C41.3137 4 44 6.68629 44 10V38C44 41.3137 41.3137 44 38 44ZM37 24V37H32V24H37Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10 4H22.5V44H10C6.68629 44 4 41.3137 4 38V10C4 6.68629 6.68629 4 10 4ZM16 24V37H11V24H16Z",
                fill: "currentColor",
            }
        }
    }
}
