use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FaceTongueWinkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FaceTongueWinkIcon(props: FaceTongueWinkIconProps) -> Element {
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
                d: "M1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16ZM23 19V17H9V19H13V22C13 23.6569 14.3431 25 16 25C17.6569 25 19 23.6569 19 22V19H23ZM23 12H18V14H23V12ZM11 11C9.89543 11 9 11.8954 9 13C9 14.1046 9.89543 15 11 15C12.1046 15 13 14.1046 13 13C13 11.8954 12.1046 11 11 11Z",
                fill: "currentColor",
            }
        }
    }
}
