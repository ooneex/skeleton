use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CopyIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CopyIcon(props: CopyIconProps) -> Element {
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
                d: "M5 2H27V7H5V2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M3 9V30H29V9H3Z",
                fill: "currentColor",
            }
        }
    }
}
