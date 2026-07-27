use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SocketUkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SocketUkIcon(props: SocketUkIconProps) -> Element {
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
                d: "M19 2C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34314 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H19ZM13 7H11V11H13V7ZM18 16H14V14H18V16ZM10 16V14H6V16H10Z",
                fill: "currentColor",
            }
        }
    }
}
