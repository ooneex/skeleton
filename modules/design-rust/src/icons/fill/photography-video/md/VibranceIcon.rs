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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31.7232 28.9999L16 1.48438L0.276855 28.9999H31.7232ZM19.5 18.9999C19.5 20.9329 17.933 22.4999 16 22.4999C14.067 22.4999 12.5 20.9329 12.5 18.9999C12.5 17.0669 14.067 15.4999 16 15.4999C17.933 15.4999 19.5 17.0669 19.5 18.9999Z",
                fill: "currentColor",
            }
        }
    }
}
