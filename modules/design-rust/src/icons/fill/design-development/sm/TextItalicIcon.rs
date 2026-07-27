use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextItalicIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextItalicIcon(props: TextItalicIconProps) -> Element {
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
                d: "M8.17567 22L11.5911 10L9 10L9 8L14.2397 8L10.8243 20L11 20L11 22L8.17567 22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 20L6 20L6 22L13 22L13 20Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12.5 4C12.5 2.89543 13.3954 2 14.5 2C15.6046 2 16.5 2.89543 16.5 4C16.5 5.10457 15.6046 6 14.5 6C13.3954 6 12.5 5.10457 12.5 4Z",
                fill: "currentColor",
            }
        }
    }
}
