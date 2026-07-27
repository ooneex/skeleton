use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextPromptIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextPromptIcon(props: TextPromptIconProps) -> Element {
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
                d: "M22 2H2V4H22V2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 8H2V10H22V8Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 14H2V16H12V14Z",
                fill: "currentColor",
            }
            path {
                d: "M19.5 16.5L18 13L16.5 16.5L13 18L16.5 19.5L18 23L19.5 19.5L23 18L19.5 16.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
