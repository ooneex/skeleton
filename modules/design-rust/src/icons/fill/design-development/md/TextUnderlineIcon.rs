use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextUnderlineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextUnderlineIcon(props: TextUnderlineIconProps) -> Element {
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
                d: "M2 27H30V29H2V27Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 3V15C9 18.866 12.134 22 16 22C19.866 22 23 18.866 23 15V3H25V15C25 19.9706 20.9706 24 16 24C11.0294 24 7 19.9706 7 15V3H9Z",
                fill: "currentColor",
            }
        }
    }
}
