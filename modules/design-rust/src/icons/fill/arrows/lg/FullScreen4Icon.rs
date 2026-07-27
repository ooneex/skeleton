use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FullScreen4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FullScreen4Icon(props: FullScreen4IconProps) -> Element {
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
                d: "M4 10C4 6.68629 6.68629 4 10 4H18V7H10C8.34315 7 7 8.34315 7 10V18H4V10Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 38C4 41.3137 6.68629 44 10 44H18V41H10C8.34315 41 7 39.6569 7 38V30H4V38Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M38 4C41.3137 4 44 6.68629 44 10L44 18L41 18L41 10C41 8.34315 39.6569 7 38 7L30 7L30 4L38 4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M38 44C41.3137 44 44 41.3137 44 38L44 30L41 30L41 38C41 39.6569 39.6569 41 38 41L30 41L30 44L38 44Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 13H35V35H13V13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
