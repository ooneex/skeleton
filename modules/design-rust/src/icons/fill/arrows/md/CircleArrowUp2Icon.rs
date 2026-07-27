use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleArrowUp2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleArrowUp2Icon(props: CircleArrowUp2IconProps) -> Element {
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
                d: "M0.999999 16C1 24.2843 7.71573 31 16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 0.999999 16 0.999999C7.71573 1 0.999999 7.71573 0.999999 16ZM16 6.33325L24 16.9999L17 16.9999L17 25L15 25L15 16.9999L8 16.9999L16 6.33325Z",
                fill: "currentColor",
            }
        }
    }
}
