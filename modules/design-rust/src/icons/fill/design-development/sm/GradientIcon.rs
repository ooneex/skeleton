use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GradientIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GradientIcon(props: GradientIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 22L12 2L1 2L1 22L12 22Z",
                fill: "currentColor",
            }
            path {
                d: "M19 22L19 2L14 2L14 22L19 22Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 2L23 22L21 22L21 2L23 2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
