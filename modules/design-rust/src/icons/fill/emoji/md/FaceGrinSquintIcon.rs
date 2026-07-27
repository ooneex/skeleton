use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FaceGrinSquintIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FaceGrinSquintIcon(props: FaceGrinSquintIconProps) -> Element {
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
                d: "M1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16ZM21.0826 12L22.9109 9.90365L21.4036 8.58908L18 12.4917V14H25V12H21.0826ZM9.08907 9.90365L10.9174 12H7V14H14V12.4917L10.5964 8.58908L9.08907 9.90365ZM24 18H8C8 22.4183 11.5817 26 16 26C20.4183 26 24 22.4183 24 18Z",
                fill: "currentColor",
            }
        }
    }
}
