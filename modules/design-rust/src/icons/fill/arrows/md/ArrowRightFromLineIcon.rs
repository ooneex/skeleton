use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowRightFromLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowRightFromLineIcon(props: ArrowRightFromLineIconProps) -> Element {
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
                d: "M8 17L29 17L29 15L8 15L8 17Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18.5857 25L27.5857 16L18.5857 6.99997L19.9999 5.58576L30.4141 16L19.9999 26.4142L18.5857 25Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 2L5 2L5 30L3 30L3 2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
