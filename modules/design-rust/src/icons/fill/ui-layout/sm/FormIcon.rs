use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FormIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FormIcon(props: FormIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 6H2V18L22 18V6Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 4L2 4L2 2L22 2L22 4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 22L12 22L12 20L22 20L22 22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
