use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FileTifIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FileTifIcon(props: FileTifIconProps) -> Element {
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
                d: "M20 19H27V21H22V23.5H25.75V25.5H22V30H20V19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 19H13V21H10V30H8V21H5V19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 19V30H15V19H17Z",
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
