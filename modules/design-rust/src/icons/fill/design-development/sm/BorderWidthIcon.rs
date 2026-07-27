use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BorderWidthIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BorderWidthIcon(props: BorderWidthIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 11L22 11L22 2L2 2L2 11Z",
                fill: "currentColor",
            }
            path {
                d: "M2 18L22 18L22 13L2 13L2 18Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 22L2 22L2 20L22 20L22 22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
