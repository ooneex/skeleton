use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextbookIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextbookIcon(props: TextbookIconProps) -> Element {
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
                d: "M18 1C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H3V1H18ZM8 11.8682L12 9.20117L16 11.8682V3H8V11.8682Z",
                fill: "currentColor",
            }
        }
    }
}
