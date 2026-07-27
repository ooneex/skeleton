use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FileFlashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FileFlashIcon(props: FileFlashIconProps) -> Element {
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
                d: "M18 30H25V28H20V19H18V30Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 19H16V21H11V23.5H14.75V25.5H11V30H9V19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13.2426 1C12.1818 1 11.1644 1.42143 10.4142 2.17157L4.17157 8.41421C3.42143 9.16436 3 10.1818 3 11.2426V17H29V5C29 2.79086 27.2091 1 25 1H13.2426ZM13 11V3L5 11H13Z",
                fill: "currentColor",
            }
        }
    }
}
