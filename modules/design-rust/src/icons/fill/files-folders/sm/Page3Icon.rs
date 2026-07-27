use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Page3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Page3Icon(props: Page3IconProps) -> Element {
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
                d: "M18 1C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34314 23 3 21.6569 3 20V4C3 2.34315 4.34315 1 6 1H18ZM7 10H17V12H7V10ZM7 6V8H12V6H7ZM14 6H17V8H14V6ZM7 14V16H10V14H7Z",
                fill: "currentColor",
            }
        }
    }
}
