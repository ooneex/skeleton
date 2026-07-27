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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 20H42V40C42 43.3137 39.3137 46 36 46H12C8.68629 46 6 43.3137 6 40V20ZM11 33H14L14 24H11L11 33Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M36 2C39.3137 2 42 4.68629 42 8V17H6V8C6 4.68629 8.68629 2 12 2H36ZM14 9H11V14H14V9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
