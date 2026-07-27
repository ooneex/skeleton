use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MarsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MarsIcon(props: MarsIconProps) -> Element {
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
                d: "M45.0814 5.03979L32.0605 18.0606L29.9392 15.9393L42.96 2.91847L45.0814 5.03979Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 26.5C7 18.4919 13.4919 12 21.5 12C29.5081 12 36 18.4919 36 26.5C36 34.5081 29.5081 41 21.5 41C13.4919 41 7 34.5081 7 26.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31 2H46V17H43V5H31V2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
