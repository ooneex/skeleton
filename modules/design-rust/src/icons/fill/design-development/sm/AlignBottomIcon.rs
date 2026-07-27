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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 22L1 22L1 20L23 20L23 22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M5 2L5 18L10 18L10 2L5 2Z",
                fill: "currentColor",
            }
            path {
                d: "M14 8L14 18L19 18L19 8L14 8Z",
                fill: "currentColor",
            }
        }
    }
}
