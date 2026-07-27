use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Volume2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Volume2Icon(props: Volume2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M30 2.2962L16.6243 14H8C4.68629 14 2 16.6863 2 20V28C2 31.3137 4.68629 34 8 34H16.6243L30 45.7037V2.2962Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M46 25.5L39 25.5L39 22.5L46 22.5L46 25.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M41.7678 12.3535L36.3493 17.7721L34.2279 15.6507L39.6465 10.2322L41.7678 12.3535Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M41.7676 35.6463L36.3474 30.2261L34.226 32.3474L39.6462 37.7676L41.7676 35.6463Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
