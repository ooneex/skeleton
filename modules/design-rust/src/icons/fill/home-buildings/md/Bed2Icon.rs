use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Bed2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Bed2Icon(props: Bed2IconProps) -> Element {
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
                d: "M14 8H26C28.2091 8 30 9.79086 30 12V15H14V8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 11.5C6 9.84233 7.34233 8.5 9 8.5C10.6577 8.5 12 9.84233 12 11.5C12 13.1577 10.6577 14.5 9 14.5C7.34233 14.5 6 13.1577 6 11.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 5V17H30V27H28V23H4V27H2V5H4Z",
                fill: "currentColor",
            }
        }
    }
}
