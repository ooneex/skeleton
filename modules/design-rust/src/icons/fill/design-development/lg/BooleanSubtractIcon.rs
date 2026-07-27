use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BooleanSubtractIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BooleanSubtractIcon(props: BooleanSubtractIconProps) -> Element {
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
                d: "M37 34L44 34L44 3.99999L14 3.99999L14 11L17 11L17 6.99999L41 6.99999L41 31L37 31L37 34Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 14L4 14L4 22L7 22L7 17L12 17L12 14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M34 22L34 14L26 14L26 17L31 17L31 22L34 22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31 36L31 41L26 41L26 44L34 44L34 36L31 36Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 25L4 33L7 33L7 25L4 25Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31 25L31 33L34 33L34 25L31 25Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 36L4 44L12 44L12 41L7 41L7 36L4 36Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 41L15 44L23 44L23 41L15 41Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 17L23 17L23 14L15 14L15 17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
