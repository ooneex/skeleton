use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextCursorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextCursorIcon(props: TextCursorIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 14H17V16H7V14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 21L16 21C14.3431 21 13 19.6569 13 18L13 6C13 4.34315 14.3431 3 16 3L17 3L17 1L16 1C13.2386 1 11 3.23857 11 6L11 18C11 20.7614 13.2386 23 16 23L17 23L17 21Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 21L8 21C9.65685 21 11 19.6569 11 18L11 6C11 4.34315 9.65685 3 8 3L7 3L7 1L8 1C10.7614 1 13 3.23857 13 6L13 18C13 20.7614 10.7614 23 8 23L7 23L7 21Z",
                fill: "currentColor",
            }
        }
    }
}
