use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoxArchiveIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoxArchiveIcon(props: BoxArchiveIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M36 42C39.3137 42 42 39.3137 42 36V18H6V36C6 39.3137 8.68629 42 12 42H36ZM19 22.8614C19 23.966 19.8954 25 21 25H27C28.1046 25 29 24.1046 29 23C29 21.8954 28.1046 21 27 21H21C19.8954 21 19 21.7568 19 22.8614Z",
                fill: "currentColor",
            }
            path {
                d: "M44 15L4 15L4 4L44 4L44 15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
