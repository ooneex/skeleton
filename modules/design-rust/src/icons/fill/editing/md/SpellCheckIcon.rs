use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SpellCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SpellCheckIcon(props: SpellCheckIconProps) -> Element {
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
                d: "M9.5 18H22.5V20H9.5V18Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30.4142 21L21 30.4142L15.5858 25L17 23.5858L21 27.5858L29 19.5858L30.4142 21Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14.6493 3H17.3507L24.5722 21.5696L22.7082 22.2945L16 5.04474L7.10558 27.9161V29H4.53815L14.6493 3Z",
                fill: "currentColor",
            }
        }
    }
}
