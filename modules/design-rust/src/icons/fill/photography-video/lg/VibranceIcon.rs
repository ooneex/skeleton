use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VibranceIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VibranceIcon(props: VibranceIconProps) -> Element {
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
                d: "M45.6998 42L24.0002 2.94092L2.30078 42H45.6998ZM24 23C20.9624 23 18.5 25.4624 18.5 28.5C18.5 31.5376 20.9624 34 24 34C27.0376 34 29.5 31.5376 29.5 28.5C29.5 25.4624 27.0376 23 24 23Z",
                fill: "currentColor",
            }
        }
    }
}
