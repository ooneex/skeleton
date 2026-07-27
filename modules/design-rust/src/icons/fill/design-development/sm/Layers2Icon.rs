use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Layers2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Layers2Icon(props: Layers2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M1 8V23H16V8H1Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 4H20V19H18V6H5V4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 0H24V15H22V2H9V0Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
