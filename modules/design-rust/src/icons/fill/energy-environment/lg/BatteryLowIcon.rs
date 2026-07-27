use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BatteryLowIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BatteryLowIcon(props: BatteryLowIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M46 30V18H42V30H46Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 9H37C40.3137 9 43 11.6863 43 15V33C43 36.3137 40.3137 39 37 39H8C4.68629 39 2 36.3137 2 33V15C2 11.6863 4.68629 9 8 9ZM12 32.5V15.5H9V32.5H12ZM19 32.5V15.5H16V32.5H19Z",
                fill: "currentColor",
            }
        }
    }
}
