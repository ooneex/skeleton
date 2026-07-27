use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct StackXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn StackXIcon(props: StackXIconProps) -> Element {
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
                d: "M4 23L4 1L2 1L2 23L4 23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 23L22 1L20 1L20 23L22 23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M16 4L16 20L8 20L8 4L16 4Z",
                fill: "currentColor",
            }
        }
    }
}
