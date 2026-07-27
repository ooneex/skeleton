use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DesignDevIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DesignDevIcon(props: DesignDevIconProps) -> Element {
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
                d: "M14 16H30V18H14V16Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31 7H13V31H31L31 7ZM17 11L17 27H27L27 11L17 11Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 1H19V5H13C11.8954 5 11 5.89543 11 7V25L1 25V1ZM8.91421 9.49992L7.49992 8.08579L2.58584 13.0004L7.4994 17.9142L8.91364 16.5L5.41416 13.0004L8.91421 9.49992Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
