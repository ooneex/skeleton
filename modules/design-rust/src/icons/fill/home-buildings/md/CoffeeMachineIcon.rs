use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CoffeeMachineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CoffeeMachineIcon(props: CoffeeMachineIconProps) -> Element {
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
                d: "M24 10V14H22V10H24Z",
                fill: "currentColor",
            }
            path {
                d: "M14 13H2V15H6V17H2V19H6V21H2V23H6V25H2V30H14V13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 18L30 20C30 23.866 26.866 27 23 27C19.134 27 16 23.866 16 20L16 18C16 16.8954 16.8954 16 18 16L28 16C29.1046 16 30 16.8954 30 18Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 28H30V30H16V28Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 2H24C27.3137 2 30 4.68629 30 8V11H2V2Z",
                fill: "currentColor",
            }
        }
    }
}
