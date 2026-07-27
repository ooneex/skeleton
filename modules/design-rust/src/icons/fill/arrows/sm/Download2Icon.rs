use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Download2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Download2Icon(props: Download2IconProps) -> Element {
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
                d: "M23 6C23 4.34315 21.6569 3 20 3H4C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6ZM11.0001 3V11.5H7L12 17.5L17 11.5H13.0001V3H11.0001Z",
                fill: "currentColor",
            }
        }
    }
}
