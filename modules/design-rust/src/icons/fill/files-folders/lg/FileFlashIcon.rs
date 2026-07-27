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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14.5 28L25 28V31H17.5V34.5H22V37.5H17.5V44H14.5V28Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27.5 44H38V41H30.5V28H27.5V44Z",
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
