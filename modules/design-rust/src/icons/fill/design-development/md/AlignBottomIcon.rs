use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AlignBottomIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AlignBottomIcon(props: AlignBottomIconProps) -> Element {
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
                d: "M31 30L1 30L1 28L31 28L31 30Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 26L6 2L14 2L14 26L6 26Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18 26L18 12L26 12L26 26L18 26Z",
                fill: "currentColor",
            }
        }
    }
}
