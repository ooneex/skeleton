use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ToolArrowIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ToolArrowIcon(props: ToolArrowIconProps) -> Element {
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
                d: "M21.5858 9L23 10.4142L3.00003 30.4142L1.58582 29L21.5858 9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M26.4402 16.3544L15.6456 5.55978L30.4174 1.58301L26.4402 16.3544Z",
                fill: "currentColor",
            }
        }
    }
}
