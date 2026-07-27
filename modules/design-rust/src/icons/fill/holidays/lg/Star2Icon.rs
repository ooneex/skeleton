use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Star2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Star2Icon(props: Star2IconProps) -> Element {
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
                d: "M24 2L30.7949 15.8188L46 18.0375L34.9975 28.8033L37.5928 44L24 36.8282L10.4072 44L13.0025 28.8033L2 18.0375L17.2051 15.8188L24 2Z",
                fill: "currentColor",
            }
        }
    }
}
