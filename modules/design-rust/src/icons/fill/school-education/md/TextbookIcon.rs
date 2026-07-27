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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 1C26.2091 1 28 2.79086 28 5V27C28 29.2091 26.2091 31 24 31H4V1H24ZM11 14.8047L16 11.6787L21 14.8047V3H11V14.8047Z",
                fill: "currentColor",
            }
        }
    }
}
