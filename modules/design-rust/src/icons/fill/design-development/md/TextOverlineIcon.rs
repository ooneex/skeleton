use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextOverlineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextOverlineIcon(props: TextOverlineIconProps) -> Element {
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
                d: "M21.8382 23H10.1474V21H21.8382V23Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14.4053 7H17.5947L25.4169 29H22.89V27.8632L16.1831 9H15.8169L9.11031 27.8622V29H6.58311L14.4053 7Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 3H30V5H2V3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
