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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M30 7H2V25L30 25V7Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 5L2 5L2 3L30 3L30 5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 29L16 29L16 27L30 27L30 29Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
