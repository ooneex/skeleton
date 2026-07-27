use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MountainIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MountainIcon(props: MountainIconProps) -> Element {
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
                d: "M7.92113 5.43384L12.3279 11.9392L10.6721 13.0609L8.07891 9.2328L2.38134 19.3618L0.638184 18.3813L7.92113 5.43384Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 1.90042L1.32104 29H30.6789L16 1.90042ZM21.3684 16.0105L16 6.0996L10.6316 16.0105L12.5 19L16 15L19.5 19L21.3684 16.0105Z",
                fill: "currentColor",
            }
        }
    }
}
