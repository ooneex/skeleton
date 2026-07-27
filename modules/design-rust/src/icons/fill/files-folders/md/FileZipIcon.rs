use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FileZipIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FileZipIcon(props: FileZipIconProps) -> Element {
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
                d: "M6 19H14V20.986L8.54464 28H14V30H6V28.014L11.4554 21H6V19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 19H24C26.2091 19 28 20.7909 28 23C28 25.2091 26.2091 27 24 27H22V30H20V19ZM22 25H24C25.1046 25 26 24.1046 26 23C26 21.8954 25.1046 21 24 21H22V25Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18 19V30H16V19H18Z",
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
