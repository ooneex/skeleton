use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AlignVerticalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AlignVerticalIcon(props: AlignVerticalIconProps) -> Element {
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
                d: "M18 13H24V11H18V13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 13H15V11H9V13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M0 13H6V11H0L0 13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M5 3L5 21L10 21L10 3L5 3Z",
                fill: "currentColor",
            }
            path {
                d: "M14 6L14 18L19 18L19 6L14 6Z",
                fill: "currentColor",
            }
        }
    }
}
