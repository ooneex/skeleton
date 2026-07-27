use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Newspaper2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Newspaper2Icon(props: Newspaper2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M39 29L39 8C39 6.34315 37.6569 5 36 5H12C10.3431 5 9 6.34315 9 8L9 38.5C9 39.8807 10.1193 41 11.5 41C12.8807 41 14 39.8807 14 38.5V32H47V38C47 41.3137 44.3137 44 41 44H11.5C8.46243 44 6 41.5376 6 38.5V8C6 4.68629 8.68629 2 12 2H36C39.3137 2 42 4.68629 42 8L42 29H39Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 24H33V21H15V24Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 17H24V14H15V17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 17H33V14H27V17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
