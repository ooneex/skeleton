use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ListCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ListCheckIcon(props: ListCheckIconProps) -> Element {
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
                d: "M21 4C21 2.34315 19.6569 1 18 1H6C4.34315 1 3 2.34315 3 4V20C3 21.6569 4.34314 23 6 23H18C19.6569 23 21 21.6569 21 20V4ZM7 14V12H12V14H7ZM7 16V18H12V16H7ZM14 12H17V14H14V12ZM14 16V18H17V16H14ZM14 8H17V10H14V8ZM13.4142 6L12 4.58579L9 7.58579L7.5 6.08579L6.08579 7.5L9 10.4142L13.4142 6Z",
                fill: "currentColor",
            }
        }
    }
}
