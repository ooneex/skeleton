use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextScaleYIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextScaleYIcon(props: TextScaleYIconProps) -> Element {
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
                d: "M26 3L26 29L24 29L24 3L26 3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19.5858 7L25 1.5858L30.4142 7L29 8.41421L25 4.41422L21 8.41422L19.5858 7Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19.5858 25L25 30.4142L30.4142 25L29 23.5858L25 27.5858L21 23.5858L19.5858 25Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 6H17V8H1V6Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10 6V27H8V6H10Z",
                fill: "currentColor",
            }
        }
    }
}
