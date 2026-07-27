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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13.2426 1C12.1818 1 11.1644 1.42143 10.4142 2.17157L4.17157 8.41421C3.42143 9.16436 3 10.1818 3 11.2426V17H29V5C29 2.79086 27.2091 1 25 1H13.2426ZM13 11V3L5 11H13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 19H22V21H17V23H20.75V25H17V29H15V19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 19H30V21H25V23H28.75V25H25V29H23V19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1.5 19H9.5V21H6.5V29H4.5V21H1.5V19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 19V29H11V19H13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
