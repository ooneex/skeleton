use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CursorMenuIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CursorMenuIcon(props: CursorMenuIconProps) -> Element {
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
                d: "M23 36.5H44V39.5H23V36.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 29.5H44V32.5H23V29.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 23H44V46H23V23ZM26 26V43H41V26H26Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.7344 29.1519L17.7405 17.7402L29.1521 11.7341L4.52702 4.52673L11.7344 29.1519Z",
                fill: "currentColor",
            }
        }
    }
}
