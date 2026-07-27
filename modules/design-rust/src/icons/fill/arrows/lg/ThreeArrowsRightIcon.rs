use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ThreeArrowsRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ThreeArrowsRightIcon(props: ThreeArrowsRightIconProps) -> Element {
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
                d: "M6 22.5H43V25.5H6V22.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 8.5H23.5V11.5H6V8.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 36.5H28.5V39.5H6V36.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M36.5 15.3787L45.1213 24L36.5 32.6213L34.3787 30.5L40.8787 24L34.3787 17.5L36.5 15.3787Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 1.37866L25.6213 9.99998L17 18.6213L14.8787 16.5L21.3787 9.99998L14.8787 3.49998L17 1.37866Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 29.3787L30.6213 38L22 46.6213L19.8787 44.5L26.3787 38L19.8787 31.5L22 29.3787Z",
                fill: "currentColor",
            }
        }
    }
}
