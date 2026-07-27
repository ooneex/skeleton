use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RectLoginIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RectLoginIcon(props: RectLoginIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 5C11 2.79086 12.7909 1 15 1H25C27.2091 1 29 2.79086 29 5V27C29 29.2091 27.2091 31 25 31H15C12.7909 31 11 29.2091 11 27V17H14V23L22 16L14 9V15H11V5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 15H11V17H2V15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
