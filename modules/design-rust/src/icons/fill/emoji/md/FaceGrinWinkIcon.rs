use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FaceGrinWinkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FaceGrinWinkIcon(props: FaceGrinWinkIconProps) -> Element {
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
                d: "M16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1ZM24 18C24 22.4183 20.4183 26 16 26C11.5817 26 8 22.4183 8 18H24ZM23 12H18V14H23V12ZM11 11C9.89543 11 9 11.8954 9 13C9 14.1046 9.89543 15 11 15C12.1046 15 13 14.1046 13 13C13 11.8954 12.1046 11 11 11Z",
                fill: "currentColor",
            }
        }
    }
}
