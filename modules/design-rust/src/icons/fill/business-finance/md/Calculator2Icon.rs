use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Calculator2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Calculator2Icon(props: Calculator2IconProps) -> Element {
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
                d: "M26 2C28.2091 2 30 3.79086 30 6L30 26C30 28.2091 28.2091 30 26 30H6C3.79086 30 2 28.2091 2 26V6C2 3.79086 3.79086 2 6 2H26ZM11 18H9V21H6V23H9V26H11V23H14V21H11V18ZM25.9142 7.5L24.5 6.08579L22 8.58579L19.5 6.08579L18.0858 7.5L20.5858 10L18.0858 12.5L19.5 13.9142L22 11.4142L24.5 13.9142L25.9142 12.5L23.4142 10L25.9142 7.5ZM6 9V11H14V9H6ZM18 19H26V21H18V19ZM18 23V25H26V23H18Z",
                fill: "currentColor",
            }
        }
    }
}
