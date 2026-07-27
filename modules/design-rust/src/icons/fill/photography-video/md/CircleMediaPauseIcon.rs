use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleMediaPauseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleMediaPauseIcon(props: CircleMediaPauseIconProps) -> Element {
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
                d: "M1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16ZM20 10V22H18V10H20ZM14 10H12V22H14V10Z",
                fill: "currentColor",
            }
        }
    }
}
