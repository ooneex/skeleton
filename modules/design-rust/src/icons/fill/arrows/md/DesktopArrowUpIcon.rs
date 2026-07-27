use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DesktopArrowUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DesktopArrowUpIcon(props: DesktopArrowUpIconProps) -> Element {
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
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 3H27C29.206 3 31 4.794 31 7V21C31 23.206 29.206 25 27 25H5C2.794 25 1 23.206 1 21V7C1 4.794 2.794 3 5 3ZM17 20.9866H15V14.9865L9 14.9866L16 6.99997L23 14.9865L17 14.9865V20.9866Z",
                fill: "currentColor",
            }
        }
    }
}
