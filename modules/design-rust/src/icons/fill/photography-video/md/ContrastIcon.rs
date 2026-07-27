use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ContrastIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ContrastIcon(props: ContrastIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 28V23H25.5V21.4038L29 28H16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M25.2857 21H16V16H21.5V14H16V3.5L25.2857 21Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 1.90041L30.679 29H1.32104L16 1.90041ZM4.67894 27H27.3211L16 6.09959L4.67894 27Z",
                fill: "currentColor",
            }
        }
    }
}
