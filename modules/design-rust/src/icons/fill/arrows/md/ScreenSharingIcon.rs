use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ScreenSharingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ScreenSharingIcon(props: ScreenSharingIconProps) -> Element {
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
                d: "M17 24V29H15V24H17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M24 28H8V30H24V28Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M27 3H5C2.794 3 1 4.794 1 7V21C1 23.206 2.794 25 5 25H27C29.206 25 31 23.206 31 21V7C31 4.794 29.206 3 27 3ZM12.293 15.707L6 9.414V15H4V6H13V8H7.414L13.707 14.293L12.293 15.707Z",
                fill: "currentColor",
            }
        }
    }
}
