use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Wardrobe4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Wardrobe4Icon(props: Wardrobe4IconProps) -> Element {
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
                d: "M3 15H11V23L6 23C4.34314 23 3 21.6569 3 20V15ZM8.01001 19L8.01001 17L6.00001 17L6.00001 19L8.01001 19Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11 7V13H3V7H11ZM8.01001 11L8.01001 9L6.00001 9L6.00001 11L8.01001 11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M18 23L13 23V15H15.01V10H13V1H18C19.6569 1 21 2.34315 21 4L21 20C21 21.6569 19.6569 23 18 23Z",
                fill: "currentColor",
            }
            path {
                d: "M11 5V1H6C4.34315 1 3 2.34315 3 4V5H11Z",
                fill: "currentColor",
            }
        }
    }
}
