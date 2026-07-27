use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleArrowDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleArrowDownIcon(props: CircleArrowDownIconProps) -> Element {
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
                d: "M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM11 6H13L13 14.5858L16.2426 11.3432L17.6568 12.7574L12 18.4142L6.34314 12.7574L7.75735 11.3432L11 14.5858V6Z",
                fill: "currentColor",
            }
        }
    }
}
