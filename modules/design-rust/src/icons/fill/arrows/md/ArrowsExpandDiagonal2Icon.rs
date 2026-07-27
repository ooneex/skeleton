use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsExpandDiagonal2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsExpandDiagonal2Icon(props: ArrowsExpandDiagonal2IconProps) -> Element {
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
                d: "M18.9999 17.5858L29.707 28.2929L28.2928 29.7071L17.5857 19L18.9999 17.5858Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2.29297 3.70712L3.70718 2.29291L14.4143 13L13.0001 14.4142L2.29297 3.70712Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 16V4H16V2H2V16H4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M28 16L28 28L16 28L16 30L30 30L30 16L28 16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
