use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CameraFocus2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CameraFocus2Icon(props: CameraFocus2IconProps) -> Element {
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
                d: "M1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16ZM23 18L23 23H18V21H21L21 18L23 18ZM21 11H18V9H23V14H21V11ZM14 11H11V14H9.00002V9H14V11ZM14 23V21H11L11 18L8.99999 18L9.00003 23H14Z",
                fill: "currentColor",
            }
        }
    }
}
