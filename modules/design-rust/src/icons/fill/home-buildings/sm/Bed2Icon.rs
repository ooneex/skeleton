use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Bed2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Bed2Icon(props: Bed2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11 6H19C21.2091 6 23 7.79086 23 10V12H11V6Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4.5 8.5C4.5 7.11872 5.61872 6 7 6C8.38128 6 9.5 7.11872 9.5 8.5C9.5 9.88128 8.38128 11 7 11C5.61872 11 4.5 9.88128 4.5 8.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 14H22V19H2V14Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 4V21H1V4H3Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 14L23 21L21 21L21 14L23 14Z",
                fill: "currentColor",
            }
        }
    }
}
