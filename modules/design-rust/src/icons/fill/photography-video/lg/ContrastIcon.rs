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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 37V43H44L40.7123 37H24Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M24 34H39.0685L36.3288 29H24V34Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M24 26H34.6849L31.9452 21H24V26Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M24 18H30.3014L24 6.5V18Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 3.35059L46.0184 44H1.98157L24 3.35059ZM7.0184 41H40.9816L24 9.64936L7.0184 41Z",
                fill: "currentColor",
            }
        }
    }
}
