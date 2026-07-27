use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleArrowDown2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleArrowDown2Icon(props: CircleArrowDown2IconProps) -> Element {
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
                d: "M31 16C31 7.71573 24.2843 1 16 0.999999C7.71573 0.999999 1 7.71573 0.999999 16C0.999999 24.2843 7.71573 31 16 31C24.2843 31 31 24.2843 31 16ZM16 25.6667L8 15.0001L15 15.0001L15 7L17 7L17 15.0001L24 15.0001L16 25.6667Z",
                fill: "currentColor",
            }
        }
    }
}
