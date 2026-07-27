use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RowsOffsetLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RowsOffsetLeftIcon(props: RowsOffsetLeftIconProps) -> Element {
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
                d: "M44 19H18V29H44V19Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 6H18V16H44V6Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 32H18V42H44V32Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.5 14.3787L1.8787 24L11.5 33.6213L13.6213 31.5L6.12134 24L13.6213 16.5L11.5 14.3787Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
