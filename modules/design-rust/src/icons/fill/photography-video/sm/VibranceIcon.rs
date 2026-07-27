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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M0.224609 20.9999L12 1.57056L23.7754 20.9999H0.224609ZM12 10.9999C10.3431 10.9999 9 12.3431 9 13.9999C9 15.6568 10.3431 16.9999 12 16.9999C13.6569 16.9999 15 15.6568 15 13.9999C15 12.3431 13.6569 10.9999 12 10.9999Z",
                fill: "currentColor",
            }
        }
    }
}
