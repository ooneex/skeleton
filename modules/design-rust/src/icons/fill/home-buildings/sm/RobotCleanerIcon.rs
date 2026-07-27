use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RobotCleanerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RobotCleanerIcon(props: RobotCleanerIconProps) -> Element {
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
                d: "M21 1.58578L18.2929 4.29289L19.7071 5.70711L22.4142 3L21 1.58578Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3.00003 1.58578L5.70714 4.29289L4.29292 5.70711L1.58582 3L3.00003 1.58578Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16C15 17.6569 13.6569 19 12 19C10.3431 19 9 17.6569 9 16ZM13 5H11V8H13V5Z",
                fill: "currentColor",
            }
        }
    }
}
