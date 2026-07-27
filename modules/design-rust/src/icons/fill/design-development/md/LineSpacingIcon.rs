use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LineSpacingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LineSpacingIcon(props: LineSpacingIconProps) -> Element {
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
                d: "M8 3L8 29L6 29L6 3L8 3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1.58578 7L6.99999 1.5858L12.4142 7L11 8.41421L6.99999 4.41422L2.99999 8.41421L1.58578 7Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1.58578 25L6.99999 30.4142L12.4142 25L11 23.5858L6.99999 27.5858L2.99999 23.5858L1.58578 25Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 11H30V13H15V11Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 3H30V5H15V3Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 19H30V21H15V19Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 27L23 27V29L15 29V27Z",
                fill: "currentColor",
            }
        }
    }
}
