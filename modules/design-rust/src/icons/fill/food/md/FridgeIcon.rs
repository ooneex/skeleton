use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FridgeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FridgeIcon(props: FridgeIconProps) -> Element {
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
                d: "M4 14H28L28 27C28 29.2091 26.2091 31 24 31H8C5.79086 31 4 29.2091 4 27V14ZM9 17H7L7 23H9V17Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 1C26.2091 1 28 2.79086 28 5V12H4V5C4 2.79086 5.79086 1 8 1H24ZM9 6H7L7 9H9L9 6Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
