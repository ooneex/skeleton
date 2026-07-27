use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AngleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AngleIcon(props: AngleIconProps) -> Element {
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
                d: "M30 30L2 30L2 2L4 2L4 28L30 28L30 30Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 10H7C15.2843 10 22 16.7157 22 25V26H6V10Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
