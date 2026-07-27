use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsExpandDiagonal3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsExpandDiagonal3Icon(props: ArrowsExpandDiagonal3IconProps) -> Element {
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
                d: "M4.37866 41.4999L41.5 4.37878L43.6214 6.5001L6.49998 43.6213L4.37866 41.4999Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M41 24V7H24V4H44V24H41Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 24V41H24V44H4V24H7Z",
                fill: "currentColor",
            }
        }
    }
}
