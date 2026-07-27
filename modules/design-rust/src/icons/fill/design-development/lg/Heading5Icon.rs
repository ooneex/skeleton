use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Heading5IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Heading5Icon(props: Heading5IconProps) -> Element {
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
                d: "M4 22.5H23V25.5H4V22.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 9V39H4V9H7Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 9V39H20V9H23Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 9H43V12H30V20H35.5C40.7467 20 45 24.2533 45 29.5C45 34.7467 40.7467 39 35.5 39H27V36H35.5C39.0899 36 42 33.0899 42 29.5C42 25.9101 39.0899 23 35.5 23H27V9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
