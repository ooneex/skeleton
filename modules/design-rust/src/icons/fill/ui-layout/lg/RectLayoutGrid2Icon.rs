use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RectLayoutGrid2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RectLayoutGrid2Icon(props: RectLayoutGrid2IconProps) -> Element {
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
                d: "M31 19.5H3V16.5H31V19.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31 31.5H3V28.5H31V31.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 6C4.68629 6 2 8.68629 2 12V36C2 39.3137 4.68629 42 8 42H40C43.3137 42 46 39.3137 46 36V12C46 8.68629 43.3137 6 40 6H8ZM29.5 9H8C6.34315 9 5 10.3431 5 12V36C5 37.6569 6.34315 39 8 39H29.5V9Z",
                fill: "currentColor",
            }
        }
    }
}
