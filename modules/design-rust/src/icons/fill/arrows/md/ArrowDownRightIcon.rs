use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowDownRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowDownRightIcon(props: ArrowDownRightIconProps) -> Element {
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
                d: "M2.58571 4.00003L27.2928 28.7071L28.707 27.2929L3.99992 2.58582L2.58571 4.00003Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 16V27H16V29H29V16H27Z",
                fill: "currentColor",
            }
        }
    }
}
