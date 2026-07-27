use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PillBottleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PillBottleIcon(props: PillBottleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M28 26C28 28.2091 26.2091 30 24 30H8C5.79086 30 4 28.2091 4 26V11H28V26ZM10 24H22V16H10V24Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 9H2V2H30V9ZM6 7H8V4H6V7ZM12 4V7H14V4H12ZM18 7H20V4H18V7ZM24 7H26V4H24V7Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
