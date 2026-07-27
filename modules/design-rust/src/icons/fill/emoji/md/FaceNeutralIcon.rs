use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FaceNeutralIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FaceNeutralIcon(props: FaceNeutralIconProps) -> Element {
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
                d: "M1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16ZM21 21V19H11V21H21ZM21 11C19.8954 11 19 11.8954 19 13C19 14.1046 19.8954 15 21 15C22.1046 15 23 14.1046 23 13C23 11.8954 22.1046 11 21 11ZM11 11C9.89543 11 9 11.8954 9 13C9 14.1046 9.89543 15 11 15C12.1046 15 13 14.1046 13 13C13 11.8954 12.1046 11 11 11Z",
                fill: "currentColor",
            }
        }
    }
}
