use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowLeftFromLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowLeftFromLineIcon(props: ArrowLeftFromLineIconProps) -> Element {
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
                d: "M24 17L3 17L3 15L24 15L24 17Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13.4143 25L4.41431 16L13.4143 6.99997L12.0001 5.58576L1.58588 16L12.0001 26.4142L13.4143 25Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29 2L27 2L27 30L29 30L29 2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
