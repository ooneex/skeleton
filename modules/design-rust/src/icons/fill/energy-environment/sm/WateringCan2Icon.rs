use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WateringCan2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WateringCan2Icon(props: WateringCan2IconProps) -> Element {
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
                d: "M8.5 3C6.567 3 5 4.567 5 6.5L5 8L3 8L3 6.5C3 3.46243 5.46243 1 8.5 1C11.5376 1 14 3.46243 14 6.5L14 8L12 8L12 6.5C12 4.567 10.433 3 8.5 3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 22L19 19L21 19L21 22L19 22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 19L22 16L24 16L24 19L22 19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 24L22 21L24 21L24 24L22 24Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M23.2743 9.86011L21.0614 7.64715L16 11.865V7H1V19C1 20.6569 2.34314 22 4 22L13.9021 22C14.9278 22 15.8824 21.476 16.4331 20.6106L23.2743 9.86011Z",
                fill: "currentColor",
            }
        }
    }
}
