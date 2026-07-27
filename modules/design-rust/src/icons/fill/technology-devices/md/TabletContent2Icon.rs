use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TabletContent2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TabletContent2Icon(props: TabletContent2IconProps) -> Element {
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
                d: "M27 22H5V27C5 28.6569 6.34315 30 8 30H24C25.6569 30 27 28.6569 27 27V22ZM17.75 26.25C17.75 27.2165 16.9665 28 16 28C15.0335 28 14.25 27.2165 14.25 26.25C14.25 25.2835 15.0335 24.5 16 24.5C16.9665 24.5 17.75 25.2835 17.75 26.25Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M26 5C26 3.89543 25.1046 3 24 3L8 3C6.89543 3 6 3.89543 6 5L6 27C6 28.1046 6.89543 29 8 29L24 29C25.1046 29 26 28.1046 26 27L26 5ZM24 1C26.2091 1 28 2.79086 28 5L28 27C28 29.2091 26.2091 31 24 31L8 31C5.79086 31 4 29.2091 4 27L4 5C4 2.79086 5.79086 0.999999 8 0.999999L24 1Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 15H15V17H9V15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 11H23V13H19V11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 11H17V13H9V11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 7H15V9H23V7Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 7H9V9H13V7Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
