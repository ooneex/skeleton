use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Itinerary3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Itinerary3Icon(props: Itinerary3IconProps) -> Element {
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
                d: "M15 6.5H26C28.2091 6.5 30 8.29086 30 10.5L30 22C30 24.2091 28.2091 26 26 26H15V24H26C27.1046 24 28 23.1046 28 22L28 10.5C28 9.39543 27.1046 8.5 26 8.5H15V6.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2.5 20H12.5V30H2.5V20Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 7.5C2 4.46243 4.46243 2 7.5 2C10.5376 2 13 4.46243 13 7.5C13 10.5376 10.5376 13 7.5 13C4.46243 13 2 10.5376 2 7.5Z",
                fill: "currentColor",
            }
        }
    }
}
