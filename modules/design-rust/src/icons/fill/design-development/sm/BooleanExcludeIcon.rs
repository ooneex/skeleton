use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BooleanExcludeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BooleanExcludeIcon(props: BooleanExcludeIconProps) -> Element {
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
                d: "M1 7H11V9H3V21H15V13H17V23H1V7Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 1H23V17H13V15H21V3H9V11H7V1Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 11L15 9L13 9L13 7L17 7L17 11L15 11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 13L9 15L11 15L11 17L7 17L7 13L9 13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
