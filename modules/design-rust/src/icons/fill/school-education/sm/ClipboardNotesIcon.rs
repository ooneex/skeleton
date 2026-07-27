use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ClipboardNotesIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ClipboardNotesIcon(props: ClipboardNotesIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 4V2C8 1.44772 8.44772 1 9 1H15C15.5523 1 16 1.44772 16 2V4H8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18 2C19.6569 2 21 3.34315 21 5V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V5C3 3.34315 4.34315 2 6 2V4C6 5.10457 6.89543 6 8 6H16C17.1046 6 18 5.10457 18 4V2ZM7 15V17H17V15H7ZM7 13H17V11H7V13Z",
                fill: "currentColor",
            }
        }
    }
}
