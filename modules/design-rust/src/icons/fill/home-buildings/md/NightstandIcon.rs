use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NightstandIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NightstandIcon(props: NightstandIconProps) -> Element {
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
                d: "M10 27V31H8V27H10Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 27V31H22V27H24Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M28 3V15L4 15V3H28ZM16 8.5C15.1716 8.5 14.5 9.17157 14.5 10C14.5 10.8284 15.1716 11.5 16 11.5C16.8284 11.5 17.5 10.8284 17.5 10C17.5 9.17157 16.8284 8.5 16 8.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 17H28L28 25C28 27.2091 26.2091 29 24 29L8.00001 29C5.79087 29 4 27.2091 4 25L4 17ZM16 20.5C15.1716 20.5 14.5 21.1716 14.5 22C14.5 22.8284 15.1716 23.5 16 23.5C16.8284 23.5 17.5 22.8284 17.5 22C17.5 21.1716 16.8284 20.5 16 20.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 5L2 5L2 3L30 3L30 5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
