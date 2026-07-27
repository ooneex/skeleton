use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Heading3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Heading3Icon(props: Heading3IconProps) -> Element {
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
                d: "M18 5H30V6.95687L22.2297 14H24.5C28.0899 14 31 16.9101 31 20.5C31 24.0899 28.0899 27 24.5 27H18V25H24.5C26.9853 25 29 22.9853 29 20.5C29 18.0147 26.9853 16 24.5 16H19V14.2281L26.9744 7H18V5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 15H15V17H1V15Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 5V27H1V5H3Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 5V27H13V5H15Z",
                fill: "currentColor",
            }
        }
    }
}
