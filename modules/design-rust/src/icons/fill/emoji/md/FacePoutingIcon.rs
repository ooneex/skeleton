use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FacePoutingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FacePoutingIcon(props: FacePoutingIconProps) -> Element {
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
                d: "M1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16ZM24 12H18V14H24V12ZM8 12H14V14H8V12ZM24 24H8C8 19.5817 11.5817 16 16 16C20.4183 16 24 19.5817 24 24Z",
                fill: "currentColor",
            }
        }
    }
}
