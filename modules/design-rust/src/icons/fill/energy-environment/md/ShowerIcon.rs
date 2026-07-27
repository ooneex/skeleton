use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShowerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShowerIcon(props: ShowerIconProps) -> Element {
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
                d: "M17 0V6H15V0H17Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 24L15 20L17 20L17 24L15 24Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 22L20 18L22 18L22 22L20 22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 29L20 25L22 25L22 29L20 29Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10 22L10 18L12 18L12 22L10 22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10 29L10 25L12 25L12 29L10 29Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 31L15 27L17 27L17 31L15 31Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M4 13.5714C4 8.06742 9.61914 4 16 4C22.3809 4 28 8.06742 28 13.5714V15H4V13.5714Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 14H30V16H2V14Z",
                fill: "currentColor",
            }
        }
    }
}
