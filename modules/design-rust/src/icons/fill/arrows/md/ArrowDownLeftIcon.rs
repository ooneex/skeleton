use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowDownLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowDownLeftIcon(props: ArrowDownLeftIconProps) -> Element {
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
                d: "M29.4142 4.00003L4.70706 28.7071L3.29285 27.2929L28 2.58582L29.4142 4.00003Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 16V27H16V29H3V16H5Z",
                fill: "currentColor",
            }
        }
    }
}
