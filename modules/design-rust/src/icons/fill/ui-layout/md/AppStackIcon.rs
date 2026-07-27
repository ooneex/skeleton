use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AppStackIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AppStackIcon(props: AppStackIconProps) -> Element {
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
                d: "M6 2H26V30H6V2Z",
                fill: "currentColor",
            }
            rect {
                x: "1",
                y: "4",
                width: "3",
                height: "24",
                fill: "currentColor",
                "data-color": "color-2",
            }
            rect {
                x: "28",
                y: "4",
                width: "3",
                height: "24",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
