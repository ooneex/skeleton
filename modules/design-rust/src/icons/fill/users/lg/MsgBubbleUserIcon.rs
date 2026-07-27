use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MsgBubbleUserIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MsgBubbleUserIcon(props: MsgBubbleUserIconProps) -> Element {
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
                d: "M21 6C21 3.79086 22.7909 2 25 2H43C45.2091 2 47 3.79086 47 6V16C47 18.2091 45.2091 20 43 20H28.3028L21 24.8685V6Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M12.5 29C15.5376 29 18 26.5376 18 23.5C18 20.4624 15.5376 18 12.5 18C9.46243 18 7 20.4624 7 23.5C7 26.5376 9.46243 29 12.5 29Z",
                fill: "currentColor",
            }
            path {
                d: "M23.998 41.5725L23.2267 41.752C16.078 43.416 8.92204 43.416 1.77334 41.752L1.00208 41.5725C1.11928 35.6519 6.28912 31 12.5 31C18.711 31 23.8808 35.6519 23.998 41.5725Z",
                fill: "currentColor",
            }
        }
    }
}
