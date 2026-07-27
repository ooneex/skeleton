use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DialIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DialIcon(props: DialIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 7.18138C8.87976 8.12189 5 12.6079 5 18C5 24.0751 9.92487 29 16 29C22.0751 29 27 24.0751 27 18C27 12.6079 23.1202 8.12189 18 7.18138V16H14V7.18138Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29 17L31.9867 17L31.9867 19L29 19L29 17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 2.01334V5H15V2.01334H17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M-8.74228e-08 17L2.98666 17L2.98666 19L0 19L-8.74228e-08 17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M28.0094 7.40755L25.8975 9.51944L24.4833 8.10522L26.5952 5.99333L28.0094 7.40755Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5.39145 5.9839L7.50334 8.09579L6.08912 9.51001L3.97723 7.39812L5.39145 5.9839Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
