use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ListRadioIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ListRadioIcon(props: ListRadioIconProps) -> Element {
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
                d: "M20 36.5L44 36.5V39.5L20 39.5V36.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 22.5L44 22.5V25.5L20 25.5V22.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 8.5L44 8.5V11.5L20 11.5V8.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 10C4 6.96243 6.46243 4.5 9.5 4.5C12.5376 4.5 15 6.96243 15 10C15 13.0376 12.5376 15.5 9.5 15.5C6.46243 15.5 4 13.0376 4 10Z",
                fill: "currentColor",
            }
            path {
                d: "M4 24C4 20.9624 6.46243 18.5 9.5 18.5C12.5376 18.5 15 20.9624 15 24C15 27.0376 12.5376 29.5 9.5 29.5C6.46243 29.5 4 27.0376 4 24Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 38C4 34.9624 6.46243 32.5 9.5 32.5C12.5376 32.5 15 34.9624 15 38C15 41.0376 12.5376 43.5 9.5 43.5C6.46243 43.5 4 41.0376 4 38Z",
                fill: "currentColor",
            }
        }
    }
}
