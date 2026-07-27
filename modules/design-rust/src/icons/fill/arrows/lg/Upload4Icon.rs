use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Upload4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Upload4Icon(props: Upload4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M35.1215 15L24.0002 3.87866L12.8789 15L15.0002 17.1213L22.5 9.62153V33H25.5V9.62108L33.0002 17.1213L35.1215 15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 31V38C7 39.6569 8.34315 41 10 41H38C39.6569 41 41 39.6569 41 38V31H44V38C44 41.3137 41.3137 44 38 44H10C6.68629 44 4 41.3137 4 38V31H7Z",
                fill: "currentColor",
            }
        }
    }
}
