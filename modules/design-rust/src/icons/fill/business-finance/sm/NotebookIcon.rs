use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NotebookIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NotebookIcon(props: NotebookIconProps) -> Element {
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
                d: "M1 6H5V8H1V6Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 16H5V18H1V16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 11H5V13H1V11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18 1C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34314 23 3 21.6569 3 20V4C3 2.34315 4.34315 1 6 1H18ZM16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15H19V9H16Z",
                fill: "currentColor",
            }
        }
    }
}
