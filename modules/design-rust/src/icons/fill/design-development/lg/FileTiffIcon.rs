use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FileTiffIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FileTiffIcon(props: FileTiffIconProps) -> Element {
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
                d: "M20 29V44H17V29H20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 29H14V32H10.5V44H7.5V32H4V29Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M35 29L44 29V32H38V35H41.5V38H38V44H35V29Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 29L32 29V32H26V35H29.5V38H26V44H23V29Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20.2426 2C19.1818 2 18.1644 2.42143 17.4142 3.17157L7.17157 13.4142C6.42153 14.1643 6 15.1812 6 16.2422V25H42V7.9991C42 4.68516 39.3135 2 36 2H20.2426ZM20 16V5L9 16H20Z",
                fill: "currentColor",
            }
        }
    }
}
